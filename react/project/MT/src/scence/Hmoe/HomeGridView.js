import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeGridItem from './HomeGridItem';
import Color from '../../widget/color';
type props = {
  infos: Array<Object>,
  onGridSelected:Function
}
class HomeGridView extends PureComponent<props> {
  render() {
    let {infos,onGridSelected} = this.props;
    return (
      <View style={styles.gridContainer}>
        {infos.map((info,index)=>{
          return <HomeGridItem info={info} key={index}  onPress={()=>{
            onGridSelected(index);
          }}/>
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridContainer:{
    flexDirection:'row',
    flexWrap: 'wrap',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: Color.border,
  },
});

export default HomeGridView;
