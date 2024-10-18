import { StyleSheet, View, Alert, Button } from 'react-native';
import React from 'react';
import { Calendar } from 'react-native-calendars';
const CalendarScreen = () => {
    const handleFitnessCheck = () =>{
        Alert.alert("Fitness Check, Log in your fitness activity")
    };
  return (
    <View>
      <Calendar
      onPress={(day)=> {console.log("Selected day",day);
      }}
      markedDates={{
        "2024-10-17": {marked:true, dotColor:'red'},
      }}
      />
      <Button  title="FitnessCheck" onpress={handleFitnessCheck}/>
    </View>
  );
};
export default CalendarScreen

const styles=StyleSheet.create({
Container:{
    flex:1,
    justifyContent:'center',
    padding:10,
  },
})