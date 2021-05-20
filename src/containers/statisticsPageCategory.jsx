import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BarGraph from '../components/barGraph';
import PieChart from '../components/pieChart';
import StatisticsRanking from '../components/statisticsRanking';
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';

function StatisticsPageCategory(props)
{


    let today = new Date();

    const route = useRoute();
    const groupID = route.params.groupID;
    let barGraphData = [];
    let rankingData = [];
    let pieChartDate = [];
    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },


    });


    calculateGraphData();

    function getStartAndEndDate(index)
    {
        today.setHours(0,0,0,0);
        let dates = {
            start: null,
            end: null,
        };

        dates.start = new Date((today.getTime() - today.getDay() * 24 * 3600 * 1000) - (3 - index) * (7 * 24 * 3600 * 1000));

        if (index === 3)
        {
            dates.end = today;
            dates.end.setHours(23,59,59,999);
        }
        else
        {
            dates.end = new Date(((today.getTime() - today.getDay() * 24 * 3600 * 1000) - (3 - index) * (7 * 24 * 3600 * 1000)) + (6 * 24 * 3600 * 1000));
        }

        return dates;
    }


    function makeTransactionArray()
    {
        let temp = [];
        for (let key in props.transactions)
        {
            if (props.transactions[key].type !== 'Income' && props.transactions[key].groupID === groupID)
            {
                temp.push(props.transactions[key]);
            }
        }
        temp.sort((a, b) => parseInt(b.time) - parseInt(a.time));

        return temp;
    }

    function generateStartAndEndDates()
    {
        for (let i = 3; i >= 0; i--)
        {


            let dates = getStartAndEndDate(i);
            barGraphData.push({
                x: dates.start.getDate() + '-' + dates.end.getDate(),
                y: 0,
                start: dates.start.getTime(),
                end: dates.end.getTime(),
            });


        }
    }


    //add using data from the last month
    function makeTransactionRankingData(transactions)
    {
        let temp = transactions;

        temp.sort((a, b) => parseInt(b.amount) - parseInt(a.amount));

        let ranking = [];
        let date = new Date();
        let firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 25);
        for (let i = 0; i < 5; i++)
        {
            if (i < temp.length)
            {
                if (temp[i].date >= firstDay.getTime())
                {
                    ranking.push({name: temp[i].payee, value: temp[i].amount});
                }
            }
        }

        ranking.reverse();

        return ranking;
    }

    function addToPieChartData(transactions, grouping)
    {
        let date = new Date();
        let firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 25);
        firstDay.setHours(0,0,0,0);
        if (transactions.date >= firstDay.getTime())
        {
            if (grouping === 'group')
            {
                let index = pieChartDate.map(function (item)
                {
                    return item.groupID;
                }).indexOf(transactions.groupID)
                if (index !== -1)
                {
                    pieChartDate[index].value += parseInt(transactions.amount)
                }
                else if (index === -1)
                {
                    pieChartDate.push({
                        groupID: transactions.groupID,
                        value: parseInt(transactions.amount),
                        name: transactions.groupName,


                    })
                }
            }
            else if (grouping === 'category')
            {

                    let index = pieChartDate.map(function (item)
                    {
                        return item.categoryID;
                    }).indexOf(transactions.categoryID)
                    if (index !== -1)
                    {
                        pieChartDate[index].value += parseInt(transactions.amount)
                    }
                    else if (index === -1)
                    {
                        pieChartDate.push({
                            categoryID: transactions.categoryID,
                            value: parseInt(transactions.amount),
                            name: transactions.categoryName,


                        })
                    }

            }
        }
    }
    function calculateGraphData()
    {

        const transactions = makeTransactionArray();
        generateStartAndEndDates();
        rankingData = makeTransactionRankingData(transactions);
        for (let i = 0; i < transactions.length; i++)
        {
            for (let j = 0; j < barGraphData.length; j++)
            {
                if (parseInt(transactions[i].date) >= parseInt(barGraphData[j].start) && parseInt(transactions[i].date) <= parseInt(barGraphData[j].end))
                {


                    barGraphData[j].y += parseInt(transactions[i].amount);


                }
            }

            addToPieChartData(transactions[i], 'category')
        }

        barGraphData.reverse();


    }

    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
                <BarGraph
                    data={barGraphData}/>
                <PieChart data={pieChartDate}/>
                <StatisticsRanking data={rankingData}/>

            </ScrollView>
        </View>
    );

}

const mapStateToProps = (state, ownProps) =>
{
    const {transactions} = state;
    return {
        transactions: transactions.transactions,
        lastId: transactions.currentID,
    };
};


export default connect(mapStateToProps)(StatisticsPageCategory);

