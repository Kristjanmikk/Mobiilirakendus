import "react-native-gesture-handler";
import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


const AppButton = ({ onPress, title, style }) => (
    <TouchableOpacity onPress={onPress} style={style}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    buttonText:{
        color: "#FFF",
        fontSize: 16,
        textAlign: "center",
    },
  });

  export default AppButton;