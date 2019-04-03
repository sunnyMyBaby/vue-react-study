
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MyClass</Text>
      </View>
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

export default MyClass;
