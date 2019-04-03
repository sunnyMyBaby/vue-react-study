import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,Dimensions,FlatList} from 'react-native';
import Color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import * as api from '../../api';
import HomeMenuView from './HomeMenuView';
import HomeGridView from './HomeGridView';
import SpaceHeightView from '../../widget/SpaceHeightView';
import {Heading3} from '../../widget/Text';
import GroupPurhaseCell from '../../GroupPurchase/GroupPurchaseCell';
type Props = {

}
type State = {
  discounts: Array<Object>,
  recommendList: Array<Object>,
  refreshing: Boolean,
}
class HomeSene extends PureComponent<Props,State> {
  constructor(props: Object) {
    super(props);
    this.state = {
      discounts: [],
      recommendList: [],
      refreshing:false,
    }
 }
  static navigationOptions = ()=>({
    // title:'Home',
    headerStyle:{
      backgroundColor: Color.primary
    },
    headerTitle:(
      <TouchableOpacity style={styles.searchBar}>
        <Image style={styles.searIcon} source={require('../../img/search.png')}/>
        <Text>搜索</Text>
      </TouchableOpacity>
    ),
    headerLeft:(
      <NavigationItem
       titleStyle={{color:'#fff'}} 
       title='定位' 
       onPress={()=>{
        alert('aaa');
      }}/>
    ),
    headerRight:(
      <NavigationItem
       titleStyle={{color:'#fff'}} 
       icon={require(('../../img/ling.png'))} 
       onPress={()=>{
        alert('aaa');
      }}/>
    ),
  })
  // 异步请求
  // requestData = async()=>{
  //  try{
  //    let response = await fetch(api.discount);// 远会返回promise的一个对象，现在就会直接返回结果,ios只能请求https的
  //    let json = await response.json;
  //    this.state.discounts ={
  //     discounts: json.data
  //    };
  //    
  //  }catch(erro){
  //    console.log(erro)
  //  }
  // console.log(api.discount);
  // }

  requestData(){
    let  json = api.discount.data;
    this.setState({discounts: json},()=>{
      // console.log(this.state.discounts);
    });
  }
  requestRecommend(){
    this.setState({refreshing: true},()=>{
      console.log(this.state.refreshing);
    });
    // 模拟下拉刷新
    setTimeout(()=>{
      let json = api.recommend.data;
      this.setState({recommendList: json,refreshing:false},()=>{
        console.log(this.state.refreshing);
      })
    },2000)

  }
  // 挂载完成
  componentDidMount(){
    this.requestRecommend();
    this.requestData();
  }
  onGridSelected = (index)=>{
    let discount = this.state.discounts[index];
    if(discount.type === 1){
      let location = discount.tplurl.indexOf('http');
      let url = discount.tplurl.slice(location);
      this.props.navigation.navigate('WebScene',{url:url});
    }
  }
  renderHeader = ()=>{
    return (
      <View>
        <HomeMenuView 
          menuInfos={api.menuInfos}
          onMenuSelected={()=>{

          }}/>
        <SpaceHeightView/>
        <HomeGridView 
          infos={this.state.discounts}
          onGridSelected={this.onGridSelected}/>
        <SpaceHeightView/>
        <View style={styles.recommendHeader}>
          <Heading3>猜你喜欢</Heading3>
        </View>
      </View>
    )
  }
  onCellSelected = (info)=>{
    // console.log(info);
    this.props.navigation.navigate('GroupPurchaseScene',{info:info})
  }
  renderItem = (rowData,index)=>{
    return (
      <GroupPurhaseCell 
       info={rowData}
       onPress={this.onCellSelected}/>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity
        onPress={()=>{
          // createStackNavigator 被创建的时候会把导航控制器的实例传到对应的场景中
          // 导航控制器的实例this.props.navigation当行控制器的实例，navigate跳转导航的方法
          this.props.navigation.navigate('WebScene',{url:'aaa'})
        }}> */} 
        {/* </TouchableOpacity> */}
          <FlatList 
            ListHeaderComponent={()=> {
              // ListHeaderComponent 只能接受一个组件
              return this.renderHeader();
            }}
            data={this.state.recommendList}
            renderItem={this.renderItem}
            // keyExtractor是动态生成key的，如for循环生成组件必须家一个key一样加以区分
            keyExtractor={(item,index)=>index+''}
            onRefresh = {()=>{
              this.requestRecommend()
              // this.setState({
              //   refreshing:false
              // })
            }}
            refreshing = {this.state.refreshing}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.paper,
  },
  searchBar:{
    flexDirection: 'row',
    // Dimensions 获取屏幕的宽度
    width:Dimensions.get('window').width * 0.7,
    height:30,
    borderRadius:19,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  searchIcon:{
    width: 20,
    height: 20,
    margin: 5,
  },
  recommendHeader:{
    height:35,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor:Color.border,
    paddingVertical: 8,// 上下
    paddingLeft: 20,
    backgroundColor:'#fff'
  }
});

export default HomeSene;
