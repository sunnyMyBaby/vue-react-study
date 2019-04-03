import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import {Heading3,Paragraph} from '../../widget/Text';
import Screen from '../../common/screen';
import Color from '../../widget/color'
// 横向滚动第三方插件
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import NearByListSence from './NearByListSence';
// 一个基于FlatList的列表下拉、上拉刷新控件

type Props = {

}
type State = {

}
class NearBY extends PureComponent<Props, State> {
  static navigationOptions = ()=>({
    headerLeft:(
      <TouchableOpacity style={{flexDirection: 'row',alignItems:'center',padding:10}}>
        <Image 
          style={{width:13,height:16,marginRight:5}}
          source={require('../../img/public/icon_food_merchant_address.png')}
        />
        <Heading3 style={{fontSize:15,color:'#333'}}>福州 鼓楼</Heading3>
      </TouchableOpacity>
    ),
    headerRight:(
      <TouchableOpacity style={styles.searchBar}>
        <Image 
          source={require('../../img/home/search_icon.png')}
          style={styles.searchIcon}/>
        <Paragraph>找附近的吃喝玩儿乐</Paragraph>
      </TouchableOpacity>
    )
  })
  render() {
    let titles = ['美食','住酒店','爱玩乐','全部'];
    let types = [
      ['热门','面包甜点','小吃','川菜','日本料理','韩国料理','台湾菜','东北菜'],
      ['热门','商务出行','公民民宿','情侣专项','高星特惠'],
      ['热门','KTV','足疗按摩','洗浴汗蒸','电影院','美发','美甲'],
      []
    ]
    return (
      <ScrollableTabView
       style={styles.container}
       tabBarActiveTextColor="#FE566D"
       tabBarInactiveTextColor="#555"
       tabBarTextStyle={styles.tabBarTextStyle}
       tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
        {titles.map((title,index)=>{
          // tabLabel 切换时的标签title
          // 一定要传入导航控制器，不然页面里边无法跳转
          return <NearByListSence 
            tabLabel={title} 
            key={index} 
            types={types[index]}
            navigation={this.props.navigation}/>
        })}
        
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon:{
    width:20,
    height:20,
    margin: 5,
  },
  searchBar: {
    width: Screen.width * 0.65,
    height:30,
    borderRadius: 19,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#eee',
    alignSelf: 'flex-end',
    justifyContent:'center',
    marginRight:10,
    marginBottom: 10,
  },
  tabBarTextStyle:{
   fontSize:14,
   marginTop:13,
  },
  tabBarUnderlineStyle:{
   backgroundColor:'#fe566d',

  }
});

export default NearBY;
