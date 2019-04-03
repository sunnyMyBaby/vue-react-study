import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from '../common/screen';
import Color from '../widget/color'
class SpaceNator extends PureComponent {
  render() {
    return (
      <View style={styles.spaceNator}></View>
    );
  }
}

const styles = StyleSheet.create({
  spaceNator: {
    width:Screen.width,
    height:StyleSheet.hairlineWidth,
    backgroundColor:Color.border
  },
});

export default SpaceNator;
