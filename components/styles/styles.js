import React,{Component} from "react";
import {
  StyleSheet
} from "react-native";
const styles=StyleSheet.create(
  {
    waperContainer:
    {
      flex:1,
      width:null,
      height:null,
      justifyContent:'center',
      alignItems:'center',
      resizeMode:'stretch'
    },
    waperLogo:
    {
      flex:1
    },
    logo:
    {
      width:220,

    },khung:{




      flex :1
    },
    tieude: {
      backgroundColor:'yellow',
      color:'red',
      flex: 1,


    },
    color3:
    {
      backgroundColor:'pink',
      color:'red',
      flex: 1,

    },
    toolBar:
    {
      height:50,
      flex:1,
      backgroundColor:'green',
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row'

    },
    iconSearch:
    {
      height:50,
      width:50,
      resizeMode:'contain'
    },
    picker:
    {
      width:100,

      color:'orange',
      fontSize:16
    },
    textToolBar:
    {
      flex: 1,
      color:'white',
      fontSize:16
    },
    formInput:
    {
      flex:3,
      fontSize:16,
      color:'white'
    },
    style_text: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333333',
    alignSelf: 'center',

  },
  containerList:{
    flexDirection:'row'
  },
  style_row_view: {
    flex: 1,
    flexDirection: 'row',
    height: 57,
    backgroundColor: '#FFFFFF',
  },
  toolBar:{
    height:50,
    backgroundColor:'red',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
  },
  image:{
    width:150,
    height:150,
    resizeMode:'contain',
    margin:5
  },

title:{
  color:'red',
  fontSize:16
},
content:
{
  fontSize:14,
},
waperContainer:{
  flex:1
}



  }
);
export default styles ;
