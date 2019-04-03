// react 提供的flux单向数据流
import {
  observable,
  computed,
  autorun,
  action,
} from 'mobx'

export default class AppState {
  constructor({ count, name } = { count: 0, name: 'yangguang' }) {
    this.name = name
    this.count = count
  }
  
  @observable count

  // 用observable指定count是reactive的值
  @observable name

  // 通过computed返回值
  @computed get msg() {
    return `${this.name} ----- ${this.count}`
  }

  @action add() {
    this.count += 1
  }

  @action changeName(name) {
    this.name = name
  }

  // 这个方法是用在服务端渲染的时候我们将AppState这个实例在服务端渲染完成之后，他得到的数据以json的格式去拿到
  // 然后我们要用到这部分数据去放到客户端代码能够拿到的地方，让他init的时候可以拿到这部分内容
  // 怎么做呢看dev-static里边的方法getStoreState方法
  toJson() {
    return {
      count: this.count,
      name: this.name,
    }
  }
}

autorun(() => {
  // console.log(appState.msg);
});
