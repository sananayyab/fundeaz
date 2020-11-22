
import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CategoryItem from './categoryItem.jsx';
import Carousel from 'react-native-snap-carousel';

class CategorySection extends React.Component {
    sliderWidth = Dimensions.get('window').width - 20;

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
           
                marginBottom: '4%',
                marginLeft: '2%',
                marginRight: '2%',
                //borderTopRightRadius: 15,
                //borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              
               
                borderBottomRightRadius: 15,
                flexDirection: 'row',
                backgroundColor: '#8D8D92',
                flex: 1,
            },
            ListButton: {
                backgroundColor: 'white',
            },
        })
        return (
            <View style={styles.container}>
               
               <Carousel
               enableSnap={false}
               inactiveSlideOpacity={1}
               inactiveSlideScale={1}
                activeSlideAlignment={'start'}
                    data={ this.props.stuff.Groups.map((item) => ( <CategoryItem key={item.id} name={item.name} navigation={this.props.navigation}/>))}
                    renderItem={ this.items }
                    sliderWidth={ this.sliderWidth  }
                    itemWidth={ 197}
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
