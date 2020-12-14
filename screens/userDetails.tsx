import "react-native-gesture-handler";
import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import AppButton from "../components/appButton";
import globalStyle from "../globalStyle/globalStyle";
import TextInp from "../components/textInp";

function UserDetails ({navigation}) {
    const [name, setName] = React.useState("mari");
    const [age, setAge] = React.useState("16");
    const [bio, setBio] = React.useState("tere");
    return(
      <View style={globalStyle.registerView}>

        <Text>UserDetails</Text>
        <TextInp onChangeText={(name) => setName(name) } text="Ees ja Perenimi" placeholder="'Mart Madison'" keyboardType="default" style={globalStyle.registerInput} multiline={true}/>
        <TextInp onChangeText={(age) => setAge(age) } text="Vanus" placeholder="'18'" keyboardType="numeric" style={globalStyle.registerInput} multiline={true}/>
        <TextInp onChangeText={(bio) => setBio(bio) } text="BIO" placeholder="'Seletus endast'" keyboardType="default" style={globalStyle.registerInput} multiline={true}/>
        <AppButton style={globalStyle.mainButton} title="CREATE" onPress={() => {navigation.navigate("MainMenu",
         {nameI: name, ageI: age, bioI: bio});}}/>
      </View>
    );
  }

  export default UserDetails;