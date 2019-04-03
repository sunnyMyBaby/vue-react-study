
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import Screen from '../../common/screen';
import Color from '../../widget/color';
import {Heading2,Heading3} from '../../widget/Text'
this.props = {
  info: Object,
  onPress:Function
}
this.state = {

}
class HomeGridItem extends PureComponent<props, state> {
  render() {
    let {info,onPress} = this.props;
    let title = info.maintitle;
    let color = info.typeface_color;
    let deputytitle = info.deputytitle;
    let img = info.imageurl;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <Heading2 style={{color:color,marginBottom:10}}>{title}</Heading2>
          <Heading3>{deputytitle}</Heading3>
        </View>
        <Image style={styles.icon} source={{uri:img}}/>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:  'center',
    width: Screen.width / 2 - StyleSheet.hairlineWidth,
    height: StyleSheet.width / 4,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: Color.border,
    padding: 10
  },
  icon: {
    width: Screen.width / 5,
    height: Screen.width / 5,
    backgroundColor: 'blue',
    marginLeft: 10,
    borderRadius: Screen.width / 5 / 2,
  },
});

export default HomeGridItem;
