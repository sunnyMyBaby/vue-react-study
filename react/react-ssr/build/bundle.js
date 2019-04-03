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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      null,\n      'Home'\n    ),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          alert('aaaa');\n        } },\n      'click me'\n    )\n  );\n}; // commonJs 语法\n// const React = require('react')\n// const Home = ()=>{\n//   return <div>home</div>\n// }\n// module.exports = {\n//   default: Home\n// }\n// 引入babel编译之后我们就可以这样写了\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _index = __webpack_require__(/*! ./containers/Home/index */ \"./src/containers/Home/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// react-ssr 服务端需要用到react-dom/server，把react虚拟dom转化为字符串\n// react-ssr 是建立在react 虚拟dom机制上的（虚拟都没是真实DOM的一个js对象印射）\n// 在客户端渲染的是时候我们可以把这个虚拟dom转换为真是dom\n// ReactDom.render(<Home/>),在服务端渲染时可以把它专为字符串返回给浏览器\n// 客户端渲染----react代码在浏览器上运行，消耗的是用户浏览器的性能\n// 服务端渲染----代码在服务器上运行，消耗的是服务器的性能，而且react也是很消耗计算性能的代码因为需要虚拟dom转化成字符串，做各种个样的运算比对特别消耗性能，在服务器上运行的时候也是特别消耗性能的，所以服务端架构很消耗服务器性能\n\n// // import Koa  = require('koa')  commonJs方式引入\n// // 我们用了webpack，stage-0 就可以通过import方式引入了\n// import Koa  from 'koa'\n// import Home from './src/containers/Home'\n// import React from 'react'\n// import staticFiles from 'koa-static' \n// import path from 'path'\n// import {renderToString} from 'react-dom/server'\n// const router = require('koa-router')(); \n// // react-ssr 服务端需要用到react-dom/server，把react虚拟dom转化为字符串\n// // react-ssr 是建立在react 虚拟dom机制上的（虚拟都没是真实DOM的一个js对象印射）\n// // 在客户端渲染的是时候我们可以把这个虚拟dom转换为真是dom\n// // ReactDom.render(<Home/>),在服务端渲染时可以把它专为字符串返回给浏览器\n// // 客户端渲染----react代码在浏览器上运行，消耗的是用户浏览器的性能\n// // 服务端渲染----代码在服务器上运行，消耗的是服务器的性能，而且react也是很消耗计算性能的代码因为需要虚拟dom转化成字符串，做各种个样的运算比对特别消耗性能，在服务器上运行的时候也是特别消耗性能的，所以服务端架构很消耗服务器性能\n\n// const app = new Koa();\n// // 请求静态文件都到public目录下去找-相对于 app.js 的路径\n// app.use(staticFiles(path.join(__dirname, 'public')))\n// // 相对于 app.js 的路径\n// app.use(async ctx=>{\n//   // 变成一个jsx语法，当然需要用到react\n//   // 拿到home组件之后把这个组件变成了字符串，然后返回给浏览器\n//   // express 是放在send(renderToString(<Home/>))里的\n//   ctx.body = `\n//     <html>\n//       <head>\n//         <title></title>\n//       </head>\n//       <body>\n//          ${renderToString(<Home/>)}\n//          <img src='/data.png'>\n//          <script src=\"/index.js\"></script>\n//       </body>\n//     </html>\n//   `\n// })\n// app.listen(3000)\n\n\n// import Koa  = require('koa')  commonJs方式引入\n// 我们用了webpack，stage-0 就可以通过import方式引入了\nvar app = new _express2.default();\n// 请求静态文件都到public目录下去找-相对于 app.js 的路径\n// 相对于 app.js 的路径\napp.use(_express2.default.static('public'));\napp.get('/', function (req, res) {\n  // 变成一个jsx语法，当然需要用到react\n  // 拿到home组件之后把这个组件变成了字符串，然后返回给浏览器\n  // express 是放在send(renderToString(<Home/>))里的\n  res.send('\\n    <html>\\n      <head>\\n        <title></title>\\n      </head>\\n      <body>\\n         <div id=\"root\">' + (0, _server.renderToString)(_react2.default.createElement(_index2.default, null)) + '</div>\\n         <script src=\"index.js\"></script>\\n      </body>\\n    </html>\\n  ');\n});\napp.listen(3000);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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

/***/ })

/******/ });