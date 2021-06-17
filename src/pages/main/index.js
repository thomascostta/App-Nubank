import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Main = () => (
    <View style={styles.container}>
             <StatusBar barStyle="light-content" backgroundColor="#8B10FE" />
    </View>
);
r


  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8B10FE', 
        flex: 1, 
        // alignItems: 'center', 
        // justifyContent: 'center'
    },
    // image: {
    //   flex: 1,
    //   resizeMode: "cover",
    //   justifyContent: "center"
    // }
  });

  export default Main;




// export default function Main() {
//     return (
//       <View style={styles.container}>
//             <Text>Main</Text>
//       </View>
//     );
//   }