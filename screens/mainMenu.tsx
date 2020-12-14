import "react-native-gesture-handler";
import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import AppButton from "../components/appButton";
import globalStyle from "../globalStyle/globalStyle";
import {LinearGradient} from "expo-linear-gradient";


function MainMenu ({ navigation }) {

    return(
      <View style={globalStyle.mainView}>
        <LinearGradient
            // Background Linear Gradient
            colors={['rgba(245,229,255,0.8)', 'transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 500,
              transform: [{rotateX: "180deg"},]
            }}
          />
          <AppButton style={globalStyle.mainButton} title="HOST" onPress={() => navigation.navigate("HostSetup")} />
          <AppButton style={globalStyle.mainButton} title="PROFILE" onPress={() => navigation.navigate("Profile")} />  
          <AppButton style={globalStyle.mainButton} title="JOIN" onPress={() => navigation.navigate("Join")} />
      </View>
    );
  }

  export default MainMenu;



