
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet ,Dimensions,ScrollView} from 'react-native';
import HomeMenuItem from './HomeMenuItem';
import Screen from '../../common/screen';
import PageControl from 'react-native-page-control';
import Color from '../../widget/color'
type Props = {
  menuInfos: Array<Objeck>,
  onMenuSelected: Function,
}
type State = {
  currentPage: number
}
class HomeMenuView extends PureComponent<Props,State> {
  constructor(props:Object){
    super(props);
    this.state = {
      currentPage: 0
    }
  }
  onScroll = (e)=>{
    let x = e.nativeEvent.contentOffset.x;
    let currentPage = Math.round(x / Screen.width);

    if(this.state.currentPage !== currentPage){
      this.setState({
        currentPage: currentPage
      })
    }
  }
  render() {
    let {menuInfos,onMenuSelected} =  this.props;
    let pageCount = Math.ceil(menuInfos.length / 10);
    let menuElements = menuInfos.map((info,index)=>{
     return <HomeMenuItem 
        key={index}
        title={info.title}
        icon={info.icon}
        onPress={()=>{
          onMenuSelected(index)
        }}
      />
    })
    let menuViews = [];
    // 分页
    for (let i=0;i<pageCount;i++){
      let elementsPerpage = menuElements.slice(i*10,i*10+10);// 数组切割方法，从0开始取到第十个之前
      let menuView = (
         <View style={styles.itemsView} key={i}>
          {elementsPerpage}
        </View>
      );
      menuViews.push(menuView);
    }
    // 再这里我们把分页下面的横线去掉了，这时候用户可能就不会知道这个地方是可以分页的，我们就需要引入react-native-page-contro
    return (
      <View style={styles.container}>
        <ScrollView
         horizontal
         pagingEnabled
         showsHorizontalScrollIndicator={false}
         onScroll={this.onScroll}
        >
          {menuViews}
        </ScrollView>
        <PageControl
         style={styles.pageContror}
         numberOfPages={pageCount}
         currentPage={this.state.currentPage}

         pageIndicatorTintColor='gray'
         currentPageIndicatorTintColor={Color.primary}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContror:{
    margin:10,
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemsView:{
    flexWrap:'wrap',
    flexDirection:'row',
    width: Screen.width
  }
});

export default HomeMenuView;
