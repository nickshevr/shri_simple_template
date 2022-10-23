/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkunit_demo_cra"] = self["webpackChunkunit_demo_cra"] || []).push([[3],{

/***/ "./src/components/TodoItem.js":
/*!************************************!*\
  !*** ./src/components/TodoItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => (/* binding */ TodoItem)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/react-redux@7.2.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/uuid */ \"./src/utils/uuid.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./src/components/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar TodoItem = function TodoItem(props) {\n  var index = props.index;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var text = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.items[index];\n  });\n  var done = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.done[index];\n  });\n  var onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    return dispatch((0,_store__WEBPACK_IMPORTED_MODULE_2__.setDone)(index, !done));\n  }, [index, done, dispatch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    \"data-testid\": (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_3__.UUID)(),\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    \"data-testid\": \"list-item\",\n    className: done ? \"done\" : \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"checkbox\",\n    checked: done,\n    onChange: onChange\n  }), text));\n};\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/TodoItem.js?");

/***/ }),

/***/ "./src/components/TodoList.js":
/*!************************************!*\
  !*** ./src/components/TodoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/react-redux@7.2.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoItem */ \"./src/components/TodoItem.js\");\n\n\n\n\n\nvar TodoList = function TodoList() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.items;\n  });\n  var text = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.text;\n  });\n  var onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref) {\n    var target = _ref.target;\n    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__.setText)(target.value));\n  }, [dispatch]);\n  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__.addItem)(text));\n  }, [dispatch, text]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    \"data-testid\": \"input-add\",\n    value: text,\n    onChange: onChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    \"data-testid\": \"button-add\",\n    onClick: onClick\n  }, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    \"data-testid\": \"list\",\n    className: \"list\"\n  }, lodash__WEBPACK_IMPORTED_MODULE_1___default().map(items, function (text, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoItem__WEBPACK_IMPORTED_MODULE_4__.TodoItem, {\n      key: i,\n      index: i\n    });\n  })));\n};\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/TodoList.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* unused harmony export Home */\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TodoList */ \"./src/components/TodoList.js\");\n\nvar Home = function Home() {\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", {\n    \"data-testid\": \"page-title\"\n  }, \"Home\"), /*#__PURE__*/React.createElement(\"p\", null, \"This is the list.\"), /*#__PURE__*/React.createElement(_components_TodoList__WEBPACK_IMPORTED_MODULE_0__.TodoList, null));\n};\n\n//# sourceURL=webpack://unit-demo-cra/./src/pages/Home.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItem\": () => (/* binding */ addItem),\n/* harmony export */   \"setDone\": () => (/* binding */ setDone),\n/* harmony export */   \"setText\": () => (/* binding */ setText)\n/* harmony export */ });\n/* unused harmony export initStore */\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/.pnpm/redux@4.2.0/node_modules/redux/es/redux.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar items = ['Позавтракать', 'Сходить в магазин', 'Покормить кота'];\nvar DEFAULT_STATE = {\n  items: items,\n  done: {},\n  text: ''\n};\n\n// actions\nvar addItem = function addItem(text) {\n  return {\n    type: 'ADD_ITEM',\n    text: text\n  };\n};\nvar setText = function setText(text) {\n  return {\n    type: 'SET_TEXT',\n    text: text\n  };\n};\nvar setDone = function setDone(index, done) {\n  return {\n    type: 'SET_DONE',\n    index: index,\n    done: done\n  };\n};\n\n// reducer\nvar rootReducer = function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case 'ADD_ITEM':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        text: '',\n        items: [].concat(_toConsumableArray(state.items), [action.text])\n      });\n    case 'SET_TEXT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        text: action.text\n      });\n    case 'SET_DONE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        done: _objectSpread(_objectSpread({}, state.done), {}, _defineProperty({}, action.index, action.done))\n      });\n    default:\n      return state;\n  }\n};\n\n// epics\n\nfunction initStore() {\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer);\n  return store;\n}\n\n//# sourceURL=webpack://unit-demo-cra/./src/store.js?");

/***/ }),

/***/ "./src/utils/uuid.js":
/*!***************************!*\
  !*** ./src/utils/uuid.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UUID\": () => (/* binding */ UUID)\n/* harmony export */ });\n// import crypto from 'crypto-browserify';\n\n// генерируем какой-то идентификатор для запуска\nvar UUID = crypto.randomUUID();\n\n//# sourceURL=webpack://unit-demo-cra/./src/utils/uuid.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/index.module.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/index.module.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"._304Dr9juynb8POmESDJEup {\\r\\n    padding: 0px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"item\": \"_304Dr9juynb8POmESDJEup\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/index.module.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/index.module.css":
/*!*****************************************!*\
  !*** ./src/components/index.module.css ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.module.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/index.module.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/index.module.css?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [1,4,5,6], () => (__webpack_exec__("./src/pages/Home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);