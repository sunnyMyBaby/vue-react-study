import React, { PureComponent } from 'react';
import { ViewPropTypes,Image,View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import SpaceNator from './SpaceNator';
import {Heading3,Paragraph} from './Text'
type props = {
  image?: any,
  subtitle: string,
  title: string,
  style: ViewPropTypes.style
}
class MyClass extends PureComponent<props> {
  render() {
    let {title,subtitle,style} = this.props;
    let iconElement = this.props.image && (
      <Image source={this.props.image} style={styles.icon}/>
    )
    return (
      <TouchableOpacity>
        <View style={[styles.container,style]}>
          {iconElement}
          <Heading3>{title}</Heading3>
          <View style={{flex:1}}/>
          <Paragraph style={{color:'#999'}}>{subtitle}</Paragraph>
          <Image style={styles.arrow} source={require('../img/public/cell_arrow.png')}/>
        </View>
        <SpaceNator/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10,
  },
  icon:{
    width:25,
    height:25,
    marginRight: 10,
  },
  arrow:{
    width:14,
    height:14,
    marginLeft: 5,
  }
});

export default MyClass;
