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

/***/ "./node_modules/css-loader/index.js?!./src/components/Header/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/Header/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".style_blue_2YOj5{\\n  background: blue\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"blue\": \"style_blue_2YOj5\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/containers/Home/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/containers/Home/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body{\\n  background: red;\\n}\\n.style_style_2VH-F {\\n  background: green\\n}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"style\": \"style_style_2VH-F\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Isomorphic CSS style loader for Webpack\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nvar prefix = 's';\nvar inserted = {};\n\n// Base64 encoding and decoding - The \"Unicode Problem\"\n// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode('0x' + p1);\n  }));\n}\n\n/**\n * Remove style/link elements for specified node IDs\n * if they are no longer referenced by UI components.\n */\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(prefix + id);\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\n/**\n * Example:\n *   // Insert CSS styles object generated by `css-loader` into DOM\n *   var removeCss = insertCss([[1, 'body { color: red; }']]);\n *\n *   // Remove it from the DOM\n *   removeCss();\n */\nfunction insertCss(styles) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === undefined ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === undefined ? false : _ref$prepend;\n\n  var ids = [];\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n\n    var id = moduleId + '-' + i;\n\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n\n    var elem = document.getElementById(prefix + id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = prefix + id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n    if (sourceMap && typeof btoa === 'function') {\n      // skip IE9 and below, see http://caniuse.com/atob-btoa\n      cssText += '\\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';\n      cssText += '\\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/lib/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _index = __webpack_require__(/*! ./components/Header/index */ \"./src/components/Header/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _store = __webpack_require__(/*! ./components/Header/store/ */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import routes from './routes'\n// renderRoutes 这个方法实际上即使我们在渲染一级路由的时候他会把耳机路由的信息给我们带到组件中区\nvar App = function App(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_index2.default, { staticContext: props.staticContext }),\n    _react2.default.createElement(\n      'div',\n      null,\n      'App'\n    ),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\nApp.loadData = function (store) {\n  return store.dispatch(_store.actions.getHeaderInfo());\n};\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/WithStyle.js":
/*!**************************!*\
  !*** ./src/WithStyle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// 这个函数式生成高阶组件的函数\nexports.default = function (DocoratedComponent, style) {\n  // 返回的组件叫做高阶组件\n  // 他只做一件事，即将被渲染之前他会到自己的Context里边去往他的css属性里边push一个style内容\n  return function (_Component) {\n    _inherits(NewComponent, _Component);\n\n    function NewComponent() {\n      _classCallCheck(this, NewComponent);\n\n      return _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).apply(this, arguments));\n    }\n\n    _createClass(NewComponent, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        if (style._getCss) {\n          this.props.staticContext.css.push(style._getCss());\n          console.log(style._getCss());\n        }\n      }\n      // 渲染什么也不知道，要从外部传递进来\n      // 返回一个全新的组件，这个全新的组件会在渲染旧的组件之前会在staticContext一些东西然后再去渲染旧的那个组件\n      // 其实就是为了不用再每个组件下去写componentWillMount周期然后push样式\n      // 其实我更喜欢在组件里边写的安歇代码\n\n    }, {\n      key: 'render',\n      value: function render() {\n        return _react2.default.createElement(DocoratedComponent, this.props);\n      }\n    }]);\n\n    return NewComponent;\n  }(_react.Component);\n};\n\n//# sourceURL=webpack:///./src/WithStyle.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL: '/',\n  // 实例共用的参数,这样的话其他地方的secret就不用带了\n  params: {\n    secret: 'PP87ANTIPIRATE'\n  }\n});\n\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _index = __webpack_require__(/*! ./store/index */ \"./src/components/Header/store/index.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _WithStyle = __webpack_require__(/*! ../../WithStyle */ \"./src/WithStyle.js\");\n\nvar _WithStyle2 = _interopRequireDefault(_WithStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'render',\n\n    // componentWillMount(){\n    //   // 服务端渲染的时候style是有这些方法的，但是到客户端就没有了\n    //   // this.props.staticContext || style._getCss\n    //   if(style._getCss){\n    //     this.props.staticContext.css.push(style._getCss());\n    //     // 这时候在服务端我们就可以接收到这些样式了然后就可以想办法在ssr中把css显示出来看server.js/utils.js cssStr\n    //     // 然后再server.js/index.js下，打印出来\n    //     console.log(style._getCss())\n    //   }\n    // }\n    value: function render() {\n      var _props = this.props,\n          login = _props.login,\n          handleLogin = _props.handleLogin,\n          handleLoginOut = _props.handleLoginOut;\n\n      console.log(login);\n      return _react2.default.createElement(\n        'div',\n        { className: _style2.default.blue },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/' },\n          '\\u9996\\u9875'\n        ),\n        _react2.default.createElement('br', null),\n        login ? _react2.default.createElement(\n          _react.Fragment,\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/translation' },\n            '\\u7FFB\\u8BD1\\u5217\\u8868'\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(\n            'div',\n            { onClick: handleLoginOut },\n            '\\u9000\\u51FA'\n          )\n        ) : _react2.default.createElement(\n          'div',\n          { onClick: handleLogin },\n          '\\u767B\\u5F55'\n        ),\n        _react2.default.createElement('br', null)\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nvar mapState = function mapState(state) {\n  return {\n    login: state.header.login\n  };\n};\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      dispatch(_index.actions.login());\n    },\n    handleLoginOut: function handleLoginOut() {\n      dispatch(_index.actions.loginOut());\n    }\n  };\n};\nexports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _WithStyle2.default)(Header, _style2.default));\n\n// 当我们刷新切换会出现登录和退出状态的切换的bug，这是因为\n// 1.刚进入页面，处于非登录装填\n// 2.用户点击登录按钮，进行登录\n// 浏览器发送请求给nodejs服务器\n// 转发给api服务器，进行登录\n// api服务器生成cookie\n// 浏览器上存在了cookie登录成功\n// 当用户重新刷子你页面的时候\n// 浏览器请求html（携带了cookie）\n// nodejs服务器进行服务器端渲染\n// 进行服务器端渲染，首先要去api服务器取数据（没有携带cookie，node服务器在proxy代理转发的时候不携带这个cookie）正是这一步导致了这个bug\n// server/index 下promises打印出来有个undefined，这个原因导致了，因为正常来说每次请求都是一个promise但是有一个undefined，根源在这里\n// 为啥有这个undefined呢，loadData的问题\n// loadData需要返回一个promise才行，这只是解决了一部分\n// 在发送请求的时候我们要把cookie带上（剑requeset里的header\n// const store = getStore(req);\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHeaderInfo = exports.login = exports.loginOut = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar changeLogin = function changeLogin(value) {\n  return {\n    type: _constants.CHANGE_LOGIN,\n    value: value\n  };\n};\nvar loginOut = exports.loginOut = function loginOut() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/logout.json').then(function (res) {\n      dispatch(changeLogin(false));\n      console.log(res);\n    });\n  };\n};\nvar login = exports.login = function login() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/login.json').then(function (res) {\n      dispatch(changeLogin(true));\n      console.log(res);\n    });\n  };\n};\n\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/isLogin.json').then(function (res) {\n      dispatch(changeLogin(res.data.data.login));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'HEAD/CHANGE_LOGIN';\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\nexports.actions = actions;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar defaultState = {\n  login: true\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    // 接收action\n    case _constants.CHANGE_LOGIN:\n      return _extends({}, state, {\n        login: action.value\n      });\n      break;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/components/Header/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/style.css?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header/ */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // nodeJs体系下遵循的是common.js的规范也就是require\n// import 和 export default 语法是esModule的语法\n// import React from 'react'; \n\n// const React = require('react')\n// const Home = ()=>{\n//   return <div>home</div>\n// }\n\n// module.exports = {\n//   default: Home\n// }\n\n// stage-0用了这个规范之后我们就可以在node环境下使用import esModulez这种规范了, 其实编译之后还是require这种语法\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      // 服务端渲染的时候style是有这些方法的，但是到客户端就没有了\n      // this.props.staticContext || style._getCss\n      if (_style2.default._getCss) {\n        // this.props.staticContext.css = style._getCss();\n        // 用push是为了防止样式替换后覆盖\n        this.props.staticContext.css.push(_style2.default._getCss());\n        // 这时候在服务端我们就可以接收到这些样式了然后就可以想办法在ssr中把css显示出来看server.js/utils.js cssStr\n        // 但是呢到这里在home组件还是不行的，因为this.props.staticContext是undefined\n        // 因为在home路径的时候会加载两个组件App，和Home，这时候用this.props.staticContext是可以的，所以我们要向下传递\n        // 但是header组件是在app组件的内部不能使用this.props.staticContext，\n        // 然后再server.js/index.js下，打印出来\n        console.log(_style2.default._getCss());\n      }\n    }\n  }, {\n    key: 'getList',\n    value: function getList() {\n      var list = this.props.list;\n\n      return list.map(function (item) {\n        return _react2.default.createElement(\n          'div',\n          { key: item.id },\n          item.title\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      // console.log(this.props.list);\n      // Fragment 一般是用来处理多个元素返回的情况，Fragment本身不转换为任何dom元素，是个空标签，比如\n      // <Fragment>\n      //   <li>hi</li>\n      //   <li>原罪</li>\n      // </Fragment>\n      return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            '\\u8FD9\\u662FHome\\u9875\\u9762-yg\\u7684ssr\\u9879\\u76EE'\n          ),\n          _react2.default.createElement('meta', { name: 'description', content: '\\u8FD9\\u662F\\u4E00\\u4E2A\\u81EA\\u5DF1\\u5B66\\u4E60\\u7814\\u7A76\\u7684react-ssr\\u6846\\u67B6' })\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'div',\n            { 'class': _style2.default.style },\n            'yg react ssr: ',\n            this.props.name\n          ),\n          this.getList(),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                alert('click');\n              } },\n            'click'\n          )\n        )\n      );\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // 这个周期函数只会在客户端渲染的时候执行,服务器端不会执行，所以呢一开始获取到的store数据都是空的\n      // 所以接下来我们要解决的是如何让服务器端也能执行从而获取数据，始终服务器端是不会执行componentDidMount的但是可以通过其他方式进行\n      // https://reacttraining.com/react-router/web/guides/server-rendering\n      // 如果首先进入根目录那么我们会通过服务端获取到数据了，这时候我们就不需要再获取一遍\n      // 但是我们又不能去掉，因为如果我们首次进入其他页面再跳转到这个页面那么，我们依然需要借助这里的方法获取数据\n      if (!this.props.list.length) {\n        this.props.getHomeList();\n      }\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n// Home.loadData = (store) => {\n//   // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前获取加载好\n//   // 扩充store里边的数据\n//   return store.dispatch(getHomeList(true))\n// }\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    list: state.home.newsList\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch((0, _actions.getHomeList)());\n    }\n  };\n};\nvar ExportHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n// 如果loadData直接挂载到Home下回存在以下潜在的问题因为我们导出的组件是通过connect包装后的组件\nExportHome.loadData = function (store) {\n  // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前获取加载好\n  // 扩充store里边的数据\n  return store.dispatch((0, _actions.getHomeList)(true));\n};\nexports.default = ExportHome;\n\n// 函数式组件，没有任生命周期\n// const Home = (props)=>{\n//   return (\n//     <div>\n//       <Header />\n//       <div>yg react ssr: { props.name }</div>\n//       <button onClick={()=>{alert('click')}}>\n//         click\n//       </button>\n//     </div>\n//   )\n// }\n\n// const mapStateToProps = state => ({\n//   name: state.home.name\n// })\n\n// export default connect(mapStateToProps, null)(Home)\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHomeList = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar _request = __webpack_require__(/*! ../../../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../../../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants.CHANGE_LIST,\n    list: list\n  };\n};\n\nvar getHomeList = exports.getHomeList = function getHomeList() {\n  var server = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n  // 可以返回一个普通的对象，也可以返回一个一个函数来做一些异步的操作，因为我们用了react-thunk（可在action里做异步操作）\n  return function (dispatch, getState, axiosInstance) {\n    // react-thunk我们用它做异步请求的时候，返回的这个函数可以接收到dispatch这个方法，然后呢可以再调用dispatch在派发一个dispatch\n    // 因为这里是异步的，会返回一个promise所以这里我们需要把这个promise返回，方便服务端执行loaData的时候获取数据\n    // 使用httpProxy做代理之后\n    // return axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')\n    // 下面写法太low，所以我们需要用到axios的instance(同意前缀)概念，看requeset.js\n    // let url = ''\n    // if(server){\n    //   url = 'http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE'\n    // } else {\n    //   url = '/api/news.json?secret=PP87ANTIPIRATE';\n    // }\n\n    // 新写法\n    // let request = null;\n    // 当然了我们要是使用了redux-thunk，方法就可以不用再使用了\n    // const request = server ? serverRequest : clientRequest;\n    // return request.get('/api/news.json?secret=PP87ANTIPIRATE')\n    return axiosInstance.get('/api/news.json').then(function (res) {\n      // console.log(res);\n      dispatch(changeList(res.data.data));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

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

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/containers/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotFound = function (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      // componentDidMount 只会在客户端渲染执行\n      // 这个方法客户端服务端渲染都会执行\n      // 只有服务端渲染才用，因为客户端压根没有传不过来\n      // if(this.props.staticContext){\n      //   this.props.staticContext.NotFound = true;\n      // }\n      var staticContext = this.props.staticContext;\n\n      staticContext && (staticContext.staticContext = true);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        '404,sorry,page,nodt found'\n      );\n    }\n  }]);\n\n  return NotFound;\n}(_react.Component);\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/containers/Translation/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Translation/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Translation/store/actions.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import Header from '../../components/Header/'\n// 判断用户是否登录\n\n\nvar Translation = function (_Component) {\n  _inherits(Translation, _Component);\n\n  function Translation() {\n    _classCallCheck(this, Translation);\n\n    return _possibleConstructorReturn(this, (Translation.__proto__ || Object.getPrototypeOf(Translation)).apply(this, arguments));\n  }\n\n  _createClass(Translation, [{\n    key: 'getList',\n    value: function getList() {\n      var list = this.props.list;\n\n      return list.map(function (item) {\n        return _react2.default.createElement(\n          'div',\n          { key: item.id },\n          item.title\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return this.props.login ? _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            '\\u8FD9\\u662FTranstion\\u9875\\u9762-'\n          ),\n          _react2.default.createElement('meta', { name: 'description', content: '\\u8FD9\\u662F\\u4E00\\u4E2A\\u81EA\\u5DF1\\u5B66\\u4E60\\u7814\\u7A76\\u7684react-ssr\\u6846\\u67B6' })\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          this.getList()\n        )\n      ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (!this.props.list.length) {\n        this.props.getTranslationList();\n      }\n    }\n  }]);\n\n  return Translation;\n}(_react.Component);\n// Translation.loadData = (store) => {\n//   return store.dispatch(getTranslationList(true))\n// }\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.translation.translationList,\n    login: state.header.login\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getTranslationList: function getTranslationList() {\n      dispatch((0, _actions.getTranslationList)());\n    }\n  };\n};\n\nvar ExportTranslation = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Translation);\nExportTranslation.loadData = function (store) {\n  return store.dispatch((0, _actions.getTranslationList)(true));\n};\nexports.default = ExportTranslation;\n\n//# sourceURL=webpack:///./src/containers/Translation/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getTranslationList = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants.CHANGE_LIST,\n    list: list\n  };\n};\n\nvar getTranslationList = exports.getTranslationList = function getTranslationList() {\n  var server = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n  // 可以返回一个普通的对象，也可以返回一个一个函数来做一些异步的操作，因为我们用了react-thunk（可在action里做异步操作）\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/translations.json').then(function (res) {\n      console.log('999999999');\n      console.log(res.data);\n      if (res.data.success) {\n        var list = res.data.data;\n        dispatch(changeList(list));\n      } else {\n        var _list = [];\n        dispatch(changeList(_list));\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/actions.js?");

/***/ }),

/***/ "./src/containers/Translation/store/constants.js":
/*!*******************************************************!*\
  !*** ./src/containers/Translation/store/constants.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// 常量\nvar CHANGE_LIST = exports.CHANGE_LIST = 'TRANSLATION/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Translation/store/constants.js?");

/***/ }),

/***/ "./src/containers/Translation/store/index.js":
/*!***************************************************!*\
  !*** ./src/containers/Translation/store/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Translation/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Translation/store/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import {} from './constants'\n\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\nvar defaultState = {\n  translationList: []\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LIST:\n      console.log('=====');\n      console.log(action.list);\n      return _extends({}, state, {\n        translationList: action.list\n      });\n      break;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/reducer.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Translation = __webpack_require__(/*! ./containers/Translation */ \"./src/containers/Translation/index.js\");\n\nvar _Translation2 = _interopRequireDefault(_Translation);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _NotFound = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 同构的时候路由也要在服务器和客户端各跑一遍\n// exact 用户严格的访问根路径的时候\n// 如果我们需要做服务端渲染根据路由提前加载数据那么路由的定义我们就不能这么写了\n// export default (\n//   <div>\n//     <Route path='/' exact component={Home}></Route>\n//     <Route path='/login' exact component={Login}></Route>\n//   </div>\n// )\n\n// 老路由，没有多级路由，当我们添加了App.js无论何时都能显示header之后可以看只有的router配置\n// export default [\n//   {\n//     path: \"/\",\n//     component: Home,\n//     exact: true, // 精确匹配\n//     key:'home',\n//     loadData: Home.loadData, // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的\n//     // routes: [\n//     //   {\n//     //     path: \"/ttt\",\n//     //     component: Login,\n//     //     exact: true, // 精确匹配\n//     //     key:'ttt',\n//     //   }\n//     // ]\n//   },\n//   {\n//     path: \"/login\",\n//     component: Login,\n//     exact: true, // 精确匹配\n//     key:'login',\n//     // loadData: Home.loadData // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的\n//   },\n// ];\n\n\n// 多级路由,多层嵌套路由的时候在使用的时候routes.map是循环不出来的，我们就要使用一个更为复杂的方法\n// 这个方法是react-router-config 提供的\n// 在使用多级路由的时候utils里边展示的只是第一层路由的数据也就是App.js这个路由\n// 而App组件只有一个<Header/>组件，所以我们要在App组件中渲染多级路由\nexports.default = [{\n  path: '/',\n  component: _App2.default,\n  loadData: _App2.default.loadData,\n  routes: [{\n    path: \"/\",\n    component: _Home2.default,\n    exact: true, // 精确匹配\n    key: 'home',\n    loadData: _Home2.default.loadData // 加载home组件之前要执行loadData方法，这个方法其实是定义在Home组件上的\n  }, {\n    path: \"/translation\",\n    component: _Translation2.default,\n    exact: true, // 精确匹配\n    key: 'translation',\n    loadData: _Translation2.default.loadData\n  }, {\n    component: _NotFound2.default\n  }]\n}];\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _routes = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const express = require('express')\n// const app = express()\n// const Home = require('./ cocntainers/Home/index')\n// stage-0用了这个规范之后我们就可以在node环境下使用import esModulez这种规范了, 其实编译之后还是require这种语法\n\nvar app = (0, _express2.default)();\n\n// // 当请求/api的时候代理到http://47.95.113.63\n\n\n// 搭建一个代理服务器，让nodeServer做一个中间层，我们客户端在请求接口的时候都会通过这nodeServer，然后nodeServer转发到远程服务器，而不是客户端直接请求远程服务器的数据，有利于调试错误\napp.use('/api', (0, _expressHttpProxy2.default)('http://47.95.113.63', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    // console.log(req.url);\n    // 做了中间层代理之后这时候ssr渲染不出来了，一直转圈，\n    // 为啥会出现这种情况，因为在ssr中也会执行axios.get('/api/news.json?secret=PP87ANTIPIRATE')这一段代码以便获取数据，这时候做了代理就错误了\n    // 为啥会错误呢\n    // 如果在浏览器运行/api/news.json = localhost:300/api/news.json\n    // 但是如果在服务器运行/api/news.json = 服务器根目录下的/api/news.json 服务器根目录下的(server)\n    return '/ssr/api' + req.url;\n    // 所以我们需要判断在actions.js里边做判断\n  }\n}));\n\n// 处理静态文件，只要访问的是静态文件就到public里边去找,json,js,png等都是静态文件\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n  var store = (0, _store.getStore)(req);\n  // 解决ssr中componentDidMount()方法不执行获取不到数据的问题\n  // 如果在这里拿到异步数据并填充到store之中\n  // https://reacttraining.com/react-router/web/guides/server-rendering\n  // 1.看home下index.js文件===>Home.loadData\n  // 2.看route.js 文件，路由是如何做配合的，到底需要哪个路由的数据我们不知道，所以我们需要结合当前用户请求地址和路由做判断\n  // 怎么实现第二部的想法呢需要接祖import { matchPath } from \"react-router-dom\";\n  // 所以我们也需要改造路由\n\n\n  // 当然了到这里我们还不能处理复杂的理由比如嵌套，我们就需要用到matchRoutes\n  // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-configs\n  // 3.让matchRoutes里边对应的组件的loadData方法执行，以便获取到这些组件需要获取到的数据\n  var matchRoute = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path);\n  var promises = [];\n  matchRoute.forEach(function (item) {\n    // loadData 函数填充store里边的内容,item.route.loadData也是一个promise\n    if (item.route.loadData) {\n      // item.route.loadData(store 返回的实际上就是一个promise\n      // 处理多个接口调用时因为延时等原因造成的数据加载错误\n      // 比如有a,b,c,d个组件，a,报错了走catch，这时候b,c,d没回来就得需要这种处理方式\n      // 以便保证下面能触发all方法\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n\n  // 拿到home组件之后把home组件变成字符串，然后返回给浏览器\n  // res.send(\n  //   render(req)\n  // )\n  // console.log(promises);// TODO\n  Promise.all(promises).then(function () {\n    // console.log(store.getState());// 这里就可以打印出来了\n    var context = {\n      css: []\n    };\n    var html = (0, _utils.render)(store, _routes2.default, req, context);\n    // console.log(context.css, '-------')\n    // 当我们按照routes.js方式定义路由时，transtion下有个<Redirect to=\"/\" />重定向，当我们没有登录的时候访问\n    // translation页面，客户端给我们重定向（一开始的重定向并不是服务端做的而是客户端做的）时会在context上添加一下信息 action: 'REPLACE',\n    // 所以我们可以通过这个信息来做服务端301重定向\n    if (context.action === 'REPLACE') {\n      res.redirect(301, context.url);\n    } else if (context.NotFound) {\n      res.status(404);\n      res.send(html);\n    } else {\n      res.status(200);\n      res.send(html);\n    }\n    // 到这里服务器端渲染已经完成了，但是我们刷新页面的时候还会有一段白屏，然后才会渲染出来，实际上源码里边已经有数据了的\n    // 什么原因呢，这是因为虽然在服务端已经返回数据了，但是再客户端再执行一遍的时候store仍然是空的，也就是我们没有做到服务端客户端的store统一，如何解决呢\n    // 这里涉及到了数据的脱水和注水,看server/index window.context,以及client/index\n    // 在服务端渲染中客户端我们通过getStore()去获取数据势必会造成服务端获取一次store后客户端又获取了一次，造成数据不同步，第一次加载仍然有白屏的情况\n    // 所以我们扩充了store的方法getClientStore\n  });\n  // console.log(store.getState()); // 这时候打印出来的state里边newsList依然是空的，因为他是异步的，所以没等执行完就已经打印了\n});\n\napp.listen(3000, function () {\n  return console.log('Example app listening on port 3000!');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createInstance = function createInstance(req) {\n  return _axios2.default.create({\n    baseURL: 'http://47.95.113.63/ssr',\n    // 但是这里没有 req\n    // const store = getStore(req);\n    headers: {\n      cookie: req.get('cookie') || ''\n    },\n    // 实例共用的参数\n    params: {\n      secret: 'PP87ANTIPIRATE'\n    }\n  });\n};\nexports.default = createInstance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _index = __webpack_require__(/*! ../containers/Home/index */ \"./src/containers/Home/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Home 的本质是一个虚拟dom，把虚拟dom转为string，在服务端渲染的时候，我们就可以给浏览器提供一个渲染好的字符串\n// 拿到home组件之后把home组件变成字符串，然后返回给浏览器\n// const content = renderToString(<Home />);\n\n// ssr的时候react-router提供了context来做数据的传递，\n// StaticRouter在使用的不像BrowserRouter会动态感知当前处于哪个路由\n// 如果我们要想知道当前路由怎么办呢，我们得拿到用户请求的路径（req）然后传递给StaticRouter，这时候router才知道用户所处在的路径\n\n\n// 在使用 renderToString时组件里边的事件是不会渲染出来的，只会渲染基础的内容\n// 如果我们想要事件也能执行怎么做呢？首先让基本内容能够渲染出来，然后让相同的组件像传统的react项目在浏览器端再运行一下，这就引除了同构的概念（一套react代码在服务端执行一次，在客户端执行一次）\n// 但是如何让相同的react代码在浏览器端再运行一次呢？\n// 既然我们可以在返回给浏览器的文件里边添加一个js文件，那么我们就可以在这个js文件里边做手脚\n// 看client下index.js即可\n\n// 同构的时候路由也要在服务器和客户端各跑一遍\nvar render = exports.render = function render(store, routes, req, context) {\n  // 在服务端执行react代码\n  // 这个是jsx的写法所以一定要映入react\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n\n        // routes这里边用到的routes实际上就是第一层的路由App，而要做二层路由的时候就不是这个了就是第二个数组了\n        (0, _reactRouterConfig.renderRoutes)(routes)\n      )\n    )\n  ));\n  var helmet = _reactHelmet.Helmet.renderStatic();\n  // 拼接样式\n  var cssStr = context.css.length ? context.css.join('\\n') : '';\n  // console.log(cssStr);\n  console.log('00000');\n  console.log(helmet.meta.toString());\n  console.log('11111');\n  return '<html>\\n      <head>\\n        ' + helmet.title.toString() + '\\n        ' + helmet.meta.toString() + '\\n        <style>\\n          ' + cssStr + '\\n        </style>\\n      </head>\\n      <body> \\n        <div id=\"root\">' + content + '</div>\\n        <script>\\n          window.context = {\\n            state: ' + JSON.stringify(store.getState()) + '\\n          }\\n        </script>\\n        <script src=\\'/index.js\\'></script>\\n      </body>\\n    </html>';\n};\n\n// 多级路由,多层嵌套路由的时候在使用的时候routes.map是循环不出来的，我们就要使用一个更为复杂的方法\n// 这个方法是react-router-config 提供的\n\n// react-dom 提供的服务端渲染方式\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _index = __webpack_require__(/*! ../containers/Home/store/index.js */ \"./src/containers/Home/store/index.js\");\n\nvar _index2 = __webpack_require__(/*! ../components/Header/store/index */ \"./src/components/Header/store/index.js\");\n\nvar _index3 = __webpack_require__(/*! ../containers/Translation/store/index */ \"./src/containers/Translation/store/index.js\");\n\nvar _domain = __webpack_require__(/*! domain */ \"domain\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// store,这个store同样也要在客户端服务端个执行一次\n// redux 提供的使用中间件的方式applyMiddleware\n\n// combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。\nconsole.log('aaaaaa');\n// 在使用redux的时候使用一些中间件\n// 他允许你的action可以返回函数, 带有dispatch和getState两个参数, 在这个action函数里, 异步的dispatch action;\n\nconsole.log(_index2.reducer);\n\n\n// const reducer = (state = {name: 'yg'}, action) => {\n//   return state\n// }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _index.reducer,\n  header: _index2.reducer,\n  translation: _index3.reducer\n});\nvar getStore = exports.getStore = function getStore(req) {\n  // 改变服务器端store的内容，那么就一定要使用serverAxios\n  // applyMiddleware，withExtraArgument方法传递的内容在异步的action里边可以通过第三个参数调用\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req))));\n};\n// 我们在创建客户端store的时候我们需要去使用服务端给我们的store，所以需要创建这个方法\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  // 改变客户端store内容，一定要使用clientAxios\n  // 拿到服务器返回给我们的状态，stroe,这时候初始渲染的时候客户端和服务端的store是一模一样的了\n  // 这个过程就叫数据的脱水和注水\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n// 这样导出的store是一个单例的store，每个用户在访问页面的时候都会执行render函数\n// 但是返回的store永远都是那一个store，也就是所有用户用的是同一个store，同一份数据，显然这是不对的\n// export default getStore\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

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