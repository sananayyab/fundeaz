import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Circle, Svg} from 'react-native-svg';


function PieChart(props)
{

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('screen').height;
    const radius = 50;
    const strokeW = radius * 2;
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const circumf = 2 * Math.PI * radius;
    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },

        pieChartContainer: {
            height: screenHeight * 0.45,
            borderRadius: 10,
            backgroundColor: '#98B0D3',
            margin: '3%',
            flexDirection: 'row',
            marginTop: 0,
            borderTopLeftRadius: 0,

        },

        pieChart: {
            width: '55%',

        }, pieChartLabels: {
            width: '45%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',


        }, pieChartLabelItem: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }, containerTag: {
            marginTop: '5%',
            backgroundColor: '#1D2D44',
            height: '10%',
            width: '50%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,

            marginLeft: '3%',
        }, tagText: {
            color: 'white',
            top: '15%',
            fontSize: 19,
            textAlign: 'center',
            textAlignVertical: 'center',
        },



    });
    function shuffle(a) {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    props.data.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
    let total = 0;
    let pieChartElements = [];
    let pieChartLabelsElements = [];
    let colours = ['#3D9296', '#275D5F', '#57B5BA','#124559', '#3D7496','#88CCE7','#939BB4','#C0C3CE','#23262E','#505568','#363946','#80869D','#09BC8A','#068863', '#04513B','#033628','#3C8965', '#0937BD','#BFFCEB' ,'#4ECDC4'];
    colours = shuffle(colours)
    for (let i = 0; i < props.data.length; i++)
    {
        total += props.data[i].value;
    }
    let percentTotal = 0;

    function generateGraphElements(item, index)
    {



        let percentage = (item.value * 100 / total);

        pieChartElements.push(< Circle  key={index + item} cx={'52%'} cy={'52%'} fill={'none'} r={radius} strokeWidth={strokeW}
                                      strokeDasharray={percentage * circumf / 100 + ',' + circumf}
                                      strokeDashoffset={[-percentTotal * circumf / 100]}
                                      stroke={colours[index % 20]}/>);
        percentTotal += percentage;
    }

    function generateGraphLabels(item, index)
    {
        if(index < 10)
        {
            pieChartLabelsElements.push(<View  key={item + index} style={styles.pieChartLabelItem}>
                <View style={{
                    height: 20,
                    width: 20,
                    backgroundColor: colours[index % 20],

                }}/>
                <Text style={{width: '50%'}}>
                    {item.name}
                </Text>
            </View>);
        }
    }

    props.data.forEach(generateGraphElements);
    props.data.forEach(generateGraphLabels);


    return (
        <View style={styles.container}>
            <View style={styles.containerTag}>
                <Text style={styles.tagText}>
                    Category Spending
                </Text>
            </View>
            <View style={styles.pieChartContainer}>
                <View style={styles.pieChart}>
                    <Svg height={'100%'} width={'100%'}>


                        {pieChartElements}

                    </Svg>
                </View>
                <View style={styles.pieChartLabels}>


                    {pieChartLabelsElements}
                </View>
            </View>
        </View>
    );

}

export default PieChart;
