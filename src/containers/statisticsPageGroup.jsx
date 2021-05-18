import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BarGraph from '../components/barGraph';
import PieChart from '../components/pieChart';
import StatisticsRanking from '../components/statisticsRanking';
import {connect} from 'react-redux';

function StatisticsPageGroup(props)
{


    let today = new Date();
    let barGraphData = [];
    const transactions = props.transactions;
    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },


    });


       calculateBarGraphData();

    function getStartAndEndDate(index)
    {
        let dates = {
            start: null,
            end: null,
        };

        dates.start = new Date((today.getTime() - today.getDay() * 24 * 3600 * 1000) - (3 - index) * (7 * 24 * 3600 * 1000));

        if (index === 3)
        {
                dates.end = today
        }
        else
        {
            dates.end = new Date(((today.getTime() - today.getDay() * 24 * 3600 * 1000) - (3 - index) * (7 * 24 * 3600 * 1000)) + (6* 24 * 3600 * 1000)  );
        }

        return dates;
    }

    function calculateBarGraphData()
    {

        let currentTransactionIndex = props.lastId


        for (let i = 3; i >= 0; i--)
        {
            let dates = getStartAndEndDate(i);

            let amount = 0


            if(currentTransactionIndex !== 1)
            {



                while ( transactions[currentTransactionIndex].date > dates.start.getTime())
                {




                    amount += parseInt(transactions[currentTransactionIndex].amount);
                    currentTransactionIndex--;
                    if(currentTransactionIndex === 1)
                    {
                        break;
                    }



                }
            }

            barGraphData.push({x: dates.start.getDate() + "-" + dates.end.getDate(), y: amount})
        }

        barGraphData.reverse();


    }

    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
                <BarGraph
                    data={barGraphData}/>
                <PieChart data={[{name: 'last', value: 10}, {name: 'last', value: 1}, {name: 'beforelast', value: 2}]}/>
                <StatisticsRanking data={[{name: 'stuff1', value: 100}, {name: 'last', value: 1}, {
                    name: 'bjlnaslf',
                    value: 20,
                }, {name: 'akldfjl', value: 25}, {name: 'stuff2', value: 12}]}/>

            </ScrollView>
        </View>
    );

}

const mapStateToProps = (state, ownProps) =>
{
    const {transactions} = state;
    return {transactions: transactions.transactions,
    lastId: transactions.currentID};
};


export default connect(mapStateToProps)(StatisticsPageGroup);

