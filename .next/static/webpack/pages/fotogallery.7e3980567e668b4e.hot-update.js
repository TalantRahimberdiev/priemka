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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fotogallery_list\": function() { return /* binding */ Fotogallery_list; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Fotogallery_list = function(param) {\n    var fotogallery_data = param.fotogallery_data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        __source: {\n            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {\n                component: \"img\",\n                image: fotogallery_data[current].media,\n                maxHeight: \"400\",\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        gutterBottom: true,\n                        variant: \"p\",\n                        component: \"div\",\n                        align: \"center\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: fotogallery_data[current].description\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        gutterBottom: true,\n                        variant: \"p\",\n                        component: \"div\",\n                        align: \"center\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"\".concat(fotogallery_data[current].id, \"/\").concat(fotogallery_data.length)\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardActions, {\n                sx: {\n                    justifyContent: \"space-around\"\n                },\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"outlined\",\n                        color: \"success\",\n                        onClick: function() {\n                            return setCurrent(0);\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"пред.\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"outlined\",\n                        color: \"success\",\n                        onClick: function() {\n                            return setCurrent(1);\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"след.\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Fotogallery_list, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Fotogallery_list;\nvar _c;\n$RefreshReg$(_c, \"Fotogallery_list\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb3RvZ2FsbGVyeS9mb3RvZ2FsbGVyeV9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2tFOzs7QUFHM0YsR0FBSyxDQUFDUSxnQkFBZ0IsR0FBRyxRQUFRLFFBQWtCLENBQUM7UUFBeEJDLGdCQUFnQixTQUFoQkEsZ0JBQWdCOztJQUVqRCxHQUFLLENBQXlCVCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ1UsT0FBTyxHQUFnQlYsR0FBVyxLQUF6QlcsVUFBVSxHQUFJWCxHQUFXO0lBRXpDLE1BQU0sdUVBQ0hFLCtDQUFJOzs7Ozs7OztpRkFDRkMsb0RBQVM7Z0JBQUNTLFNBQVMsRUFBQyxDQUFLO2dCQUFDQyxLQUFLLEVBQUVKLGdCQUFnQixDQUFDQyxPQUFPLEVBQUVJLEtBQUs7Z0JBQUVDLFNBQVMsRUFBQyxDQUFLOzs7Ozs7OztrRkFDakZWLHNEQUFXOzs7Ozs7Ozt5RkFDVEMscURBQVU7d0JBQUNVLFlBQVk7d0JBQUNDLE9BQU8sRUFBQyxDQUFHO3dCQUFDTCxTQUFTLEVBQUMsQ0FBSzt3QkFBQ00sS0FBSyxFQUFDLENBQVE7Ozs7Ozs7a0NBQ2hFVCxnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFFUyxXQUFXOzt5RkFFdkNiLHFEQUFVO3dCQUFDVSxZQUFZO3dCQUFDQyxPQUFPLEVBQUMsQ0FBRzt3QkFBQ0wsU0FBUyxFQUFDLENBQUs7d0JBQUNNLEtBQUssRUFBQyxDQUFROzs7Ozs7O2tDQUMvRCxHQUFrQ1QsTUFBdUIsQ0FBdkRBLGdCQUFnQixDQUFDQyxPQUFPLEVBQUVVLEVBQUUsRUFBQyxDQUFDLElBQTBCLE9BQXhCWCxnQkFBZ0IsQ0FBQ1ksTUFBTTs7OztrRkFHOURqQixzREFBVztnQkFBQ2tCLEVBQUUsRUFBRSxDQUFDO29CQUFDQyxjQUFjLEVBQUUsQ0FBYztnQkFBQyxDQUFDOzs7Ozs7Ozt5RkFDaERoQixpREFBTTt3QkFBQ1UsT0FBTyxFQUFDLENBQVU7d0JBQUNPLEtBQUssRUFBQyxDQUFTO3dCQUFDQyxPQUFPLEVBQUUsUUFBUTs0QkFBRmQsTUFBTSxDQUFOQSxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7a0NBQUcsQ0FBSzs7eUZBQ3pFSixpREFBRTt3QkFBQ1UsT0FBTyxFQUFDLENBQVU7d0JBQUNPLEtBQUssRUFBQyxDQUFTO3dCQUFDQyxPQUFPLEVBQUUsUUFBUTs0QkFBRmQsTUFBTSxDQUFOQSxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7a0NBQUcsQ0FBSzs7Ozs7O0FBSXRGLENBQUM7R0FyQllILGdCQUFnQjtLQUFoQkEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ZvdG9nYWxsZXJ5L2ZvdG9nYWxsZXJ5X2xpc3QuanM/N2Y4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBDYXJkLCBDYXJkTWVkaWEsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZvdG9nYWxsZXJ5X2xpc3QgPSAoeyBmb3RvZ2FsbGVyeV9kYXRhIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZE1lZGlhIGNvbXBvbmVudD1cImltZ1wiIGltYWdlPXtmb3RvZ2FsbGVyeV9kYXRhW2N1cnJlbnRdLm1lZGlhfSBtYXhIZWlnaHQ9JzQwMCcgLz5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwicFwiIGNvbXBvbmVudD1cImRpdlwiIGFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAge2ZvdG9nYWxsZXJ5X2RhdGFbY3VycmVudF0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwicFwiIGNvbXBvbmVudD1cImRpdlwiIGFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAge2Ake2ZvdG9nYWxsZXJ5X2RhdGFbY3VycmVudF0uaWR9LyR7Zm90b2dhbGxlcnlfZGF0YS5sZW5ndGh9YH1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDxDYXJkQWN0aW9ucyBzeD17eyBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIiB9fT5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0nc3VjY2Vzcycgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudCgwKX0+0L/RgNC10LQuPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3N1Y2Nlc3MnIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnQoMSl9PtGB0LvQtdC0LjwvQnV0dG9uPlxyXG4gICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJveCIsIkNhcmQiLCJDYXJkTWVkaWEiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkZvdG9nYWxsZXJ5X2xpc3QiLCJmb3RvZ2FsbGVyeV9kYXRhIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJjb21wb25lbnQiLCJpbWFnZSIsIm1lZGlhIiwibWF4SGVpZ2h0IiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsImFsaWduIiwiZGVzY3JpcHRpb24iLCJpZCIsImxlbmd0aCIsInN4IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/fotogallery/fotogallery_list.js\n");

/***/ })

});