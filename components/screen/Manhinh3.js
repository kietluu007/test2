import React,{Component} from "react";
import {
  View,Text,StyleSheet,Button,TextInput,Alert,ScrollView,Image,TouchableOpacity,Picker,ListView,Item
} from "react-native";
import styles from "../styles/styles";
import DatePicker from 'react-native-datepicker'

export default class Manhinh3 extends Component
{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View  style={styles.color3}>
      <View>
          <Text onPress={this.props.ontxt3Press}> BACK</Text>
      </View>
      <View>
      <Text style={{fontSize:20,textAlign:'center',color:'green'}}> MUSIC </Text>
      <Text></Text>
      <Text></Text>
      </View>

      </View>


    );
  }
  }
