
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from './color'
export function Heading1({style,...props}){
  return <Text style={[styles.h1,style]} {...props}/>
}
export function Heading2({style,...props}){
  // console.log(props);// 这里props接收的是title,deputytitle
  return <Text style={[styles.h2,style]} {...props}/>
}
export function Heading3({style,...props}){
  return <Text style={[styles.h3,style]} {...props}/>
}
export function Paragraph({style,...props}){
  return <Text style={[styles.p,style]} {...props}/>
}

const styles = StyleSheet.create({
  h1:{
    fontSize: 40,
    color: Color.primary
  },
  h2:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222'
  },
  h3:{
    fontSize: 14,
    color: '#222'
  },
  p:{
    fontSize: 13,
    color: '#777'
  }
})