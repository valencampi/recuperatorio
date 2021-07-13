import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home } from './screens/Home';
import { Importadas } from './screens/Importadas';

const Drawer = createDrawerNavigator();

class App extends Component{
  render(){
    return(
      <NavigationContainer>
          <Drawer.Navigator 
                initialRouteName="Home"
                drawerPosition="left"
                drawerType="back"
                overlayColor='grey'
                drawerStyle={{
                  backgroundColor:'green',
                  width: 200,
                }}
                drawerContentOptions={{
                  actitiveBackgroundColor:'grey',
                  activeTintColor: 'white',
                  inactiveTintColor: 'black',
                }}
              >
            <Drawer.Screen name="Inicio" component={Home}/>
            <Drawer.Screen name="Importadas" component={Importadas}/>
          </Drawer.Navigator>
      </NavigationContainer>
    )
}
}

export default App;
