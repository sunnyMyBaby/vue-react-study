
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {Paragraph} from '../../widget/Text';
import Screen from '../../common/screen';
import Color from '../../widget/color'
type props = {
  titles: Array<string>,
  selectedIndex: number,
  onSelected:Function
}

class NearByListSence extends PureComponent<props> {
  render() {
    return (
      <View style={styles.container}> 
          {this.props.titles.map((title,i)=>(
            <TouchableOpacity 
            key={i}
            onPress={()=>{
              this.props.onSelected(i)
            }}
            style={[styles.item,{backgroundColor:this.props.selectedIndex == i? '#fe556d':'#fff'}]}
            >
            <Paragraph>{title}</Paragraph>
            </TouchableOpacity>
          ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item:{
    width:Screen.width/4 -10,
    marginLeft: 8,
    marginTop: 5,
    marginBottom: 5,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.border,
  }
});

export default NearByListSence;
