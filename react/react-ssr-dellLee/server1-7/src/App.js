
import React from 'react'
import Header from './components/Header/index'
import { renderRoutes } from 'react-router-config'
import { actions } from './components/Header/store/'
// import routes from './routes'
// renderRoutes 这个方法实际上即使我们在渲染一级路由的时候他会把耳机路由的信息给我们带到组件中区
const App = (props)=>{
  return (
    <div>
      <Header />
      <div>App</div>
      {/* 渲染多级路由 */}
      {/* {renderRoutes(routes[0].routes)} */}
      {
        renderRoutes(props.route.routes)
      }
    </div>
  )
}
App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo())
}
export default App