import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, StyleSheet, Text, View, Pressable } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignScreen from './app/screens/SignScreen';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';

//Get Started Screen 
function GetScreen({ navigation }) {
  return (
    <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.textStyles}>how was your day</Text>
      <View style={styles.bottomView} >
      <Pressable
        onPress={() => navigation.navigate('SignScreen')}
        style={{ backgroundColor: 'white', padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      <Text style={{ 
            color:  "black",
            fontWeight: '700',
            fontSize: 16,
            letterSpacing: 2,
            lineHeight: 25}}>
            
            GET STARTED</Text>
      </Pressable>
      </View>
    </View>
  );
}
//Navigation 
const Stack = createStackNavigator();

const App = () => {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
      headerShown: false
    }}
      >
        <Stack.Screen name="GetScreen" component={GetScreen} />
        <Stack.Screen name="SignScreen" component={SignScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Welcome' }} />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create(
  {
      

      bottomView: {
          width:'90%',
          height: 70,
          backgroundColor: 'white', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'absolute',
          bottom: 50,
        
      },
      textStyles: {
        color:  "black",
        fontWeight: '700',
        fontSize: 50,
        width: 120,
        lineHeight: 50,
        textAlign: 'center'
      },
      
      
  }
);

export default App;

