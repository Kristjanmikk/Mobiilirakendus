import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React, {Component, useState, useEffect} from 'react';
import { Image, Button, StyleSheet, Text, View , TouchableOpacity, Constructor, ListRenderItem, TextInput, Platform} from 'react-native';
import globalStyle from "../globalStyle/globalStyle";
import * as Location from "expo-location";
import Constants from "expo-constants";

function Setting () {
    return(
      <View style={globalStyle.mainView}>
        <Text>HOST</Text>
      </View>
    );
  }

  export default Setting;