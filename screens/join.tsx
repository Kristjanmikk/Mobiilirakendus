import "react-native-gesture-handler";
import React, {Component, useState, useEffect} from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import AppButton from "../components/appButton";
import globalStyle from "../globalStyle/globalStyle";

interface Istate {
    index: number;
    imgList: any[];
  }
  
    

  class Join extends React.Component <{},Istate> {
    
    constructor(props){
      super(props)
      this.onClickForward = this.onClickForward.bind(this)
      this.onClickBack = this.onClickBack.bind(this)
    
      const img0 = require("../assets/1.jpg");
      const img1 = require("../assets/2.jpg");
      const img2 = require("../assets/3.jpg");
      this.state = {
        index: 0,
        imgList: [img0, img1, img2]
      }
    } 
  
    onClickForward(){
      if (this.state.index + 1 === this.state.imgList.length){
        this.setState({
          index: 0
        })
      } else {
        this.setState({
          index: this.state.index + 1
        })
      }
     }
  
    
     onClickBack(){
       if (this.state.index - 1 === -1) {
         this.setState({
           index: this.state.imgList.length - 1
         })
       } else {
         this.setState({
           index: this.state.index - 1
         })
       }
     }
     render(){
       return (
         <>
         <View style={{ alignItems: "center", justifyContent: "center", backgroundColor:"#8A2BE2", flex:1}}>
              <Image style={styles.images} source={this.state.imgList[this.state.index]} />
              <Text style={{fontSize:25, color: "#FFF", textAlign:"center", paddingTop:10}}>Movie Night at Maarja`s penthouse</Text>
              <Text style={globalStyle.joinText}>Have you ever had a dream, Neo, that you were so sure was real? what if you were unable to wake from that dream?</Text>
              <View style={{flexDirection:"row", flexWrap:"wrap", marginTop: 40,}}>
              <AppButton style={globalStyle.declineButton} onPress={this.onClickBack} title="X" />
              <AppButton style={globalStyle.agreeButton}  onPress={this.onClickForward} title="✓" />
          </View>
         </View>
         </>
       )
     }
  }

  const styles = StyleSheet.create({
    images:{
      height: 330,
      width: 360,
      
    },
  });

  export default Join;