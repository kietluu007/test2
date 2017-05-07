import React,{Component} from "react";
import {
  View,Text,StyleSheet,Button,TextInput,Alert,ScrollView,Image,TouchableOpacity,Picker,ListView,Item
} from "react-native";
import styles from "../styles/styles";
import DatePicker from 'react-native-datepicker'
export default class Manhinh2 extends Component
{
  constructor(props) {
    super(props);
  data=[
    {title: "Trịnh Thăng Bình lên sóng",
     image:"http://znews-photo.d.za.zdn.vn/w660/Uploaded/izhqv/2016_12_12/240A4967.jpg",
     content:"Trịnh Thăng Bình đẹp trai",
     },
    {
      title: "IPhone-7 ra mắt",
      image:"https://cdn2.tgdd.vn/Files/2016/09/03/883117/iphone-7-3.jpg",
      content:"Doanh thu từ iphone 7 tăng đáng kể",
    },
    {
      title: "Nhạc Rap",
      image:"http://avatar.nct.nixcdn.com/playlist/2013/12/04/a/c/b/4/1386155700701_500.jpg",
      content:"Raper",
    },
    {
      title: "Giày Nike",
      image:"http://www.runnernorge.com/images/Norge-New-KAISHI-NS-Herre-Sko-09.jpg",
      content:"shoes",
    },
    {
      title: "Xe Moto",
      image:"https://www.carmudi.vn/journal/wp-content/uploads/2015/09/5-Si%C3%AAu-Xe-M%C3%B4-T%C3%B4-%C4%90%C3%A1ng-Mua-Nh%E1%BA%A5t-2015.jpg",
      content:"xe phan khoi lớn",
    },
    {
      title: "HeadPHone",
      image:"http://img.bbystatic.com/BestBuy_US/en_US/images/abn/2015/global/buyingguides/RE_headphones/dj.png",
      content:"Linh kiện",
    },
    {
      title: "Giày Adidas",
      image:"http://vn-live.slatic.net/cms/SEO-Images/Buying-Guide/lazada-do-the-thao-nu-adidas-1.jpg",
      content:"shoes",
    },
    {
      title: "Áo Adidas",
      image:"http://muare1.vcmedia.vn/images/2013/09/29/mr_227308_578a163534a58f9f.jpg",
      content:"Shirt",
    },
    {
      title: "Balo Northface",
      image:"http://kyduyen.vn/wp-content/thuvienanh/balo-tnf-hotshot-000.jpg",
      content:"Bag",
    }



  ];
  ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
  this.state={
    dataSource: ds.cloneWithRows(data),
    date:new Date(),
    isSearch:false,
    selected:'grid'
  };
  iconSearch=require('seminar/components/images/kinhlup.png');
  }

searchGridView(input)
{
  let inputSearch=data.filter((text)=>{
    if (text.title.indexOf(input)>=0)
    {
      return text;
    }
  }
);
  this.setState(
    {
      dataSource:ds.cloneWithRows(inputSearch)
    }
  );
}



  renderToolbar()
  {
    let isSearch=this.state.isSearch;
    if (!isSearch)
    {
    return (
      <View style={styles.toolBar}>
      <Text style={styles.textToolBar}>Search</Text>
      <TouchableOpacity onPress={()=>this.setState({isSearch:true})}>
      <Image style={styles.textToolBar}source={iconSearch}/>
      </TouchableOpacity>
      </View>
    );
  }
  else
  {
    return (
      <View style={styles.toolBar}>
      <Picker style={styles.picker} onValueChange={(value) => this.setState({selected: value})}
          selectedValue={this.state.selected}
          >
          <Picker.Item label="List" value="list" />
          <Picker.Item label="Grid" value="grid" />
      </Picker>
      <TextInput placeholder={'Search.......'} style={styles.formInput}
      onChangeText={this.searchGridView.bind(this)}
      />
      <TouchableOpacity onPress={()=>this.setState({isSearch:true})}>
      <Image style={styles.textToolBar}source={iconSearch}/>
      </TouchableOpacity>
      </View>
    );
  }

  }
renderList(data)
{
  return (
    <View style={styles.containerList}>
     <Image source={{uri:data.image}} style={styles.image} />
     <View style={styles.waperContainer}>
     <Text style={styles.title}>{data.title}</Text>
     <Text style={styles.content}>{data.content}</Text>
     </View>

    </View>

  );
}

renderGrid(data)
{
  return(
    <Image source={{uri:data.image}} style={styles.image}>
      <Text style={styles.title} > {data.title}</Text>
    </Image>
  )

}

renderGridView()
{
  let selected=this.state.selected;
  if (selected=='grid')
  {
    return(
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderGrid.bind(this)}
      pageSize={data.length}
      contentContainerStyle={{flexDirection:'row', flexWrap:'wrap'}}
      />
    );
  }
  else if (selected=='list')
  {
    return(
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderList.bind(this)} />


    );
  }
}
  render(){
    return(

      <View style={styles.color3}>
      <View>
    <Text style={{fontSize:20,textAlign:'center',color:'green'}}>CALENDAR </Text>
      </View>

      <View>
    <Text   onPress={this.props.ontxtPress}> GO TO</Text>

        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2017-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }

          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      {this.renderToolbar()}

      {this.renderGridView()}


      </View>
      </View>

    );
  }
}
