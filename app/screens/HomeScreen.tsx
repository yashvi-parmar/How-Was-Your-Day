import React, {useState, useRef, useEffect, Component} from 'react';
import {Agenda} from 'react-native-calendars';
import { Keyboard, StyleSheet, Text, View, Pressable, Image, TextInput, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView} from 'react-native';
import {subDays, format, addDays} from 'date-fns';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


//Typescript used to support object types
type Item = {
  good: String;
  not: String;
  lesson: String;
};

//Creating the post interface to fetch from REST API
type Post = {
  id: number,
  title: string;
  body: string;
  userId: number;
};

const HomeScreen = ({navigation}) => {


      
      const day = (new Date()) ;
      


      const [items, setItems] = useState<{[key: string]: Post[]}>({});

      useEffect(() => {
    //End Date
     const index = new Date(2022, 0, 2);
     //Start Date
     const startDate = new Date();
     
      const getData = async () => {
      //Using the free, fake API 
       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       
       const data: Post[] = await response.json();
       const mappedData = data.map((post, index) => {

        const date = addDays(startDate, index);
        return {
          ...post,
          date: format(date, 'yyyy-MM-dd'),
        };
      });

      const reduced = mappedData.reduce((acc:{[key:string]: Post[]}, currentItem) => {
          const { date, ...itemrandom } = currentItem;

          acc[date] = [itemrandom];

          return acc;
      }, {},);
       setItems(reduced);
       

      };
      getData();
    }, []);



      

      const renderItem = (item: Item) => {
        return (
          <KeyboardAwareScrollView >
         <View style={{justifyContent: 'center', 
        }} >
        
        

        <View style={{margin: 20, borderRadius: 20, top: 20, justifyContent:'center', backgroundColor: 'white'}} >
        
         <View style={{flex: 1, alignItems:'center', marginTop: 20}}>
           
         <View style={styles.good}>
         <Text style={styles.text3}>The Good</Text>
           <TextInput 
        


       maxLength = {110} multiline={true}  style={{top: -10, marginLeft: 0, color: 'black', }}> {item.good}
         
         </TextInput>
        
        
         </View>
         </View>
           
         
         <View style={{alignItems:'center'}}>
         <View style={styles.good}>
         <Text style={styles.text3}>The Not-So Good</Text>
           <TextInput  maxLength = {110} multiline={true} style={{top: -10, marginLeft: 0, color: 'black', }}>{item.not}</TextInput>
         </View>
         </View>

         
         <View style={{alignItems:'center'}}>
         <View style={styles.good}>
         <Text style={styles.text3}>The Lesson</Text>
           <TextInput  maxLength = {110} multiline={true} style={{top: -10, marginLeft: 0, color: 'black', }}>{item.lesson}</TextInput>
         </View>
        
         </View>
         
         </View>
         
         
       
         
    
         
     </View>

 </KeyboardAwareScrollView>

        )
      }

     


      /* */

    
   return (
      <View  style={{ flex: 1, backgroundColor: 'white'}}> 
      <Text style={{color:  "black",
        fontWeight: '500',
        fontSize: 25,
        marginTop: 60,
        marginBottom: 10,
        lineHeight: 50,
        textAlign: 'center', borderBottomWidth: 0.2}}>calendar</Text>
      
      <Agenda    
     
     
         
          onVisibleMonthsChange={(months) => {console.log(day);}}
          pastScrollRange={2}
          futureScrollRange={1}
          scrollEnabled={true}
          showScrollIndicator={true}
          maxDate={(new Date())}
          theme={{
            
            borderRadius: 10,
            textSectionTitleColor: 'gray',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: "black",
            selectedDayTextColor: '#ffffff',
            todayTextColor: "black",
            dayTextColor: 'gray',
            textDisabledColor: 'lightgray',
            dotColor: 'white',
            monthTextColor: 'black',
            agendaTodayColor: 'black',
           
}}

items={items}
renderItem={renderItem}


      
       renderEmptyData= {() => {
         return (
           <View style={{backgroundColor: 'white'}}></View>
           
      );}}> 
      </Agenda>
      </View>
    );
}

const styles = StyleSheet.create(
    {
      text1:{
        color:  "black",
        fontWeight: '700',
        fontSize: 30,
        
        lineHeight: 50,
        textAlign: 'center',
        top: 150
      },
  
      good:{
        marginTop: 40,
        width: 130 * 2,
        height: 70,
        
        borderColor: 'black',
        borderTopWidth: 1,

        marginBottom: 10,
      
        
  
      },
      text3:{
        top: -30,
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        textAlign: 'left'
        
      },

      container: {
        flex: 1
      },
      

    }
);

export default HomeScreen;
