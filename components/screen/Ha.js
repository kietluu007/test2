
import React,{Component} from "react";
import {
View,Text,StyleSheet,Button,TextInput,Alert,Image,ListView
} from "react-native";
import firebase from "../api/api";
import styles from "../styles/styles";


const onButtonPress = () => {
Alert.alert('Button has been pressed!');

};


export default class Ha extends Component
{
constructor(props) {
  super(props);
  items=[];
   database=firebase.database();
      user=database.ref('User');

  this.state = { text: '' ,txtmatkhau:'',
  dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
};


}
submit()
{
  user.push(
    {
      Username: this.state.text,
      Password: this.state.txtmatkhau,
    },()=>alert("ok xong")
  )
}

componentWillMount()
{
  database.ref('User').on('value',(snap)=>{
    items=[];
    snap.forEach((data)=>{
      items.push(
        {
          key:data.key,
          data:data.val(),
        }
      );
    })

    this.setState({dataSource:this.state.dataSource.cloneWithRows(items)});
  }
);
}

renderRow(data)
{
  return(
    <View>

    <View  style={{
     flexDirection:'row'}}>

    <View>
    <Image
        style={{width: 50, height: 50}}
        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
      />
    </View>
    <View>

    <Text> Username:{data.data.Username} </Text>
    <Text> Password:{data.data.Password} </Text>
    </View>
    </View>
    <View style={{height:2, backgroundColor:'orange'}}/>
    </View>
  );
}


render(){
  return(

    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
    < View style={styles.khung}>
    <View>
      <Text   onPress={this.props.onbuttonPress}> GO TO</Text>
    <Text  style={{fontSize:20,textAlign:'center',color:'green'}}> ĐĂNG KÍ TÀI KHOẢN </Text>
    </View>

    <Image
           style={styles.khung}
             source={require('seminar/components/images/la_xanh.png')}
           >



         <View>
         <TextInput
         underlineColorAndroid="transparent"
       style={{height: 40, borderColor: 'yellow', borderWidth: 1}}
       onChangeText={(text) => this.setState({text})}

       value={this.state.text}
       placeholder='username' />
       <Text></Text>


       <TextInput secureTextEntry={true}
       underlineColorAndroid="transparent"
     style={{height: 40, borderColor: 'yellow', borderWidth: 1}}
     onChangeText={(txtmatkhau) => this.setState({txtmatkhau})}

     value={this.state.txtmatkhau}
      placeholder='password' />


     <Text></Text>
     <Text></Text><Text></Text>
     <Text></Text>
     </View>
       </Image>



       <View style={{ height: 50,marginLeft:100, marginRight:100, justifyContent: 'center'}}>
       <Button

        onPress={this.submit.bind(this)}
        title="Đăng kí"
        color="#841584"
        accessibilityLabel="Learn more about purple">

      </Button>

      </View>




    </View>

<View style={styles.tieude}>
<View>
<Text style={{fontSize:20,textAlign:'center',color:'green'}}> DANH SÁCH KHÁCH HÀNG </Text>
<Text></Text>
<Text></Text>
</View>
   <ListView
   dataSource={this.state.dataSource}
   renderRow={this.renderRow.bind(this)}


   />

</View>

    </View>

  );
}
}
