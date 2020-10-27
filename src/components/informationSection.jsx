import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import SpendingSection from '../components/spendingSection.jsx';
import CategorySection from '../components/categorySection.jsx';
import TransactionSection from '../components/transactionSection.jsx';
import Carousel from 'react-native-snap-carousel';
class InformationSection extends React.Component
{
     sliderWidth = Dimensions.get('window').width;

    constructor(props)
    {
        super(props);
        this.state = {
               data: [<TransactionSection/>, <CategorySection/>, <SpendingSection/>]
            }
    }
    items = ({ item, index }) =>
    {
        return (
            <View style={ { flex: 1} }>
            {item}
            </View>
        );
    }

    render()
    {
        return (
            <View style={ styles.container }>
           
                <Carousel
                    data={ this.state.data }
                    renderItem={ this.items }
                    sliderWidth={ this.sliderWidth }
                    itemWidth={ this.sliderWidth}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexDirection: 'column',

        backgroundColor: 'white',
    },
 
});

export default InformationSection;
