"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar App = function(props) {\n    var Component = props.Component, pageProps = props.pageProps;\n    var _getLayout;\n    var getLayout = (_getLayout = Component.getLayout) !== null && _getLayout !== void 0 ? _getLayout : function(page) {\n        return page;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"D:\\\\igu\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Material UI\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                theme: _theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: getLayout(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n                }, pageProps, {\n                    __source: {\n                        fileName: \"D:\\\\igu\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 22\n                    },\n                    __self: _this\n                })))\n            })\n        ]\n    }));\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFDd0I7QUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDRyxHQUFHLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztJQUN2QixHQUFLLENBQUdDLFNBQVMsR0FBZ0JELEtBQUssQ0FBOUJDLFNBQVMsRUFBRUMsU0FBUyxHQUFLRixLQUFLLENBQW5CRSxTQUFTO1FBRVRELFVBQW1CO0lBQXJDLEdBQUssQ0FBQ0UsU0FBUyxJQUFHRixVQUFtQixHQUFuQkEsU0FBUyxDQUFDRSxTQUFTLGNBQW5CRixVQUFtQixjQUFuQkEsVUFBbUIsR0FBSyxRQUFRLENBQVBHLElBQUk7UUFBS0EsTUFBTSxDQUFOQSxJQUFJOztJQUV4RCxNQUFNLHVFQUNIQyxDQUFHOzs7Ozs7OztrRkFDRFQsa0RBQUk7Ozs7Ozs7O3lGQUNGVSxDQUFLOzs7Ozs7O2tDQUFDLENBQVc7O3lGQUNqQkMsQ0FBSTt3QkFDSEMsSUFBSSxFQUFDLENBQVU7d0JBQ2ZDLE9BQU8sRUFBQyxDQUFxQzs7Ozs7Ozs7OztpRkFHOUNaLCtEQUFhO2dCQUFDQyxLQUFLLEVBQUVBLHlDQUFLOzs7Ozs7OzBCQUV4QkssU0FBUyxzRUFBRUYsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFJN0MsQ0FBQztLQXBCS0gsR0FBRztBQXNCVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi90aGVtZSc7XHJcblxyXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcclxuIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0ID8/ICgocGFnZSkgPT4gcGFnZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWF0ZXJpYWwgVUk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuXHJcbiAgICAgICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiQXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRMYXlvdXQiLCJwYWdlIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

});