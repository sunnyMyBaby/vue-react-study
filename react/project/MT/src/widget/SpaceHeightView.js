import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import Color from './color';

class SpaceHeightView extends PureComponent {
  render() {
    return (
      <View style={{height:14,backgroundColor:Color.paper}} >
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default SpaceHeightView;
