import React from "react";
import {TextInput, View, Text} from "react-native";

const TextInp = ({style, placeholder, keyboardType, text, multiline, onChangeText}) => (
    <View>
        
        <Text>{text}</Text>
        <TextInput keyboardType={keyboardType} style={style} placeholder={placeholder} multiline={multiline} onChangeText={onChangeText}/>

    </View>
);

export default TextInp;