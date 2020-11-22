import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class CategoryListItem extends React.Component {
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginLeft: '2%',
                marginRight: '2%',
                marginTop: '1%',
                marginBottom: '4%',
                borderRadius: 10,
                flexDirection: 'row',
            },
            innerContainerText: {
                flex: 3,
            
                height: '100%',
                borderRadius: 5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: '#1D2D44',
            },
            
            innerContainerAmount: {
                flex: 1.3,
                top: 5,
                height: '75%',
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#05845D',
            },
            textText: {
                paddingLeft: 0,
                padding: '3%',
                fontSize: 22,
                color: 'white',
                marginLeft: '5%',
            },
            textAmount: {
              
                fontSize: 20,
                color: 'white',
            }
        })
        return (
            <View style={styles.container}>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText} >Group</Text>
                </View>
                <View style={styles.innerContainerAmount}>
                    <Text style={styles.textAmount}>600</Text>
                </View>
            </View>
        );
    }
}
export default CategoryListItem
