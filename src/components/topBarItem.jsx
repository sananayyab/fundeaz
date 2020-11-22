
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class TopBarItem extends React.Component {
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginLeft: '2%',
                marginRight: '2%',
               
                borderRadius: 10,
                flexDirection: 'row',
               
            },
            innerContainerAmount: {
                flex: 2.5,
         
                height: '70%',

                borderRadius: 5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1D2D44',
            },
            innerContainerText: {
                flex: 1.2,
                
                top:10,
                height: '43%',
            
              
           
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#05845D',
            },
            textAmount: {
                fontSize: 28,
                color: 'white',
            },
            textText: {
              
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 17,
                color: 'white',
            }
        })
        return (
            <View style={styles.container}>
                <View style={styles.innerContainerAmount}>
                    
                    <Text style={styles.textAmount} >6000.50</Text>
                </View>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText}>Unallocated</Text>
                   
                </View>
            </View>
        );
    }
}
export default TopBarItem
