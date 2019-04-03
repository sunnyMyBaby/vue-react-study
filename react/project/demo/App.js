/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import codePush from 'react-native-code-push';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>更新日志2342342344</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// 配置
const codePushOptions ={
  // 跟新检测频率-默认情况下每次启动app的时候去检测一次，
  // ON_APP_START app启动，ON_APP_RESUME app唤醒的时候  MANUAL完全手动的更新app派和（codePush.sync())方法使用
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  // 安装模式,默认app下一次启动时,IMMEDIATE(立即)，ON_NEXT_RESUME（唤醒） ON_NEXT_SUSPEND（app进入到后台的时候）
  installMode: codePush.InstallMode.IMMEDIATE,// 可选更新
  mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,// 强制更新
  minimumBackgroundDuration:1,// 如何判断我已经进入到后台了，到后台1秒在进入就唤醒
  updateDialog:{
    // 自定义弹窗样式
    title:'检测到新版本',
    optionalInstallButtonLabel:'更新',//安装按钮
    optionalIgnoreButtonLabel:'忽略',// 可忽略按钮
    optionalUpdateMessage:'有新版本，是否需要更新?',
    mandatoryContinueButtonLabel:'立即更新',// 强制更行
    mandatoryUpdateMessage:'有新版本，必须更新',
    appendReleaseDescription:true,// 跟新的内容提示给用户
    descriptionPrefix:'更新日志：1，1，1'
  },// 使用更新的弹窗

}
export default codePush(codePushOptions)(App);