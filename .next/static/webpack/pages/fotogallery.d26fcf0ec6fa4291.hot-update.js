"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/fotogallery",{

/***/ "./src/components/fotogallery/fotogallery_list.js":
/*!********************************************************!*\
  !*** ./src/components/fotogallery/fotogallery_list.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fotogallery_list\": function() { return /* binding */ Fotogallery_list; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Fotogallery_list = function(param) {\n    var fotogallery_data = param.fotogallery_data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        __source: {\n            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                sx: {\n                    height: \"70vh\",\n                    width: 'auto'\n                },\n                src: fotogallery_data[current].media,\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                gutterBottom: true,\n                variant: \"p\",\n                component: \"div\",\n                align: \"center\",\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: fotogallery_data[current].description\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {\n                        component: \"img\",\n                        image: fotogallery_data[current].media,\n                        height: \"200\",\n                        width: \"auto\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardActions, {\n                        sx: {\n                            justifyContent: \"space-around\"\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"outlined\",\n                                color: \"success\",\n                                onClick: function() {\n                                    return setCurrent(0);\n                                },\n                                __source: {\n                                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"пред.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"outlined\",\n                                color: \"success\",\n                                onClick: function() {\n                                    return setCurrent(1);\n                                },\n                                __source: {\n                                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"след.\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Fotogallery_list, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Fotogallery_list;\nvar _c;\n$RefreshReg$(_c, \"Fotogallery_list\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb3RvZ2FsbGVyeS9mb3RvZ2FsbGVyeV9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2tFOzs7QUFHM0YsR0FBSyxDQUFDUSxnQkFBZ0IsR0FBRyxRQUFRLFFBQWtCLENBQUM7UUFBeEJDLGdCQUFnQixTQUFoQkEsZ0JBQWdCOztJQUVqRCxHQUFLLENBQXlCVCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ1UsT0FBTyxHQUFnQlYsR0FBVyxLQUF6QlcsVUFBVSxHQUFJWCxHQUFXO0lBRXpDLE1BQU0sdUVBQ0hDLDhDQUFHOzs7Ozs7OztpRkFDRFcsQ0FBRztnQkFBQ0MsRUFBRSxFQUFFLENBQUM7b0JBQUNDLE1BQU0sRUFBRSxDQUFNO29CQUFFQyxLQUFLLEVBQUUsQ0FBTTtnQkFBQyxDQUFDO2dCQUFFQyxHQUFHLEVBQUVQLGdCQUFnQixDQUFDQyxPQUFPLEVBQUVPLEtBQUs7Ozs7Ozs7O2lGQUMvRVgscURBQVU7Z0JBQUNZLFlBQVk7Z0JBQUNDLE9BQU8sRUFBQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBSztnQkFBQ0MsS0FBSyxFQUFDLENBQVE7Ozs7Ozs7MEJBQ2hFWixnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFFWSxXQUFXOztrRkFFdkNwQiwrQ0FBSTs7Ozs7Ozs7eUZBQ0ZDLG9EQUFTO3dCQUFDaUIsU0FBUyxFQUFDLENBQUs7d0JBQUNHLEtBQUssRUFBRWQsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRU8sS0FBSzt3QkFBRUgsTUFBTSxFQUFDLENBQUs7d0JBQUNDLEtBQUssRUFBQyxDQUFNOzs7Ozs7Ozt5RkFDM0ZWLHNEQUFXOzs7Ozs7OzswRkFJWEQsc0RBQVc7d0JBQUNTLEVBQUUsRUFBRSxDQUFDOzRCQUFDVyxjQUFjLEVBQUUsQ0FBYzt3QkFBQyxDQUFDOzs7Ozs7OztpR0FDaERqQixpREFBTTtnQ0FBQ1ksT0FBTyxFQUFDLENBQVU7Z0NBQUNNLEtBQUssRUFBQyxDQUFTO2dDQUFDQyxPQUFPLEVBQUUsUUFBUTtvQ0FBRmYsTUFBTSxDQUFOQSxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7MENBQUcsQ0FBSzs7aUdBQ3pFSixpREFBRTtnQ0FBQ1ksT0FBTyxFQUFDLENBQVU7Z0NBQUNNLEtBQUssRUFBQyxDQUFTO2dDQUFDQyxPQUFPLEVBQUUsUUFBUTtvQ0FBRmYsTUFBTSxDQUFOQSxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7MENBQUcsQ0FBSzs7Ozs7Ozs7QUFLeEYsQ0FBQztHQXZCWUgsZ0JBQWdCO0tBQWhCQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm90b2dhbGxlcnkvZm90b2dhbGxlcnlfbGlzdC5qcz83Zjg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIENhcmQsIENhcmRNZWRpYSwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRm90b2dhbGxlcnlfbGlzdCA9ICh7IGZvdG9nYWxsZXJ5X2RhdGEgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPGltZyBzeD17eyBoZWlnaHQ6IFwiNzB2aFwiLCB3aWR0aDogJ2F1dG8nIH19IHNyYz17Zm90b2dhbGxlcnlfZGF0YVtjdXJyZW50XS5tZWRpYX0gLz5cclxuICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJwXCIgY29tcG9uZW50PVwiZGl2XCIgYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAge2ZvdG9nYWxsZXJ5X2RhdGFbY3VycmVudF0uZGVzY3JpcHRpb259XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPENhcmRNZWRpYSBjb21wb25lbnQ9XCJpbWdcIiBpbWFnZT17Zm90b2dhbGxlcnlfZGF0YVtjdXJyZW50XS5tZWRpYX0gaGVpZ2h0PVwiMjAwXCIgd2lkdGg9J2F1dG8nIC8+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG5cclxuXHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0nc3VjY2Vzcycgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudCgwKX0+0L/RgNC10LQuPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0nc3VjY2Vzcycgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudCgxKX0+0YHQu9C10LQuPC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQm94IiwiQ2FyZCIsIkNhcmRNZWRpYSIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiRm90b2dhbGxlcnlfbGlzdCIsImZvdG9nYWxsZXJ5X2RhdGEiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImltZyIsInN4IiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJtZWRpYSIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJhbGlnbiIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/fotogallery/fotogallery_list.js\n");

/***/ })

});