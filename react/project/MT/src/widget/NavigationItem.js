//import liraries
import React, {PureComponent} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ViewPropTypes,Image} from 'react-native';

type props = {
  title: any,
  titleStyle?: ViewPropTypes.style,
  onPress?: Function, // 点击后的回调-有问号的可传可不传
  icon?: any,
  iconStyle?: ViewPropTypes.style,
}
class NavigationItem extends PureComponent<Props, State> {
  render() {
    const { title,titleStyle,onPress,icon,iconStyle} = this.props;
    let titleElement = title && (
      <Text style={[styles.title,titleStyle]}>{title}</Text>
    );
    let iconElement = icon && (
      <Image source={icon} style={[styles.icon,iconStyle]} />
    )
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        {/* titleStyle 如果有会覆盖title，没有传就使用title */}
        {titleElement}
        {iconElement}
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
   container:{
     flex:1,
     justifyContent: 'center',
     alignItems:'center',
   },
   title:{
     fontSize: 15,
     color: '#333',
     margin: 8,
     color: 'green'
   },
   icon:{
     width:27,
     height:27,
     margin:0
   }
});

//make this component available to the app
export default NavigationItem;
