import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';


import Home from './src/components/home';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Stack.Navigator initialRouteName="Home" >
       
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
         }} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;