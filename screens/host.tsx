import "react-native-gesture-handler";
import React from 'react';
import {View , TouchableOpacity, ScrollView} from 'react-native';
import globalStyle from "../globalStyle/globalStyle";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

function Host ({navigation}) {
    return(
      <ScrollView style={{backgroundColor:"#8A2BE2"}}>
        <View style={globalStyle.mainView}>
          <TouchableOpacity>
          <View style={{height:250}}>
            <Card style={{ width:340}}>
              <CardImage 
                source={{uri: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg'}} 
                title="Above all i am here"
              />
              <CardAction 
                separator={true} 
                inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="People"
                  color="purple"
                />
                <CardButton
                  onPress={() => {}}
                  title="Delete"
                  color="purple"
                />
              </CardAction>
            </Card>
          </View>
          </TouchableOpacity>

          <View style={{height:250}}>
            <Card style={{ width:340}}>
              <CardImage 
                source={{uri: 'https://cdn.pixabay.com/photo/2016/01/19/18/02/concerts-1150042__340.jpg'}} 
                title="Above all i am here"
              />
              <CardAction 
                separator={true} 
                inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="Push"
                  color="purple"
                />
                <CardButton
                  onPress={() => {}}
                  title="Later"
                  color="purple"
                />
              </CardAction>
            </Card>
          </View>
          
          <View style={{height:250}}>
            <Card style={{ width:340}}>
              <CardImage 
                source={{uri: 'https://cdn.pixabay.com/photo/2015/07/02/10/16/circus-828680__340.jpg'}} 
                title="Above all i am here"
              />
              <CardAction 
                separator={true} 
                inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="Push"
                  color="purple"
                />
                <CardButton
                  onPress={() => {}}
                  title="Later"
                  color="purple"
                />
              </CardAction>
            </Card>
          </View>
        </View>
      </ScrollView>
    );
  }

  export default Host;