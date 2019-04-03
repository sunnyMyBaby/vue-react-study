
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import NavigationItem from '../../widget/NavigationItem';
import {Heading1,Heading2,Paragraph} from '../../widget/Text';
import Screen from '../../common/screen';
import Color from '../../widget/color'
import Button from '../../widget/Button';
import SpaceNator from '../../widget/SpaceNator'
type props = {

}
type state = {
  info: Object,
}
class GroupPurchaseScene extends PureComponent<props,state> {
  static navigationOptions = ({navigation})=>({
    headerTitle:'团购详情',
    headerRight:(
      <NavigationItem 
       icon={require('../../img/public/icon_navigationItem_share.png')}
       onPress={()=>{
         alert('aaa');
       }}/>
    )
  })
  constructor(props: Object){
    super(props);
    this.state = {
      info: {}
    }
  }
  render() {
    let {info} = this.props.navigation.state.params;
    let imageUrl = info.item.imgurl;
    let price  = info.item.price;
    let value  = info.item.value
    // let 
    console.log(info);
    return (
      <View style={{backgroundColor: '#fff',flex:1}}>
         <View style={{paddingBottom:10}}>
           <Image style={styles.banner} source={{uri: imageUrl}}/>
           <View style={styles.topContainer}>
             <Heading2 style={{color:Color.primary}}>¥</Heading2>
             <Heading1 style={{marginBottom: -8,}}>{price}</Heading1>
             <Paragraph style={{marginLeft: 10,}}>门市价: ¥{value}</Paragraph>
             <View style={{flex:1}}></View>
             <Button
               title='立即抢购' 
               titleStyls={{color:'#fff',fontSize: 18,}}
               style={styles.buyButton}
               onPress={()=>{
                 console.log('aaaa');
               }}/>
           </View>
         </View>
         <SpaceNator/>
         <View style={styles.tagContainer}>
           <Image
             style={{width:20,height:20}}
             source={require('../../img/home/icon_deal_anytime_refund.png')}/>
           <Paragraph style={{color:'#89B24F'}}>随时退</Paragraph>
           <View style={{flex:1}}></View>
           <Paragraph>已售123</Paragraph>
         </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  banner:{
    width: Screen.width,
    height: Screen.width / 2,
    backgroundColor: 'red',
  },
  topContainer: {
   flexDirection:'row',
   alignItems: 'flex-end',
  },
  container: {
    padding:10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  tagContainer:{
    flexDirection:'row',
    padding:10,
    alignItems:'center'
  },
  buyButton:{
    backgroundColor:'#fc9e28',
    width:94,
    height:36,
    borderRadius: 7,
  }
});

export default GroupPurchaseScene;
