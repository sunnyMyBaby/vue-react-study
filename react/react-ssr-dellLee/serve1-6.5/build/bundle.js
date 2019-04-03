/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import routes from './routes'\n// renderRoutes 这个方法实际上即使我们在渲染一级路由的时候他会把耳机路由的信息给我们带到组件中区\nvar App = function App(props) {\n  console.log(props);\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    _react2.default.createElement(\n      'div',\n      null,\n      'App'\n    ),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL: '/'\n});\n\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      null,\n      'Header'\n    ),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/' },\n      'Home'\n    ),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/login' },\n      'Login'\n    )\n  );\n};\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // nodeJs体系下遵循的是common.js的规范也就是require\n// import 和 export default 语法是esModule的语法\n// import React from 'react'; \n\n// const React = require('react')\n// const Home = ()=>{\n//   return <div>home</div>\n// }\n\n// module.exports = {\n//   default: Home\n// }\n\n// stage-0用了这个规范之后我们就可以在node环境下使用import esModulez这种规范了, 其实编译之后还是require这种语法\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'getList',\n    value: function getList() {\n      var list = this.props.list;\n\n      return list.map(function (item) {\n        return _react2.default.createElement(\n          'div',\n          { key: item.id },\n          item.title\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      console.log(this.props.list);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          'yg react ssr: ',\n          this.props.name\n        ),\n        this.getList(),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              alert('click');\n            } },\n          'click'\n        )\n      );\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // 这个周期函数只会在客户端渲染的时候执行,服务器端不会执行，所以呢一开始获取到的store数据都是空的\n      // 所以接下来我们要解决的是如何让服务器端也能执行从而获取数据，始终服务器端是不会执行componentDidMount的但是可以通过其他方式进行\n      // https://reacttraining.com/react-router/web/guides/server-rendering\n      // 如果首先进入根目录那么我们会通过服务端获取到数据了，这时候我们就不需要再获取一遍\n      // 但是我们又不能去掉，因为如果我们首次进入其他页面再跳转到这个页面那么，我们依然需要借助这里的方法获取数据\n      if (!this.props.list.length) {\n        this.props.getHomeList();\n      }\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nHome.loadData = function (store) {\n  // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前获取加载好\n  // 扩充store里边的数据\n  return store.dispatch((0, _actions.getHomeList)(true));\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    list: state.home.newsList\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch((0, _actions.getHomeList)());\n    }\n  };\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n// 函数式组件，没有任生命周期\n// const Home = (props)=>{\n//   return (\n//     <div>\n//       <Header />\n//       <div>yg react ssr: { props.name }</div>\n//       <button onClick={()=>{alert('click')}}>\n//         click\n//       </button>\n//     </div>\n//   )\n// }\n\n// const mapStateToProps = state => ({\n//   name: state.home.name\n// })\n\n// export default connect(mapStateToProps, null)(Home)\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHomeList = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar _request = __webpack_require__(/*! ../../../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../../../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants.CHANGE_LIST,\n    list: list\n  };\n};\n\nvar getHomeList = exports.getHomeList = function getHomeList() {\n  var server = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n  // 可以返回一个普通的对象，也可以返回一个一个函数来做一些异步的操作，因为我们用了react-thunk（可在action里做异步操作）\n  return function (dispatch, getState, axiosInstance) {\n    // react-thunk我们用它做异步请求的时候，返回的这个函数可以接收到dispatch这个方法，然后呢可以再调用dispatch在派发一个dispatch\n    // 因为这里是异步的，会返回一个promise所以这里我们需要把这个promise返回，方便服务端执行loaData的时候获取数据\n    // 使用httpProxy做代理之后\n    // return axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')\n    // 下面写法太low，所以我们需要用到axios的instance(同意前缀)概念，看requeset.js\n    // let url = ''\n    // if(server){\n    //   url = 'http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE'\n    // } else {\n    //   url = '/api/news.json?secret=PP87ANTIPIRATE';\n    // }\n\n    // 新写法\n    // let request = null;\n    // 当然了我们要是使用了redux-thunk，方法就可以不用再使用了\n    // const request = server ? serverRequest : clientRequest;\n    // return request.get('/api/news.json?secret=PP87ANTIPIRATE')\n    return axiosInstance.get('/api/news.json?secret=PP87ANTIPIRATE').then(function (res) {\n      console.log(res);\n      dispatch(changeList(res.data.data));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// 常量\nvar CHANGE_LIST = exports.CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Home/store/constants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // reducer 负责初始化创建一些数据，同时处理当action被接收到之后数据如何被改变的一些逻辑\n// reducer必须是一个纯函数\n\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar defaultState = {\n  name: 'yg',\n  newsList: []\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LIST:\n      var newState = _extends({}, state, {\n        newsList: action.list\n      });\n      return newState;\n      break;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      null,\n      'Login'\n    )\n  );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 同构的时候路由也要在服务器和客户端各跑一遍\n// exact 用户严格的访问根路径的时候\n// 如果我们需要做服务端渲染根据路由提前加载数据那么路由的定义我们就不能这么写了\n// export default (\n//   <div>\n//     <Route path='/' exact component={Home}></Route>\n//     <Route path='/login' exact component={Login}></Route>\n//   </div>\n// )\n\n// 老路由，没有多级路由，当我们添加了App.js无论何时都能显示header之后可以看只有的router配置\n// export default [\n//   {\n//     path: \"/\",\n//     component: Home,\n//     exact: true, // 精确匹配\n//     key:'home',\n//     loadData: Home.loadData, // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的\n//     // routes: [\n//     //   {\n//     //     path: \"/ttt\",\n//     //     component: Login,\n//     //     exact: true, // 精确匹配\n//     //     key:'ttt',\n//     //   }\n//     // ]\n//   },\n//   {\n//     path: \"/login\",\n//     component: Login,\n//     exact: true, // 精确匹配\n//     key:'login',\n//     // loadData: Home.loadData // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的\n//   },\n// ];\n\n\n// 多级路由,多层嵌套路由的时候在使用的时候routes.map是循环不出来的，我们就要使用一个更为复杂的方法\n// 这个方法是react-router-config 提供的\n// 在使用多级路由的时候utils里边展示的只是第一层路由的数据也就是App.js这个路由\n// 而App组件只有一个<Header/>组件，所以我们要在App组件中渲染多级路由\nexports.default = [{\n  path: '/',\n  component: _App2.default,\n  routes: [{\n    path: \"/\",\n    component: _Home2.default,\n    exact: true, // 精确匹配\n    key: 'home',\n    loadData: _Home2.default.loadData // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的\n  }, {\n    path: \"/login\",\n    component: _Login2.default,\n    exact: true, // 精确匹配\n    key: 'login'\n  }]\n}];\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _routes = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const express = require('express')\n// const app = express()\n// const Home = require('./ cocntainers/Home/index')\n// stage-0用了这个规范之后我们就可以在node环境下使用import esModulez这种规范了, 其实编译之后还是require这种语法\n\nvar app = (0, _express2.default)();\n\n// // 当请求/api的时候代理到http://47.95.113.63\n\n\n// 搭建一个代理服务器，让nodeServer做一个中间层，我们客户端在请求接口的时候都会通过这nodeServer，然后nodeServer转发到远程服务器，而不是客户端直接请求远程服务器的数据，有利于调试错误\napp.use('/api', (0, _expressHttpProxy2.default)('http://47.95.113.63', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    console.log(req.url);\n    // 做了中间层代理之后这时候ssr渲染不出来了，一直转圈，\n    // 为啥会出现这种情况，因为在ssr中也会执行axios.get('/api/news.json?secret=PP87ANTIPIRATE')这一段代码以便获取数据，这时候做了代理就错误了\n    // 为啥会错误呢\n    // 如果在浏览器运行/api/news.json = localhost:300/api/news.json\n    // 但是如果在服务器运行/api/news.json = 服务器根目录下的/api/news.json 服务器根目录下的(server)\n    return '/ssr/api' + req.url;\n    // 所以我们需要判断在actions.js里边做判断\n  }\n}));\n\n// 处理静态文件，只要访问的是静态文件就到public里边去找,json,js,png等都是静态文件\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n  var store = (0, _store.getStore)();\n  // 解决ssr中componentDidMount()方法不执行获取不到数据的问题\n  // 如果在这里拿到异步数据并填充到store之中\n  // https://reacttraining.com/react-router/web/guides/server-rendering\n  // 1.看home下index.js文件===>Home.loadData\n  // 2.看route.js 文件，路由是如何做配合的，到底需要哪个路由的数据我们不知道，所以我们需要结合当前用户请求地址和路由做判断\n  // 怎么实现第二部的想法呢需要接祖import { matchPath } from \"react-router-dom\";\n  // 所以我们也需要改造路由\n\n\n  // 当然了到这里我们还不能处理复杂的理由比如嵌套，我们就需要用到matchRoutes\n  // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-configs\n  // 3.让matchRoutes里边对应的组件的loadData方法执行，以便获取到这些组件需要获取到的数据\n  var matchRoute = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path);\n  var promises = [];\n  matchRoute.forEach(function (item) {\n    // loadData 函数填充store里边的内容,item.route.loadData也是一个promise\n    if (item.route.loadData) {\n      // item.route.loadData(store 返回的实际上就是一个promise\n      promises.push(item.route.loadData(store));\n    }\n  });\n\n  // 拿到home组件之后把home组件变成字符串，然后返回给浏览器\n  // res.send(\n  //   render(req)\n  // )\n  Promise.all(promises).then(function () {\n    console.log(store.getState()); // 这里就可以打印出来了\n    res.send((0, _utils.render)(req, _routes2.default, store));\n    // 到这里服务器端渲染已经完成了，但是我们刷新页面的时候还会有一段白屏，然后才会渲染出来，实际上源码里边已经有数据了的\n    // 什么原因呢，这是因为虽然在服务端已经返回数据了，但是再客户端再执行一遍的时候store仍然是空的，也就是我们没有做到服务端客户端的store统一，如何解决呢\n    // 这里涉及到了数据的脱水和注水,看server/index window.context,以及client/index\n    // 在服务端渲染中客户端我们通过getStore()去获取数据势必会造成服务端获取一次store后客户端又获取了一次，造成数据不同步，第一次加载仍然有白屏的情况\n    // 所以我们扩充了store的方法getClientStore\n  });\n  console.log(store.getState()); // 这时候打印出来的state里边newsList依然是空的，因为他是异步的，所以没等执行完就已经打印了\n});\n\napp.listen(3000, function () {\n  return console.log('Example app listening on port 3000!');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL: 'http://47.95.113.63/ssr'\n});\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _index = __webpack_require__(/*! ../containers/Home/index */ \"./src/containers/Home/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Home 的本质是一个虚拟dom，把虚拟dom转为string，在服务端渲染的时候，我们就可以给浏览器提供一个渲染好的字符串\n// 拿到home组件之后把home组件变成字符串，然后返回给浏览器\n// const content = renderToString(<Home />);\n\n// ssr的时候react-router提供了context来做数据的传递，\n// StaticRouter在使用的不像BrowserRouter会动态感知当前处于哪个路由\n// 如果我们要想知道当前路由怎么办呢，我们得拿到用户请求的路径（req）然后传递给StaticRouter，这时候router才知道用户所处在的路径\n\n\n// 在使用 renderToString时组件里边的事件是不会渲染出来的，只会渲染基础的内容\n// 如果我们想要事件也能执行怎么做呢？首先让基本内容能够渲染出来，然后让相同的组件像传统的react项目在浏览器端再运行一下，这就引除了同构的概念（一套react代码在服务端执行一次，在客户端执行一次）\n// 但是如何让相同的react代码在浏览器端再运行一次呢？\n// 既然我们可以在返回给浏览器的文件里边添加一个js文件，那么我们就可以在这个js文件里边做手脚\n// 看client下index.js即可\n\n// 同构的时候路由也要在服务器和客户端各跑一遍\nvar render = exports.render = function render(req, routes, store) {\n  // 在服务端执行react代码\n  // 这个是jsx的写法所以一定要映入react\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: {} },\n      _react2.default.createElement(\n        'div',\n        null,\n\n        // routes这里边用到的routes实际上就是第一层的路由App，而要做二层路由的时候就不是这个了就是第二个数组了\n        (0, _reactRouterConfig.renderRoutes)(routes)\n      )\n    )\n  ));\n  return '<html>\\n      <head>\\n        <title>HELLO</title>\\n      </head>\\n      <body> \\n        <div id=\"root\">' + content + '</div>\\n        <script>\\n          window.context = {\\n            state: ' + JSON.stringify(store.getState()) + '\\n          }\\n        </script>\\n        <script src=\\'/index.js\\'></script>\\n      </body>\\n    </html>';\n};\n\n// 多级路由,多层嵌套路由的时候在使用的时候routes.map是循环不出来的，我们就要使用一个更为复杂的方法\n// 这个方法是react-router-config 提供的\n\n// react-dom 提供的服务端渲染方式\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _index = __webpack_require__(/*! ../containers/Home/store/index.js */ \"./src/containers/Home/store/index.js\");\n\nvar _domain = __webpack_require__(/*! domain */ \"domain\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const reducer = (state = {name: 'yg'}, action) => {\n//   return state\n// }\n\n// store,这个store同样也要在客户端服务端个执行一次\n// redux 提供的使用中间件的方式applyMiddleware\nvar reducer = (0, _redux.combineReducers)({\n  home: _index.reducer\n});\n// 在使用redux的时候使用一些中间件\n// 他允许你的action可以返回函数, 带有dispatch和getState两个参数, 在这个action函数里, 异步的dispatch action;\nvar getStore = exports.getStore = function getStore() {\n  // 改变服务器端store的内容，那么就一定要使用serverAxios\n  // applyMiddleware，withExtraArgument方法传递的内容在异步的action里边可以通过第三个参数调用\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request4.default)));\n};\n// 我们在创建客户端store的时候我们需要去使用服务端给我们的store，所以需要创建这个方法\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  // 改变客户端store内容，一定要使用clientAxios\n  // 拿到服务器返回给我们的状态，stroe,这时候初始渲染的时候客户端和服务端的store是一模一样的了\n  // 这个过程就叫数据的脱水和注水\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n// 这样导出的store是一个单例的store，每个用户在访问页面的时候都会执行render函数\n// 但是返回的store永远都是那一个store，也就是所有用户用的是同一个store，同一份数据，显然这是不对的\n// export default getStore\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "domain":
/*!*************************!*\
  !*** external "domain" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"domain\");\n\n//# sourceURL=webpack:///external_%22domain%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });