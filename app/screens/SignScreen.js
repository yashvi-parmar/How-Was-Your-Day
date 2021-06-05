import React, {useState, createRef} from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from 'react-native';
import 'react-native-gesture-handler';


//Sign In Screen 
    const SignScreen = ({navigation}) => {

      //Error checking to check for user input (if there is no input - cannot move forward)
      const [textInputName, setTextInputName] = useState('');
      const [textInputEmail, setTextInputEmail] = useState('');
      const [textInputPass, setTextInputPass] = useState('');
    
      const checkTextInput = () => {

         if (!textInputEmail.trim()) {
          alert('Error: Missing Values');
          return;
        }
        if (!textInputName.trim()) {
          alert('Error: Missing Values');
          return;
        }
        if (!textInputPass.trim()) {
          alert('Error: Missing Values');
          return;
        }
        navigation.navigate('HomeScreen')
      };



    return (
        <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text1}>sign up</Text>
            <Pressable
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.text2}>already have an account?</Text>
            </Pressable>

          <View style={styles.email}>
            <TextInput maxLength = {40} onChangeText={(value) => setTextInputEmail(value)} style={{marginLeft: 0, top: 15, color:  "black",}} placeholder="EMAIL"  placeholderTextColor="gray"></TextInput>
        
          </View>
            <View style={styles.email}>
              <TextInput  maxLength = {20} onChangeText={(value) => setTextInputName(value)} style={{marginLeft: 0, top: 15, color:  "black",}} placeholder="USERNAME" placeholderTextColor="gray"></TextInput>
            </View>
            <View style={styles.email}>
             <TextInput  maxLength = {20} onChangeText={(value) => setTextInputPass(value)} secureTextEntry={true} style={{marginLeft: 0, top: 15, color:  "black",}} placeholder="PASSWORD"  placeholderTextColor="gray"></TextInput>
             </View>
      
          <Pressable  onPress={checkTextInput}>
     
          <View style={styles.signup}>
          <Text style={styles.signupText}>SIGN UP</Text>
          </View>
          </Pressable>
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
      signupText:{
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

export default SignScreen;
