"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/dashboard-navbar.js":
/*!********************************************!*\
  !*** ./src/components/dashboard-navbar.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DashboardNavbar\": function() { return /* binding */ DashboardNavbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {\n    };\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {\n    };\n    var target = {\n    };\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\nvar DashboardNavbarRoot = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar)(function(param) {\n    var theme = param.theme;\n    return {\n        backgroundColor: theme.palette.background.paper,\n        boxShadow: theme.shadows[3]\n    };\n});\n_c = DashboardNavbarRoot;\nvar DashboardNavbar = function(props) {\n    var onSidebarOpen = props.onSidebarOpen, other = _objectWithoutProperties(props, [\n        \"onSidebarOpen\"\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardNavbarRoot, _objectSpread({\n            sx: {\n                left: {\n                    lg: 280\n                },\n                width: {\n                    lg: 'calc(100% - 280px)'\n                }\n            }\n        }, other, {\n            __source: {\n                fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {\n                disableGutters: true,\n                sx: {\n                    minHeight: 64,\n                    left: 0,\n                    px: 2\n                },\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                        onClick: onSidebarOpen,\n                        sx: {\n                            display: {\n                                xs: 'inline-flex',\n                                lg: 'none'\n                            }\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            fontSize: \"small\",\n                            __source: {\n                                fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                        variant: \"p\",\n                        sx: {\n                            color: \"black\",\n                            textAlign: 'start',\n                            marginLeft: '5vw',\n                            paddingBottom: '7px'\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"ИГУ им. К. Тыныстанова\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        sx: {\n                            flexGrow: 1\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                        sx: {\n                            height: 40,\n                            width: 40,\n                            ml: 1\n                        },\n                        src: \"/static/images/avatars/igu_logo.jpg\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        }))\n    }));\n};\n\n_c1 = DashboardNavbar;\nDashboardNavbar.propTypes = {\n    onSidebarOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardNavbarRoot\");\n$RefreshReg$(_c1, \"DashboardNavbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQtbmF2YmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDRTtBQUNnRDtBQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxHQUFLLENBQUNTLG1CQUFtQixHQUFHUiwyREFBTSxDQUFDQyxpREFBTSxFQUFFLFFBQVE7UUFBTFEsS0FBSyxTQUFMQSxLQUFLO0lBQU8sTUFDeERDLENBRHlELENBQUM7UUFDMURBLGVBQWUsRUFBRUQsS0FBSyxDQUFDRSxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSztRQUMvQ0MsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7O0tBSEtQLG1CQUFtQjtJQUtaUSxlQUFlLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztJQUN6QyxHQUFLLENBQUdDLGFBQWEsR0FBZUQsS0FBSyxDQUFqQ0MsYUFBYSxFQUFLQyxLQUFLLDRCQUFLRixLQUFLO1FBQWpDQyxDQUFhOztJQUVyQixNQUFNO3VGQUVEVixtQkFBbUI7WUFDbEJZLEVBQUUsRUFBRSxDQUFDO2dCQUNIQyxJQUFJLEVBQUUsQ0FBQztvQkFDTEMsRUFBRSxFQUFFLEdBQUc7Z0JBQ1QsQ0FBQztnQkFDREMsS0FBSyxFQUFFLENBQUM7b0JBQ05ELEVBQUUsRUFBRSxDQUFvQjtnQkFDMUIsQ0FBQztZQUNILENBQUM7V0FDR0gsS0FBSzs7Ozs7Ozs0RkFDUmQsa0RBQU87Z0JBQ05tQixjQUFjO2dCQUNkSixFQUFFLEVBQUUsQ0FBQztvQkFDSEssU0FBUyxFQUFFLEVBQUU7b0JBQ2JKLElBQUksRUFBRSxDQUFDO29CQUNQSyxFQUFFLEVBQUUsQ0FBQztnQkFDUCxDQUFDOzs7Ozs7Ozt5RkFFQXRCLHFEQUFVO3dCQUNUdUIsT0FBTyxFQUFFVCxhQUFhO3dCQUN0QkUsRUFBRSxFQUFFLENBQUM7NEJBQ0hRLE9BQU8sRUFBRSxDQUFDO2dDQUNSQyxFQUFFLEVBQUUsQ0FBYTtnQ0FDakJQLEVBQUUsRUFBRSxDQUFNOzRCQUNaLENBQUM7d0JBQ0gsQ0FBQzs7Ozs7Ozt1R0FFQWYsZ0VBQVE7NEJBQUN1QixRQUFRLEVBQUMsQ0FBTzs7Ozs7Ozs7O3lGQUUzQnhCLHFEQUFVO3dCQUFDeUIsT0FBTyxFQUFDLENBQUc7d0JBQUNYLEVBQUUsRUFBRSxDQUFDOzRCQUFDWSxLQUFLLEVBQUUsQ0FBTzs0QkFBRUMsU0FBUyxFQUFFLENBQU87NEJBQUVDLFVBQVUsRUFBRSxDQUFLOzRCQUFFQyxhQUFhLEVBQUUsQ0FBSzt3QkFBQyxDQUFDOzs7Ozs7O2tDQUFFLENBQXNCOzt5RkFDbEloQyw4Q0FBRzt3QkFBQ2lCLEVBQUUsRUFBRSxDQUFDOzRCQUFDZ0IsUUFBUSxFQUFFLENBQUM7d0JBQUMsQ0FBQzs7Ozs7Ozs7eUZBQ3ZCbEMsaURBQU07d0JBQUNrQixFQUFFLEVBQUUsQ0FBQzs0QkFBQ2lCLE1BQU0sRUFBRSxFQUFFOzRCQUFFZCxLQUFLLEVBQUUsRUFBRTs0QkFBRWUsRUFBRSxFQUFFLENBQUM7d0JBQUMsQ0FBQzt3QkFDMUNDLEdBQUcsRUFBQyxDQUFxQzs7Ozs7Ozs7Ozs7O0FBT3JELENBQUM7QUE1Q0s7TUFBT3ZCLGVBQWU7QUE4QzVCQSxlQUFlLENBQUN3QixTQUFTLEdBQUcsQ0FBQztJQUMzQnRCLGFBQWEsRUFBRW5CLHdEQUFjO0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkLW5hdmJhci5qcz80MWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgQXBwQmFyLCBBdmF0YXIsIEJveCwgSWNvbkJ1dHRvbiwgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuXHJcbmNvbnN0IERhc2hib2FyZE5hdmJhclJvb3QgPSBzdHlsZWQoQXBwQmFyKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1szXVxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkTmF2YmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBvblNpZGViYXJPcGVuLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGFzaGJvYXJkTmF2YmFyUm9vdFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgIGxnOiAyODBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB3aWR0aDoge1xyXG4gICAgICAgICAgICBsZzogJ2NhbGMoMTAwJSAtIDI4MHB4KSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAgIHsuLi5vdGhlcn0+XHJcbiAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgIGRpc2FibGVHdXR0ZXJzXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IDY0LFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICBweDogMlxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblNpZGViYXJPcGVufVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHtcclxuICAgICAgICAgICAgICAgIHhzOiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgICAgICAgICAgbGc6ICdub25lJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0ncCcgc3g9e3sgY29sb3I6IFwiYmxhY2tcIiwgdGV4dEFsaWduOiAnc3RhcnQnLCBtYXJnaW5MZWZ0OiAnNXZ3JywgcGFkZGluZ0JvdHRvbTogJzdweCcgfX0+0JjQk9CjINC40LwuINCaLiDQotGL0L3Ri9GB0YLQsNC90L7QstCwPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fSAvPlxyXG4gICAgICAgICAgPEF2YXRhciBzeD17eyBoZWlnaHQ6IDQwLCB3aWR0aDogNDAsIG1sOiAxIH19XHJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhcnMvaWd1X2xvZ28uanBnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9EYXNoYm9hcmROYXZiYXJSb290PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkRhc2hib2FyZE5hdmJhci5wcm9wVHlwZXMgPSB7XHJcbiAgb25TaWRlYmFyT3BlbjogUHJvcFR5cGVzLmZ1bmNcclxufTsiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwic3R5bGVkIiwiQXBwQmFyIiwiQXZhdGFyIiwiQm94IiwiSWNvbkJ1dHRvbiIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiTWVudUljb24iLCJEYXNoYm9hcmROYXZiYXJSb290IiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsIkRhc2hib2FyZE5hdmJhciIsInByb3BzIiwib25TaWRlYmFyT3BlbiIsIm90aGVyIiwic3giLCJsZWZ0IiwibGciLCJ3aWR0aCIsImRpc2FibGVHdXR0ZXJzIiwibWluSGVpZ2h0IiwicHgiLCJvbkNsaWNrIiwiZGlzcGxheSIsInhzIiwiZm9udFNpemUiLCJ2YXJpYW50IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0JvdHRvbSIsImZsZXhHcm93IiwiaGVpZ2h0IiwibWwiLCJzcmMiLCJwcm9wVHlwZXMiLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/dashboard-navbar.js\n");

/***/ })

});