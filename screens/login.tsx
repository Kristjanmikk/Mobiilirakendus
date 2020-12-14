import "react-native-gesture-handler";
import React from 'react';
import {Text, View} from 'react-native';
import AppButton from "../components/appButton";
import globalStyle from "../globalStyle/globalStyle";

function Login ({ route, navigation }){
  

    return(
      <View style={globalStyle.mainView}>
        <Text style={globalStyle.h1}>JOINem</Text>
        <Text style={globalStyle.h4}>NEW FRIENDS EVERYWHERE YOU GO</Text>
          <AppButton style={globalStyle.loginButton} title="SIGN IN WITH PHONE NUMBER" onPress={() => navigation.navigate("MainMenu")} />
          <AppButton style={globalStyle.loginButton} title="REGISTER AN ACCOUNT" onPress={() => navigation.navigate("Register")} />
      </View>
    );
  }



  export default Login;