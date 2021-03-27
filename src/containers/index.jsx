
import React from 'react';
import { registerRootComponent } from 'expo';
import App from './app'
import { Provider } from 'redux'
import Store from '../reducer/store'
import { SafeAreaView } from 'react-native';
class Index extends React.Component {

  render() {

    const store = Store()
    
    return (

      <Provider store={store}>
      
        <App />
        </SafeAreaView>
      </Provider>
    );
  }
}


export default registerRootComponent(Index);
1