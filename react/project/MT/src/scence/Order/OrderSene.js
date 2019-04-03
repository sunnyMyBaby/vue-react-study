import React, { PureComponent } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DetailCell from '../../widget/DetailCell';
import OrderMenuItem from './OrderMenuItem';
import SpaceHeightView from '../../widget/SpaceHeightView';
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view';
import GroupPurhaseCell from '../../GroupPurchase/GroupPurchaseCell';
import * as api from '../../api';

type Props = {
  types: Array<Object>,
  data: Array<Object>,
}
type State = {
  typeIndex:number,
  refreshState: refreshState
}
class OrderSene extends PureComponent<Props, State> {
  static that = this;
  static navigationOptions = (navagation) => ({
    title: '订单'
  })
  constructor(props:Object){
    super(props)
    this.state = {
      typeIndex:0,
      data:[],
      refreshState: RefreshState.Idle
    }
  }
  componentDidMount(){
    this.requestRecommend();
  }

  renderHeader = () => {
    return (
      <View style={styles.container}>
        <DetailCell
          title='我的订单'
          subtitle='全部订单' />
        <SpaceHeightView />
        <View style={styles.itemContainer}>
          <OrderMenuItem
            title='代付款'
            icon={require('../../img/order/order_tab_need_pay.png')}
          />
          <OrderMenuItem
            title='代使用'
            icon={require('../../img/order/order_tab_need_use.png')}
          />
          <OrderMenuItem
            title='待评价'
            icon={require('../../img/order/order_tab_need_review.png')}
          />
          <OrderMenuItem
            title='退款/售后'
            icon={require('../../img/order/order_tab_needoffer_aftersale.png')}
          />
        </View>
        <SpaceHeightView />
        <DetailCell
          title='我的收藏'
          subtitle='查看全部' />
      </View>
    )
  }

  onSelected = (index)=>{
    if(this.state.typeIndex !== index){
       this.setState({
        typeIndex:index
       });
       this.setState({
         data:[]
       })
       // 点击附近分类的时候加载。这是不是真实数据，实际上刷新了的
       this.onFooterRefresh();
    }
  }
  requestRecommend(){
    this.setState({
      refreshState: RefreshState.HeaderRefreshing
    })
    setTimeout(()=>{
      let json = api.recommend.data;
      console.log(json);
      json.sort(()=>(0.5-Math.random()))
      console.log(json);
      this.setState({data: json,refreshState: RefreshState.Idle},()=>{
      });
    },1000)
  }
  renderItem = (rowData,index)=>{
    return (
      <GroupPurhaseCell 
       info={rowData}
       onPress={this.onCellSelected}/>
    )
  }

  onFooterRefresh(){
    this.setState({
      refreshState: RefreshState.FooterRefreshing
    })
    setTimeout(()=>{
      let json = api.recommend.data;
      json.sort(()=>(0.5-Math.random()))
      this.setState({
        // ...this.state.dat把当前的数据先添加进来，然后再把后端返回的数据添加到末尾
        data:[...this.state.data,...json],
        refreshState:this.state.data.length>30? RefreshState.NoMoreData:RefreshState.Idle
      },()=>{
        console.log(this.state.data);
      })
    },500)
  }
  render() {
    return (
      // 因为RefreshListView，是给予FlastList组件的所以可以直接用FlastList的属性
      <RefreshListView
       style={styles.container}
       ListHeaderComponent={this.renderHeader}
       data={this.state.data}
       renderItem={this.renderItem}
       keyExtractor={(item,index)=>index+''}
       refreshState={this.state.refreshState}
       onHeaderRefresh={()=>{
         this.requestRecommend();
       }}
       onFooterRefresh={()=>{
         this.onFooterRefresh()
       }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default OrderSene;
