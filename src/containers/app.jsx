
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import HomePage from './homePage.jsx';
import GroupPage from './groupPage.jsx';
import TransactionInput from './transactionDataInputPage.jsx';
import CategoryListPage from './categoryListPage.jsx';
import TransactionEdit from './transactionEdit.jsx';
import GroupListPage from './groupListPage.jsx';
import settingPage from './settingPage.jsx';
import fundOverviewPage from './fundOverviewPage.jsx'
import TransactionListPage from './transactionListPage.jsx';
import AllocationPage from './allocationPage.jsx';
import CategoryPage from './categoryPage.jsx'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store, persistor } from '../reducer/store'
import { PersistGate } from 'redux-persist/integration/react';
function App(props) {


    //persistor.purge()

    const Stack = createStackNavigator();
    return (

        <Provider store={store}>

            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>

                    <Stack.Navigator initialRouteName="HomePage"
                        screenOptions={{
                            headerShown: false,
                            gestureEnabled: true,
                            gestureDirection: "horizontal",
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

                        }}
                    >
                        <Stack.Screen name="HomePage" component={HomePage} />
                        <Stack.Screen name="GroupPage" component={GroupPage} />
                        <Stack.Screen name="CategoryList" component={CategoryListPage} />
                        <Stack.Screen name="GroupList" component={GroupListPage} />
                        <Stack.Screen name="TransactionList" component={TransactionListPage} />
                        <Stack.Screen name="TransactionInput" component={TransactionInput} />
                        <Stack.Screen name="TransactionEdit" component={TransactionEdit} />
                        <Stack.Screen name="AllocationPage" component={AllocationPage} />
                        <Stack.Screen name="SettingPage" component={settingPage} />
                        <Stack.Screen name="FundOverviewPage" component={fundOverviewPage} />
                        <Stack.Screen name="CategoryPage" component={CategoryPage} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}




export default App;
