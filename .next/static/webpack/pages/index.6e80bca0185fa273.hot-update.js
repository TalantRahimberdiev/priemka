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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DashboardNavbar\": function() { return /* binding */ DashboardNavbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _icons_user_circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/user-circle */ \"./src/icons/user-circle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {\n    };\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {\n    };\n    var target = {\n    };\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\nvar DashboardNavbarRoot = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__.AppBar)(function(param) {\n    var theme = param.theme;\n    return {\n        backgroundColor: theme.palette.background.paper,\n        boxShadow: theme.shadows[3]\n    };\n});\n_c = DashboardNavbarRoot;\nvar DashboardNavbar = function(props) {\n    var onSidebarOpen = props.onSidebarOpen, other = _objectWithoutProperties(props, [\n        \"onSidebarOpen\"\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardNavbarRoot, _objectSpread({\n            sx: {\n                left: {\n                    lg: 280\n                },\n                width: {\n                    lg: 'calc(100% - 280px)'\n                }\n            }\n        }, other, {\n            __source: {\n                fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {\n                disableGutters: true,\n                sx: {\n                    minHeight: 64,\n                    left: 0,\n                    px: 2\n                },\n                __source: {\n                    fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                        onClick: onSidebarOpen,\n                        sx: {\n                            display: {\n                                xs: 'inline-flex',\n                                lg: 'none'\n                            }\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            fontSize: \"small\",\n                            __source: {\n                                fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"p\",\n                        sx: {\n                            color: \"black\",\n                            textAlign: 'start',\n                            marginLeft: '5vw',\n                            paddingBottom: '7px'\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"ИГУ им. К. Тыныстанова\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        sx: {\n                            flexGrow: 1\n                        },\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                        sx: {\n                            height: 40,\n                            width: 40,\n                            ml: 1\n                        },\n                        src: \"/static/images/avatars/igu_logo.jpg\",\n                        __source: {\n                            fileName: \"D:\\\\igu\\\\src\\\\components\\\\dashboard-navbar.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        }))\n    }));\n};\n\n_c1 = DashboardNavbar;\nDashboardNavbar.propTypes = {\n    onSidebarOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardNavbarRoot\");\n$RefreshReg$(_c1, \"DashboardNavbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQtbmF2YmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0U7QUFDZ0Q7QUFDckM7QUFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsR0FBSyxDQUFDVyxtQkFBbUIsR0FBR1YsMkRBQU0sQ0FBQ0MsaURBQU0sRUFBRSxRQUFRO1FBQUxVLEtBQUssU0FBTEEsS0FBSztJQUFPLE1BQ3hEQyxDQUR5RCxDQUFDO1FBQzFEQSxlQUFlLEVBQUVELEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxVQUFVLENBQUNDLEtBQUs7UUFDL0NDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDOztLQUhLUCxtQkFBbUI7SUFLWlEsZUFBZSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFDekMsR0FBSyxDQUFHQyxhQUFhLEdBQWVELEtBQUssQ0FBakNDLGFBQWEsRUFBS0MsS0FBSyw0QkFBS0YsS0FBSztRQUFqQ0MsQ0FBYTs7SUFFckIsTUFBTTt1RkFFRFYsbUJBQW1CO1lBQ2xCWSxFQUFFLEVBQUUsQ0FBQztnQkFDSEMsSUFBSSxFQUFFLENBQUM7b0JBQ0xDLEVBQUUsRUFBRSxHQUFHO2dCQUNULENBQUM7Z0JBQ0RDLEtBQUssRUFBRSxDQUFDO29CQUNORCxFQUFFLEVBQUUsQ0FBb0I7Z0JBQzFCLENBQUM7WUFDSCxDQUFDO1dBQ0dILEtBQUs7Ozs7Ozs7NEZBQ1JoQixrREFBTztnQkFDTnFCLGNBQWM7Z0JBQ2RKLEVBQUUsRUFBRSxDQUFDO29CQUNISyxTQUFTLEVBQUUsRUFBRTtvQkFDYkosSUFBSSxFQUFFLENBQUM7b0JBQ1BLLEVBQUUsRUFBRSxDQUFDO2dCQUNQLENBQUM7Ozs7Ozs7O3lGQUVBeEIscURBQVU7d0JBQ1R5QixPQUFPLEVBQUVULGFBQWE7d0JBQ3RCRSxFQUFFLEVBQUUsQ0FBQzs0QkFDSFEsT0FBTyxFQUFFLENBQUM7Z0NBQ1JDLEVBQUUsRUFBRSxDQUFhO2dDQUNqQlAsRUFBRSxFQUFFLENBQU07NEJBQ1osQ0FBQzt3QkFDSCxDQUFDOzs7Ozs7O3VHQUVBakIsZ0VBQVE7NEJBQUN5QixRQUFRLEVBQUMsQ0FBTzs7Ozs7Ozs7O3lGQUUzQjFCLHFEQUFVO3dCQUFDMkIsT0FBTyxFQUFDLENBQUc7d0JBQUNYLEVBQUUsRUFBRSxDQUFDOzRCQUFDWSxLQUFLLEVBQUUsQ0FBTzs0QkFBRUMsU0FBUyxFQUFFLENBQU87NEJBQUVDLFVBQVUsRUFBRSxDQUFLOzRCQUFFQyxhQUFhLEVBQUUsQ0FBSzt3QkFBQyxDQUFDOzs7Ozs7O2tDQUFFLENBQXNCOzt5RkFDbElsQyw4Q0FBRzt3QkFBQ21CLEVBQUUsRUFBRSxDQUFDOzRCQUFDZ0IsUUFBUSxFQUFFLENBQUM7d0JBQUMsQ0FBQzs7Ozs7Ozs7eUZBQ3ZCcEMsaURBQU07d0JBQUNvQixFQUFFLEVBQUUsQ0FBQ2lCOzRCQUFBQSxNQUFNLEVBQUUsRUFBRTs0QkFDbkJkLEtBQUssRUFBRSxFQUFFOzRCQUNUZSxFQUFFLEVBQUUsQ0FBQzt3QkFDUCxDQUFDO3dCQUNEQyxHQUFHLEVBQUMsQ0FBcUM7Ozs7Ozs7Ozs7OztBQU9yRCxDQUFDO0FBL0NLO01BQU92QixlQUFlO0FBaUQ1QkEsZUFBZSxDQUFDd0IsU0FBUyxHQUFHLENBQUM7SUFDM0J0QixhQUFhLEVBQUVyQix3REFBYztBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC1uYXZiYXIuanM/NDFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IEFwcEJhciwgQXZhdGFyLCBCb3gsIEljb25CdXR0b24sIFRvb2xiYXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCB7IFVzZXJDaXJjbGUgYXMgVXNlckNpcmNsZUljb24gfSBmcm9tICcuLi9pY29ucy91c2VyLWNpcmNsZSc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmROYXZiYXJSb290ID0gc3R5bGVkKEFwcEJhcikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbM11cclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhc2hib2FyZE5hdmJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgb25TaWRlYmFyT3BlbiwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPERhc2hib2FyZE5hdmJhclJvb3RcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgbGVmdDoge1xyXG4gICAgICAgICAgICBsZzogMjgwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgd2lkdGg6IHtcclxuICAgICAgICAgICAgbGc6ICdjYWxjKDEwMCUgLSAyODBweCknXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgICB7Li4ub3RoZXJ9PlxyXG4gICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICBkaXNhYmxlR3V0dGVyc1xyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiA2NCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgcHg6IDJcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17b25TaWRlYmFyT3Blbn1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB7XHJcbiAgICAgICAgICAgICAgICB4czogJ2lubGluZS1mbGV4JyxcclxuICAgICAgICAgICAgICAgIGxnOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3AnIHN4PXt7IGNvbG9yOiBcImJsYWNrXCIsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luTGVmdDogJzV2dycsIHBhZGRpbmdCb3R0b206ICc3cHgnIH19PtCY0JPQoyDQuNC8LiDQmi4g0KLRi9C90YvRgdGC0LDQvdC+0LLQsDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0gLz5cclxuICAgICAgICAgIDxBdmF0YXIgc3g9e3toZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgICAgICAgICBtbDogMVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9hdmF0YXJzL2lndV9sb2dvLmpwZ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvRGFzaGJvYXJkTmF2YmFyUm9vdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5EYXNoYm9hcmROYXZiYXIucHJvcFR5cGVzID0ge1xyXG4gIG9uU2lkZWJhck9wZW46IFByb3BUeXBlcy5mdW5jXHJcbn07Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsInN0eWxlZCIsIkFwcEJhciIsIkF2YXRhciIsIkJveCIsIkljb25CdXR0b24iLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIk1lbnVJY29uIiwiVXNlckNpcmNsZSIsIlVzZXJDaXJjbGVJY29uIiwiRGFzaGJvYXJkTmF2YmFyUm9vdCIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJEYXNoYm9hcmROYXZiYXIiLCJwcm9wcyIsIm9uU2lkZWJhck9wZW4iLCJvdGhlciIsInN4IiwibGVmdCIsImxnIiwid2lkdGgiLCJkaXNhYmxlR3V0dGVycyIsIm1pbkhlaWdodCIsInB4Iiwib25DbGljayIsImRpc3BsYXkiLCJ4cyIsImZvbnRTaXplIiwidmFyaWFudCIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luTGVmdCIsInBhZGRpbmdCb3R0b20iLCJmbGV4R3JvdyIsImhlaWdodCIsIm1sIiwic3JjIiwicHJvcFR5cGVzIiwiZnVuYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dashboard-navbar.js\n");

/***/ })

});