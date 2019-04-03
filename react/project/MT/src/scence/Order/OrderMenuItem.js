import React, { PureComponent } from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import { Heading3} from '../../widget/Text';
import Screen from '../../common/screen';
type props = {
  onPress:Function,
  icon: any,
  title: string
}
class MyClass extends PureComponent<props> {
  render() {
    let {onPress,icon,title} = this.props;
    console.log(icon);
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
         <Image source={icon} resizeMode='contain' style={styles.icon}/>
         <Heading3>{title}</Heading3>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Screen.width / 4,
    height: Screen.width / 5,
    backgroundColor: '#fff',
  },
  icon:{
    width:30,
    height:30,
    margin: 5,
  }
});

export default MyClass;
