import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/pages/main/index';
import styleHeader  from './src/components/header/styles';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Main} 
        options={styleHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styleHeader = {
//   title: '',
//   headerStyle: {
//     backgroundColor: '#8B10FE'
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   }
// });

export default App;