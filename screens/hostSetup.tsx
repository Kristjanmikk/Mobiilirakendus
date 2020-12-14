import "react-native-gesture-handler";
import React, {Component, useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import AppButton from "../components/appButton";
import globalStyle from "../globalStyle/globalStyle";
import Slider from "@react-native-community/slider";
import CameraRoll from "@react-native-community/cameraroll";
import ImagePicker from "react-native-image-crop-picker";


function HostSetup ({ navigation }){
  const [ageVal, setAgeVal] = React.useState(18);
  const [guestVal, setGuestVal] = React.useState(4);
  const [descriptionVal, setDescriptionVal] = React.useState("");
    return(
      <View style={globalStyle.mainView}>
        <Text>AGE</Text>
        <Slider style={{width:250, }}
        maximumValue={100}
        minimumValue={18}
        step={1}
        value={ageVal}
        onValueChange={(ageValue) => setAgeVal(ageValue)  }
         />
         <Text>Age range : 18 - {ageVal}</Text>



        <Text>NUMBER OF GUESTS</Text>

        <Slider style={{width:250,}}
        maximumValue={20}
        minimumValue={4}
        step={1}
        value={guestVal}
        onValueChange={(guestValue) => setGuestVal(guestValue)} />
        <Text>Number of guest : 4 - {guestVal}</Text>


        <Text style={{marginTop: 40, marginBottom: 7}} >Seletus</Text>
        <TextInput
        style={{backgroundColor:"#FFD", width:250, borderRadius:5, height:100, textAlignVertical: "top"}} 
        multiline={true} 
        numberOfLines={3}
        onChangeText={(text) => setDescriptionVal(text)}
        value={descriptionVal}
        placeholder="Event description"
         />


        <AppButton style={globalStyle.mainButton} title="Host Event!" onPress={() => navigation.navigate("Host")} />
      </View>
      
    );
  }


  export default HostSetup;