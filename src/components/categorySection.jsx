import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import CategoryItem from './categoryItem.jsx';
import Carousel from 'react-native-snap-carousel';

class CategorySection extends React.Component {
    sliderWidth = Dimensions.get('window').width;

    constructor(props){
        super(props)
       
    }
    items = ({ item, index }) =>
    {
        return (
            <View style={ { flex: 1, 
            marginTop: "5%",
            } }>
            {item}
            </View>
        );
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                marginTop: 0,
                marginBottom: '4%',
                marginLeft: '3%',
                marginRight: '3%',
                borderRadius: 10,
                flexDirection: 'row',
                backgroundColor: '#8D8D92',
                flex: 1,
            },
            outterContainer: {
            },
        })
        return (
            <View style={styles.container}>
               
               <Carousel
                
                    data={ this.props.stuff.Groups.map((item) => ( <CategoryItem key={item.id} name={item.name} navigation={this.props.navigation}/>))}
                    renderItem={ this.items }
                    sliderWidth={ this.sliderWidth }
                    itemWidth={ this.sliderWidth / 2.5}
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    const {home}  = state
    return { stuff: home }
  };
export default connect(mapStateToProps)(CategorySection);
