import React, { PureComponent } from 'react';
import { View,StyleSheet,ScrollView,Image,RefreshControl} from 'react-native';
import NavigationItem from '../../widget/NavigationItem';
import Color from '../../widget/color';
import {Heading2,Paragraph} from '../../widget/Text';
import SpaceHeightView from '../../widget/SpaceHeightView';
import DetailCell from '../../widget/DetailCell';
import screen from '../../common/screen';
type Props = {

}
type State = {
  isrefresing: boolean
}
class MySene extends PureComponent<Props, State> {
  constructor(Props:Object){
    super(Props);
    this.state = {
      isrefresing:false
    }
  }
  static navigationOptions = () => ({
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <NavigationItem icon={require('../../img/mine/icon_navigationItem_set_white.png')}
          onPress={() => {
            alert('test')
          }} />
        <NavigationItem icon={require('../../img/mine/icon_navigationItem_message_white.png')}
          onPress={() => {
            alert('test')
          }} />
      </View>
    ),
    headerStyle:{
      backgroundColor: Color.primary,
      elevation:0,
      borderBottomWidth:0,
    }
  })
  renderHeader = ()=>{
    return (
      <View style={styles.header}>
        <Image source={require('../../img/mine/avatar.png')}
         style={styles.avatar}/>
        <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Heading2 style={{color:'#fff'}}>数组</Heading2>
              <Image source={require('../../img/mine/beauty_technician_v15.png')}/>
            </View>
            <Paragraph style={{color:'#fff',marginTop: 10,}}>个人信息</Paragraph>
        </View>
      </View>
    )
  }
  getDtaList(){
     const data = [
        [
          {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
          {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        ],
        [
          {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        ],
        [
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        ]
    ];

    return data;
  }
  renderCells = ()=>{
    let cells = [];
    let dataList =  [
      [
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
      ],
      [
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
        {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
      ],
      [
      {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
      {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
      {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
      {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
      {title:'我的钱包',subtitle:'办信用卡','img':'../../img/mine/icon_mine_wallet.png'},
      ]
  ];;
    console.log(dataList);
    dataList.forEach((item,index) => {
      let sublist = dataList[index];
      sublist.forEach((it,i)=>{
        let data = sublist[i];
        let cell = (
         <DetailCell
         key={i}
         title={data.title}
         subtitle={data.subtitle}
         image={data.img}/>
        )
        cells.push(cell)
      })
      cells.push(
        <SpaceHeightView key={index}/>
      )
    });
    return (
      <View>
        {cells}
      </View>
    )
  }
  onHeaderRefres = ()=>{
    this.setState({
      isrefresing:true
    })
    setTimeout(()=>{
      this.setState({
        isrefresing:false
      })
    },2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{position: 'absolute',width:screen.width,height:screen.height/2,
      backgroundColor: Color.primary,}}></View>
        <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isrefresing}
            onRefresh={this.onHeaderRefres}
            tintColor="gray"
          />
        }>
         {this.renderHeader()}
         <SpaceHeightView></SpaceHeightView>
         {this.renderCells()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.paper,
  },
  header:{
    backgroundColor: Color.primary,
    paddingBottom: 20,
    flexDirection:'row',
    alignItems:'center',
    padding: 10,
  },
  avatar:{
    width:50,
    height:50,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#f1d3c6',
  }
});

export default MySene;
