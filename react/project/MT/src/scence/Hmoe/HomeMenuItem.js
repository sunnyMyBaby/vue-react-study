
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet ,Image,TouchableOpacity,Dimensions} from 'react-native';
import screen from '../../common/screen'
type Props = {
  title: string,
  icon: any,
  onPress: Function
}
type State = {

}
class HomeMenuItem extends PureComponent<Props,State> {
  render() {
    let {title,icon,onPress} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image 
        source={icon}
        style={styles.icon}
        >
      </Image>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width:screen.width /5,
    height:screen.width/5
  },
  icon:{
    width:screen.width /9,
    height:screen.width/9
  }
});

export default HomeMenuItem;
