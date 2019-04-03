/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform,StyleSheet,Text,View,Image} from 'react-native';
import {TabNavigator, createTabNavigator,createMaterialBottomTabNavigator,createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import HomSene from './scence/Hmoe/HomeSene';
import NearBy from './scence/NearBy/NearBy';
import MySene from './scence/My/MySene';
import OrderSene from './scence/Order/OrderSene';
import TabBarItem from './widget/TabBarItem';
import WebScene from './scence/Web/WebScene';
import GroupPurchaseScene from './scence/Web/GroupPurchaseScene';

GroupPurchaseScene
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TabNav/>
    );
  }
}
// Home
const homeSene = createStackNavigator({
  Home: {
    screen: HomSene,
  },
  WebScene:{screen:WebScene},
  GroupPurchaseScene:{screen:GroupPurchaseScene}
},{
  // 顶部样式这里设置也可以一般都会在页面里边单独设置
  // navigationOptions:{
  //   headerTintColor: 'red',
  // }
});
// 附近
const narByScene = createStackNavigator({
  Settings: {
    screen: NearBy,
    navigationOptions: () => ({
      // title: '附近',
    }),
  },
});
// 订单
const orderScene = createStackNavigator({
  Settings: {
    screen: OrderSene,
    navigationOptions: () => ({
      title: '订单',
    }),
  },
});
// 我的
const mineScene = createStackNavigator({
  Settings: {
    screen: MySene,
    navigationOptions: () => ({
      // title: '我的',
    }),
  },
});
const TabNav = createBottomTabNavigator({
  Home:{
    screen: homeSene,
    path: '/',
    navigationOptions: {
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <TabBarItem
            tintColor={tintColor}
            focused={focused}
            nomalImage={require('./img/group-buy.png')}
            selectedImage={require('./img/group-buy-selected.png')}
          />
      ),
      headerTintColor:'green'
    },
  },
  Nearby:{
    screen: narByScene,
    path: '/narByScene',
    navigationOptions:()=>({
      title: '附近',
      tabBarLabel:'附近',
      tabBarIcon: ({focused,tintColor})=>{
        return <TabBarItem
          tintColor={tintColor}
          focused={focused}
          nomalImage={require('./img/near.png')}
          selectedImage={require('./img/near-selected.png')}
        />
      }
    })
  },
  orderScene:{
    screen: orderScene,
    path: '/OrderSene',
    navigationOptions:()=>({
      title: '订单',
      tabBarLabel:'订单',
      tabBarIcon: ({focused,tintColor})=>{
        return <TabBarItem
          tintColor={tintColor}
          focused={focused}
          nomalImage={require('./img/order.png')}
          selectedImage={require('./img/order-selected.png')}
        />
      }
    })
  },
  mineScene:{
    screen: mineScene,
    path: '/OrderSene',
    navigationOptions:()=>({
      title: '我的',
      tabBarLabel:'我的',
      tabBarIcon: ({focused,tintColor})=>{
        return <TabBarItem
          tintColor={tintColor}
          focused={focused}
          nomalImage={require('./img/my.png')}
          selectedImage={require('./img/my-selected.png')}
        />
      }
    })
  },
},{
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
})

const styles = StyleSheet.create({

});
