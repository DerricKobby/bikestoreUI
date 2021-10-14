import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from "./screens/Login";

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex: 1, backgroundColor:"#ffffff"}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
          <MainNavigator.Screen name="Login" component={Login}/>
          
          
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
