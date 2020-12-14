import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { Image, Button, StyleSheet, Text, View , TouchableOpacity, Constructor, ListRenderItem, TextInput} from 'react-native';
import AppButton from "../components/appButton";
import globalStyle from "../globalStyle/globalStyle";
import TextInp from "../components/textInp";

function Register ({navigation}) {
    return(
      <View style={globalStyle.registerView}>
        <Text style={globalStyle.h2}>WHAT`S YOUR PHONE NUMBER?</Text>
        <TextInp onChangeText="" text="PHONE NUMBER" placeholder="+372 4433 4231" keyboardType="numeric" style={globalStyle.registerInput} multiline={true}/>
        <AppButton style={globalStyle.mainButton} title="CONTINUE" onPress={() => navigation.navigate("Verf")} />
      </View>
    );
  }


  export default Register;