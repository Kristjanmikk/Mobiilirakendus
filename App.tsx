import "react-native-gesture-handler";
import React, {Component, useState, useEffect} from 'react';
import { Image } from 'react-native';
import {NavigationContainer}  from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./screens/login";
import AppButton from "./components/appButton";
import Register from "./screens/register";
import MainMenu from "./screens/mainMenu";
import Host from "./screens/host";
import Join from "./screens/join";
import Verf from "./screens/verf";
import HostSetup from "./screens/hostSetup";
import UserDetails from "./screens/userDetails";
import Profile from "./screens/profile";
import {AntDesign} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Setting from "./screens/setting";


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, borderRadius:50, }}
      source={require("./assets/logo.png")}
    />
  );
}
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();




function DrawerNav(){
  return(
    <Drawer.Navigator >
  
        <Drawer.Screen name="setting" component={Setting}/>
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
    
  <NavigationContainer>{
    <Stack.Navigator initialRouteName = "Login" screenOptions={{
      title:"JoinEm",
      headerStyle: {
        backgroundColor: "#8A2BE2",
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        textAlign: "center",
        fontWeight: "bold",
      },
      headerRight: () => (
        <LogoTitle></LogoTitle>
      ),
    }}>
      <Stack.Screen name="MainMenu" component={MainMenu}/>
      <Stack.Screen name="Profile" component={Profile}  initialParams={{nameI: "example", ageI: 18, bioI: "example"}}/>
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen name="Host" component={Host} />
      <Stack.Screen name="Join" component={Join} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      <Stack.Screen options={{headerShown: false}} name="Verf" component={Verf} />
      <Stack.Screen name="HostSetup" component={HostSetup} />
      <Stack.Screen options={{headerShown: false}} name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
    }
    </NavigationContainer>
    );
}

