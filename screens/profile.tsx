import "react-native-gesture-handler";
import React, {Component, useState} from 'react';
import { Image, Button, StyleSheet, Text, View , TouchableOpacity, Constructor, ListRenderItem, TextInput,} from 'react-native';
import globalStyle from "../globalStyle/globalStyle";


function Profile ({route}) {
  const { nameI } = route.params;
  const { ageI } = route.params;
  const { bioI } = route.params;
    return(
      <View style={globalStyle.mainView}>
        <Text>name: {nameI}</Text>
        <Image source={require("../assets/Rauno.jpg")} style={{ width: 140, height: 140, borderRadius:70, marginBottom:70 }}/>
        <Text style={globalStyle.profileText}>{JSON.stringify(nameI)}</Text>
        <Text style={globalStyle.profileText}>{JSON.stringify(ageI)}</Text>
        <Text style={globalStyle.profileText}>{JSON.stringify(bioI)}
        </Text>
        <Text style={globalStyle.profileText}>If you are in a good mood, then don`t be afraid to show it</Text>
        
      </View>
    );
  }

  export default Profile;