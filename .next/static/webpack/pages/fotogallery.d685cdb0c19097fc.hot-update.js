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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fotogallery_list\": function() { return /* binding */ Fotogallery_list; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Fotogallery_list = function(param) {\n    var fotogallery_data = param.fotogallery_data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        __source: {\n            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {\n                component: \"img\",\n                height: \"\",\n                image: fotogallery_data[current].media,\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        gutterBottom: true,\n                        variant: \"p\",\n                        component: \"div\",\n                        align: \"center\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: fotogallery_data[current].description\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        gutterBottom: true,\n                        variant: \"p\",\n                        component: \"div\",\n                        align: \"center\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"\".concat(fotogallery_data[current].id, \"/\").concat(fotogallery_data.length)\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardActions, {\n                sx: {\n                    justifyContent: \"space-around\"\n                },\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"outlined\",\n                        color: \"success\",\n                        onClick: function() {\n                            return setCurrent(0);\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: \"пред.\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"outlined\",\n                        color: \"success\",\n                        onClick: function() {\n                            return setCurrent(1);\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\fotogallery\\\\fotogallery_list.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: \"след.\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Fotogallery_list, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Fotogallery_list;\nvar _c;\n$RefreshReg$(_c, \"Fotogallery_list\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb3RvZ2FsbGVyeS9mb3RvZ2FsbGVyeV9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2tFOzs7QUFHM0YsR0FBSyxDQUFDUSxnQkFBZ0IsR0FBRyxRQUFRLFFBQWtCLENBQUM7UUFBeEJDLGdCQUFnQixTQUFoQkEsZ0JBQWdCOztJQUVqRCxHQUFLLENBQXlCVCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ1UsT0FBTyxHQUFnQlYsR0FBVyxLQUF6QlcsVUFBVSxHQUFJWCxHQUFXO0lBRXpDLE1BQU0sdUVBQ0RFLCtDQUFJOzs7Ozs7OztpRkFDRkMsb0RBQVM7Z0JBQUNTLFNBQVMsRUFBQyxDQUFLO2dCQUFDQyxNQUFNLEVBQUMsQ0FBRTtnQkFBQ0MsS0FBSyxFQUFFTCxnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFFSyxLQUFLOzs7Ozs7OztrRkFDMUVWLHNEQUFXOzs7Ozs7Ozt5RkFDVEMscURBQVU7d0JBQUNVLFlBQVk7d0JBQUNDLE9BQU8sRUFBQyxDQUFHO3dCQUFDTCxTQUFTLEVBQUMsQ0FBSzt3QkFBQ00sS0FBSyxFQUFDLENBQVE7Ozs7Ozs7a0NBQ2hFVCxnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFFUyxXQUFXOzt5RkFFdkNiLHFEQUFVO3dCQUFDVSxZQUFZO3dCQUFDQyxPQUFPLEVBQUMsQ0FBRzt3QkFBQ0wsU0FBUyxFQUFDLENBQUs7d0JBQUNNLEtBQUssRUFBQyxDQUFROzs7Ozs7O2tDQUMvRCxHQUFrQ1QsTUFBdUIsQ0FBdkRBLGdCQUFnQixDQUFDQyxPQUFPLEVBQUVVLEVBQUUsRUFBQyxDQUFDLElBQTBCLE9BQXhCWCxnQkFBZ0IsQ0FBQ1ksTUFBTTs7OztrRkFHOURqQixzREFBVztnQkFBQ2tCLEVBQUUsRUFBRSxDQUFDQztvQkFBQUEsY0FBYyxFQUFDLENBQWM7Z0JBQUEsQ0FBQzs7Ozs7Ozs7eUZBQzNDaEIsaURBQU07d0JBQUNVLE9BQU8sRUFBQyxDQUFVO3dCQUFDTyxLQUFLLEVBQUMsQ0FBUzt3QkFBQ0MsT0FBTyxFQUFFLFFBQVE7NEJBQUZkLE1BQU0sQ0FBTkEsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7O2tDQUFHLENBQUs7O3lGQUN6RUosaURBQUU7d0JBQUNVLE9BQU8sRUFBQyxDQUFVO3dCQUFDTyxLQUFLLEVBQUMsQ0FBUzt3QkFBQ0MsT0FBTyxFQUFFLFFBQVE7NEJBQUZkLE1BQU0sQ0FBTkEsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7O2tDQUFHLENBQUs7Ozs7OztBQUkxRixDQUFDO0dBckJZSCxnQkFBZ0I7S0FBaEJBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mb3RvZ2FsbGVyeS9mb3RvZ2FsbGVyeV9saXN0LmpzPzdmODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQ2FyZCwgQ2FyZE1lZGlhLCBDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBGb3RvZ2FsbGVyeV9saXN0ID0gKHsgZm90b2dhbGxlcnlfZGF0YSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDYXJkTWVkaWEgY29tcG9uZW50PVwiaW1nXCIgaGVpZ2h0PScnIGltYWdlPXtmb3RvZ2FsbGVyeV9kYXRhW2N1cnJlbnRdLm1lZGlhfSAvPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwicFwiIGNvbXBvbmVudD1cImRpdlwiIGFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICB7Zm90b2dhbGxlcnlfZGF0YVtjdXJyZW50XS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwicFwiIGNvbXBvbmVudD1cImRpdlwiIGFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICB7YCR7Zm90b2dhbGxlcnlfZGF0YVtjdXJyZW50XS5pZH0vJHtmb3RvZ2FsbGVyeV9kYXRhLmxlbmd0aH1gfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPENhcmRBY3Rpb25zIHN4PXt7anVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0nc3VjY2Vzcycgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudCgwKX0+0L/RgNC10LQuPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdzdWNjZXNzJyBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50KDEpfT7RgdC70LXQtC48L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQm94IiwiQ2FyZCIsIkNhcmRNZWRpYSIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiRm90b2dhbGxlcnlfbGlzdCIsImZvdG9nYWxsZXJ5X2RhdGEiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImNvbXBvbmVudCIsImhlaWdodCIsImltYWdlIiwibWVkaWEiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiYWxpZ24iLCJkZXNjcmlwdGlvbiIsImlkIiwibGVuZ3RoIiwic3giLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/fotogallery/fotogallery_list.js\n");

/***/ })

});