
import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import SpendingSection from './transactionSection.jsx';
import CategorySection from '../components/categorySection.jsx';
import TransactionSection from './null2.jsx';
import Carousel from 'react-native-snap-carousel';
import {updateIndex} from '../action/groupPageAction'
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux'

class InformationSection extends React.Component
{
     sliderWidth = Dimensions.get('window').width;

    constructor(props)
    {
        super(props);
        this.state = {
               
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
                    onSnapToItem={(slideIndex) => {this.props.changeIndex(slideIndex)}}
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

const mapDispatchToProps = (dispatch) => {
  return {
      changeIndex: (newIndex) => dispatch(updateIndex(newIndex))
  }
}

export default connect(null,mapDispatchToProps)(InformationSection)

