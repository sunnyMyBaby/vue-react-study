import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
import {Heading2,Paragraph} from '../widget/Text';
import Color from '../widget/color'
type props = {
  info: Object,
  onPress: Function,
}
class GroupPurhaseCell extends PureComponent<props> {
  render() {
    let {info,onPress} = this.props;
    let imgurl = info.item.imgurl;
    let mname = info.item.mname;
    let mtitle = info.item.mtitle;
    let price = info.item.price;
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={()=>{onPress(info)}}>
        <Image style={styles.icon} source={{uri:imgurl}}/>
        <View style={styles.rightContainer}>
          <Heading2>{mname}</Heading2>
          <Paragraph numberOfLines={0} style={{marginTop: 8,}}>{mtitle}</Paragraph>
          <View style={{flex:1,justifyContent:'flex-end'}}>
            <Heading2 style={styles.price}>{price}元</Heading2>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Color.border,
  },
  icon:{
    width:80,
    height:80,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  rightContainer:{
    flex:1,
    paddingLeft: 20,
    paddingRight: 10,
  },
  price:{
    color: Color.primary
  }
});

export default GroupPurhaseCell;
