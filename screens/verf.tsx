import "react-native-gesture-handler";
import React, {Component, useState} from 'react';
import { Text, View } from 'react-native';
import AppButton from "../components/appButton";
import globalStyle from "../globalStyle/globalStyle";
import TextInp from "../components/textInp";

function Verf ({navigation}) {
    return(
      <View style={globalStyle.registerView}>

        <Text style={globalStyle.h2}>ENTER CONFIRMATION CODE</Text>
        <TextInp onChangeText="" text="CONFIRMATION CODE" placeholder="" keyboardType="numeric" style={globalStyle.registerInput} multiline={true}/>
        <AppButton style={globalStyle.mainButton} title="VERIFY" onPress={() => navigation.navigate("UserDetails")} />
        
      </View>
    );
  }

  export default Verf;