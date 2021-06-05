import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import 'react-native-gesture-handler';

//Login Screen 
    const LoginScreen = ({navigation}) => {
      
    return (
        <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text1}>login</Text>
          <Pressable
            onPress={() => navigation.navigate('SignScreen')}>
            <Text style={styles.text2}>don't have an account?</Text>
          </Pressable>
       
        <View style={styles.email}>
          <TextInput style={{marginLeft: 0, top: 15, color:  "black",}} placeholder="USERNAME"  placeholderTextColor="gray"></TextInput>
        </View>
        <View style={styles.email}>
          <TextInput onChangeText={(value) => setTextInputPass(value)} secureTextEntry={true} style={{marginLeft: 0, top: 15, color:  "black",}} placeholder="PASSWORD" placeholderTextColor="gray"></TextInput>
          <Text style={{color: 'gray',
            fontSize: 16, 
            fontWeight: '400',
            top: 30, textAlign:'right'}}>forgot password?</Text>
        </View>
          <View style={styles.signup}>
          <Pressable onPress={() => alert('Account not found')}> 
            <Text style={styles.signuptext}>LOGIN</Text>
           </Pressable>
        </View>
        </View>
    

        
    );
}



const styles = StyleSheet.create(
    {
      text1:{
        color:  "black",
        fontWeight: '700',
        fontSize: 30,
        width: 120,
        lineHeight: 50,
        textAlign: 'center',
        marginTop: -100
      },
      text2:{
        color: 'gray',
        fontSize: 16, 
        fontWeight: '400',
        marginBottom: 20
      },
      email:{
        marginTop: 30,
        width: 150 * 2,
        height: 40,
        borderBottomColor:"black",
        borderBottomWidth: 1.5
       
       
            
      },
      signup:{
        top: 180,
        width: 150 * 2,
        height: 45,
        backgroundColor: "white",
        borderRadius: 50
       
      },
      signuptext:{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: 'black',
        top: 13,
        fontWeight: '700',
        letterSpacing: 2,
        lineHeight: 25

      }
        
    }
);

export default LoginScreen;
