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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fotogallery_list\": function() { return /* binding */ Fotogallery_list; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Fotogallery_list = function(param) {\n    var fotogallery_data = param.fotogallery_data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    var next = function() {\n        if (current < fotogallery_data.length) setCurrent(function(c) {\n            return c + 1;\n        });\n        else setCurrent(0);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        __source: {\n            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {\n                component: \"img\",\n                image: fotogallery_data[current].media,\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        gutterBottom: true,\n                        variant: \"p\",\n                        component: \"div\",\n                        align: \"center\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: fotogallery_data[current].description\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        gutterBottom: true,\n                        variant: \"p\",\n                        component: \"div\",\n                        align: \"center\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"\".concat(fotogallery_data[current].id, \"/\").concat(fotogallery_data.length)\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardActions, {\n                sx: {\n                    justifyContent: \"space-around\"\n                },\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"outlined\",\n                        color: \"success\",\n                        onClick: function() {\n                            return setCurrent(0);\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"пред.\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"outlined\",\n                        color: \"success\",\n                        onClick: function() {\n                            return setCurrent(1);\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"след.\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Fotogallery_list, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Fotogallery_list;\nvar _c;\n$RefreshReg$(_c, \"Fotogallery_list\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb3RvZ2FsbGVyeS9mb3RvZ2FsbGVyeV9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQzREOzs7QUFHckYsR0FBSyxDQUFDTyxnQkFBZ0IsR0FBRyxRQUFRLFFBQWtCLENBQUM7UUFBeEJDLGdCQUFnQixTQUFoQkEsZ0JBQWdCOztJQUVqRCxHQUFLLENBQXlCUixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ1MsT0FBTyxHQUFnQlQsR0FBVyxLQUF6QlUsVUFBVSxHQUFJVixHQUFXO0lBQ3pDLEdBQUssQ0FBQ1csSUFBSSxHQUFDLFFBQ1osR0FEZ0IsQ0FBQztRQUNkLEVBQUUsRUFBQ0YsT0FBTyxHQUFHRCxnQkFBZ0IsQ0FBQ0ksTUFBTSxFQUNsQ0YsVUFBVSxDQUFDRyxRQUFRLENBQVJBLENBQUM7WUFBRUEsTUFDcEIsQ0FEb0JBLENBQUMsR0FBQyxDQUFDOzthQUNkSCxVQUFVLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsTUFBTSx1RUFDSFQsK0NBQUk7Ozs7Ozs7O2lGQUNGQyxvREFBUztnQkFBQ1ksU0FBUyxFQUFDLENBQUs7Z0JBQUNDLEtBQUssRUFBRVAsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRU8sS0FBSzs7Ozs7Ozs7a0ZBQ2hFWixzREFBVzs7Ozs7Ozs7eUZBQ1RDLHFEQUFVO3dCQUFDWSxZQUFZO3dCQUFDQyxPQUFPLEVBQUMsQ0FBRzt3QkFBQ0osU0FBUyxFQUFDLENBQUs7d0JBQUNLLEtBQUssRUFBQyxDQUFROzs7Ozs7O2tDQUNoRVgsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRVcsV0FBVzs7eUZBRXZDZixxREFBVTt3QkFBQ1ksWUFBWTt3QkFBQ0MsT0FBTyxFQUFDLENBQUc7d0JBQUNKLFNBQVMsRUFBQyxDQUFLO3dCQUFDSyxLQUFLLEVBQUMsQ0FBUTs7Ozs7OztrQ0FDL0QsR0FBa0NYLE1BQXVCLENBQXZEQSxnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFFWSxFQUFFLEVBQUMsQ0FBQyxJQUEwQixPQUF4QmIsZ0JBQWdCLENBQUNJLE1BQU07Ozs7a0ZBRzlEVCxzREFBVztnQkFBQ21CLEVBQUUsRUFBRSxDQUFDO29CQUFDQyxjQUFjLEVBQUUsQ0FBYztnQkFBQyxDQUFDOzs7Ozs7Ozt5RkFDaERqQixpREFBTTt3QkFBQ1ksT0FBTyxFQUFDLENBQVU7d0JBQUNNLEtBQUssRUFBQyxDQUFTO3dCQUFDQyxPQUFPLEVBQUUsUUFBUTs0QkFBRmYsTUFBTSxDQUFOQSxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7a0NBQUcsQ0FBSzs7eUZBQ3pFSixpREFBRTt3QkFBQ1ksT0FBTyxFQUFDLENBQVU7d0JBQUNNLEtBQUssRUFBQyxDQUFTO3dCQUFDQyxPQUFPLEVBQUUsUUFBUTs0QkFBRmYsTUFBTSxDQUFOQSxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7a0NBQUcsQ0FBSzs7Ozs7O0FBSXRGLENBQUM7R0ExQllILGdCQUFnQjtLQUFoQkEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ZvdG9nYWxsZXJ5L2ZvdG9nYWxsZXJ5X2xpc3QuanM/N2Y4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkLCBDYXJkTWVkaWEsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZvdG9nYWxsZXJ5X2xpc3QgPSAoeyBmb3RvZ2FsbGVyeV9kYXRhIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBuZXh0PSgpPT57XHJcbiAgICBpZihjdXJyZW50IDwgZm90b2dhbGxlcnlfZGF0YS5sZW5ndGgpXHJcbiAgICAgIHNldEN1cnJlbnQoYz0+YysxKVxyXG4gICAgZWxzZSBzZXRDdXJyZW50KDApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkTWVkaWEgY29tcG9uZW50PVwiaW1nXCIgaW1hZ2U9e2ZvdG9nYWxsZXJ5X2RhdGFbY3VycmVudF0ubWVkaWF9IC8+XHJcbiAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cInBcIiBjb21wb25lbnQ9XCJkaXZcIiBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgIHtmb3RvZ2FsbGVyeV9kYXRhW2N1cnJlbnRdLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cInBcIiBjb21wb25lbnQ9XCJkaXZcIiBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgIHtgJHtmb3RvZ2FsbGVyeV9kYXRhW2N1cnJlbnRdLmlkfS8ke2ZvdG9nYWxsZXJ5X2RhdGEubGVuZ3RofWB9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIgfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3N1Y2Nlc3MnIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnQoMCl9PtC/0YDQtdC0LjwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdzdWNjZXNzJyBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50KDEpfT7RgdC70LXQtC48L0J1dHRvbj5cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDYXJkIiwiQ2FyZE1lZGlhIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJGb3RvZ2FsbGVyeV9saXN0IiwiZm90b2dhbGxlcnlfZGF0YSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwibmV4dCIsImxlbmd0aCIsImMiLCJjb21wb25lbnQiLCJpbWFnZSIsIm1lZGlhIiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsImFsaWduIiwiZGVzY3JpcHRpb24iLCJpZCIsInN4IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/fotogallery/fotogallery_list.js\n");

/***/ })

});