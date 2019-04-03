import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
type Props = {
   nomalImage: any,// react提供的-接收数据的类型为任意类型
   selectedImage: any,// 选中
   focused: boolean,
   tintColor: any,// 图片颜色
};
type State = {

};
class TabBarItem extends PureComponent<Props,State> {
  render() {
    let {nomalImage,selectedImage,focused,tintColor} = this.props;
    return (
      <Image
        source={focused?selectedImage:nomalImage}
        style={{width:25,height:25,tintColor:tintColor}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default TabBarItem;
