import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,ViewPropTypes,TouchableOpacity } from 'react-native';
type props = {
   onPress: Function,
   disabled: boolean,
   style: ViewPropTypes.style,
   title: String,
   titleStyls: ViewPropTypes.style,
   activeOpacity: number
}
class Button extends PureComponent<props> {
  static defaultProps = {
    disabled: false,
    activeOpacity: 0.8
  }
  render() {
    let {onPress,disabled,style,title,titleStyls,activeOpacity} = this.props;
    return (
      <TouchableOpacity
        style={[styles.container,style]}
        onPress={()=>{
          onPress();
        }}
        disabled={disabled}
        activeOpacity={activeOpacity}>
        <Text style={titleStyls}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
export default Button;
