import React from 'react'
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';
//  异步加载组件
const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading(){
    return <div>正在加载</div>
  },
});
 
// 应该使用无状态组价
export default ()=><LoadableComponent />
// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }