
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import NearHeaderView from './NearByHearderView';
// 下啦刷新
import RefreshListView,{RefreshState} from 'react-native-refresh-list-view';
import GroupPurhaseCell from '../../GroupPurchase/GroupPurchaseCell';
import * as api from '../../api';


type props = {
  types: Array<Object>,
  data: Array<Object>,
}
type state = {
  typeIndex:number,
  refreshState: refreshState
}
class NearByListSence extends PureComponent<props,state> {
  constructor(props:Object){
    super(props)
    this.state = {
      typeIndex:0,
      data:[],
      refreshState: RefreshState.Idle
    }
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
  renderHeader = ()=>{
    return (
      <View>
        <NearHeaderView 
          titles={this.props.types} 
          selectedIndex={this.state.typeIndex}
          onSelected={this.onSelected}/>
      </View>
    )
  }
  renderItem = (rowData,index)=>{
    return (
      <GroupPurhaseCell 
       info={rowData}
       onPress={this.onCellSelected}/>
    )
  }
  componentDidMount(){
    this.requestRecommend();
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

  },
});

export default NearByListSence;
