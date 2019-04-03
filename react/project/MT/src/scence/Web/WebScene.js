import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,WebView,InteractionManager} from 'react-native';
type Props = {

}
type State = {

}
class WebScene extends PureComponent<Props, State> {
  // 导航会传进来导航条的实例,注意navigationOptions写法是不能变的
  static navigationOptions = ({navigation})=> ({
    title: navigation.state.params.title
  })
  constructor(props){
   super(props);
   // 取出外面传进来的的url
  }
  componentDidMount(){
    // 这时候配置完成之后title是会一直存在的
    // Interactionmanager可以将一些耗时较长的工作安排到所有互动或动画完成之后再进行。这样可以保证JavaScript动画的流畅运行。
    InteractionManager.runAfterInteractions(()=>{
      this.props.navigation.setParams({title:'加载中'});
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <WebView
         style={styles.WebView}
         source={{uri:this.props.navigation.state.params.url}}
         onLoadEnd={(e)=>{
          console.log(e.nativeEvent);
          // 加载完成之后加载中就不需要了
          // nativeEvent 得到的实际上是WebView请求地址的一些信息比如url，title等
          this.props.navigation.setParams({title:e.nativeEvent.title});
         }}>
        </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  WebView:{
    flex:1,
  }
});

export default WebScene;
