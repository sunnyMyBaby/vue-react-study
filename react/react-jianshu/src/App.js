import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import { GlobalStyle } from './style'
import { IconfontGlobalStyle } from './static/iconfont/iconfont.js';
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <GlobalStyle />
            <IconfontGlobalStyle />
            <Header/>
            <header className="App-header">
             App
            </header>
          </div>
          {/* exact 是严格匹配 */}
          <Route path="/login" exact component={Login}></Route>
          <Route path="/Write" exact component={Write}></Route>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          {/* 
              这两种搭配方式 在match里边去id
              <Link  key={item.get('id')} to={'/detail/' + item.get('id')}>
              <Route path='/detail/:id' exact component={Detail}></Route>
               另外一种搭配方式 在location里边去id
              <Link  key={item.get('id')} to={'/detail?id=' + item.get('id')}> 
                        <Route path='/detail' exact component={Detail}></Route>*/}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
