"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/student-webapp/profile",{

/***/ "./src/components/common/inputs/text-field/TextField.tsx":
/*!***************************************************************!*\
  !*** ./src/components/common/inputs/text-field/TextField.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var app_repo_common_pkg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app-repo-common-pkg */ \"./node_modules/app-repo-common-pkg/lib/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst TextField = (param)=>{\n    let { value , labelText , onChange , placeholder , additionalClassName , rest  } = param;\n    _s();\n    const { isMobile , isTab  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(app_repo_common_pkg__WEBPACK_IMPORTED_MODULE_1__.DeviceContext);\n    const { register  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({\n        criteriaMode: \"all\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-fields\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"profile-label\",\n                children: labelText\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/work-directory/repository/student-web-app/src/components/common/inputs/text-field/TextField.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: value,\n                className: `profile-input ${additionalClassName ? additionalClassName : \"\"}`,\n                placeholder: placeholder,\n                type: \"text\",\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/work-directory/repository/student-web-app/src/components/common/inputs/text-field/TextField.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/work-directory/repository/student-web-app/src/components/common/inputs/text-field/TextField.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TextField, \"2em1sgaTRCTRIv4efyLT1L3SUxw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm\n    ];\n});\n_c = TextField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextField);\nvar _c;\n$RefreshReg$(_c, \"TextField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vaW5wdXRzL3RleHQtZmllbGQvVGV4dEZpZWxkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQW9EO0FBQ2pCO0FBQ087QUFHMUMsTUFBTUcsWUFBWSxTQWFaO1FBYmEsRUFDakJDLE1BQUssRUFDTEMsVUFBUyxFQUNUQyxTQUFRLEVBQ1JDLFlBQVcsRUFDWEMsb0JBQW1CLEVBQ25CQyxLQUFJLEVBT0w7O0lBQ0MsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRSxHQUFRVixpREFBVUEsQ0FBQ0QsOERBQWFBO0lBQ3pELE1BQU0sRUFBRVksU0FBUSxFQUFFLEdBQUdWLHdEQUFPQSxDQUFDO1FBQzNCVyxjQUFjO0lBQ2hCO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTswQkFBaUJWOzs7Ozs7MEJBQ2pDLDhEQUFDWTtnQkFDQ2IsT0FBT0E7Z0JBQ1BXLFdBQVcsQ0FBQyxjQUFjLEVBQ3hCUCxzQkFBc0JBLHNCQUFzQixFQUFFLENBQy9DLENBQUM7Z0JBQ0ZELGFBQWFBO2dCQUNiVyxNQUFNO2dCQUNOWixVQUFVQTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBaENNSDs7UUFlaUJELG9EQUFPQTs7O0tBZnhCQztBQWtDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vaW5wdXRzL3RleHQtZmllbGQvVGV4dEZpZWxkLnRzeD84N2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmljZUNvbnRleHQgfSBmcm9tIFwiYXBwLXJlcG8tY29tbW9uLXBrZ1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IGdldENhcGl0YWxpemVkU3RyaW5nLCBnZXRWYWxpZGF0aW9uRXJyTXNnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlclwiO1xuXG5jb25zdCBUZXh0RmllbGQgPSAoe1xuICB2YWx1ZSxcbiAgbGFiZWxUZXh0LFxuICBvbkNoYW5nZSxcbiAgcGxhY2Vob2xkZXIsXG4gIGFkZGl0aW9uYWxDbGFzc05hbWUsXG4gIHJlc3Rcbn06IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWxUZXh0OiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiBhbnk7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcbn0pID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSwgaXNUYWIgfTogYW55ID0gdXNlQ29udGV4dChEZXZpY2VDb250ZXh0KTtcbiAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybSh7XG4gICAgY3JpdGVyaWFNb2RlOiBcImFsbFwiLFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZmllbGRzXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLWxhYmVsXCI+e2xhYmVsVGV4dH08L3NwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9e2Bwcm9maWxlLWlucHV0ICR7XG4gICAgICAgICAgYWRkaXRpb25hbENsYXNzTmFtZSA/IGFkZGl0aW9uYWxDbGFzc05hbWUgOiBcIlwiXG4gICAgICAgIH1gfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkO1xuIl0sIm5hbWVzIjpbIkRldmljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRm9ybSIsIlRleHRGaWVsZCIsInZhbHVlIiwibGFiZWxUZXh0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImFkZGl0aW9uYWxDbGFzc05hbWUiLCJyZXN0IiwiaXNNb2JpbGUiLCJpc1RhYiIsInJlZ2lzdGVyIiwiY3JpdGVyaWFNb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImlucHV0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/inputs/text-field/TextField.tsx\n"));

/***/ })

});