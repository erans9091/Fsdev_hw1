"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/AddPostForm.tsx":
/*!****************************************!*\
  !*** ./app/components/AddPostForm.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AddPostForm = (param)=>{\n    let { addPost, cancel_func } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [authorName, setAuthorName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [authorEmail, setAuthorEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const clearForm = ()=>{\n        setTitle(\"\");\n        setContent(\"\");\n        setAuthorName(\"\");\n        setAuthorEmail(\"\");\n    };\n    const validateForm = ()=>{\n        return title && content && authorName && authorEmail;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!validateForm()) return;\n        addPost({\n            title,\n            content,\n            author: {\n                name: authorName,\n                email: authorEmail\n            }\n        });\n        clearForm();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"add-post-form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Add a new note\"\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Title:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                name: \"text_input_new_note\"\n                            }, void 0, false, {\n                                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Content:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: content,\n                                onChange: (e)=>setContent(e.target.value),\n                                name: \"text_input_new_note\"\n                            }, void 0, false, {\n                                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Author name:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: authorName,\n                                onChange: (e)=>setAuthorName(e.target.value),\n                                name: \"text_input_new_note\"\n                            }, void 0, false, {\n                                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Author email:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: authorEmail,\n                                onChange: (e)=>setAuthorEmail(e.target.value),\n                                name: \"text_input_new_note\"\n                            }, void 0, false, {\n                                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        name: \"text_input_save_new_note\",\n                        children: \"save\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: cancel_func,\n                        name: \"text_input_cancel_new_note\",\n                        children: \"cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/AddPostForm.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddPostForm, \"ngSmDW9kZXhKR1th/BkxuYsUhi8=\");\n_c = AddPostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddPostForm);\nvar _c;\n$RefreshReg$(_c, \"AddPostForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FkZFBvc3RGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFJNUMsTUFBTUMsY0FBYztRQUFDLEVBQ25CQyxPQUFPLEVBQ1BDLFdBQVcsRUFJWjs7SUFDQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVksWUFBWTtRQUNoQlAsU0FBUztRQUNURSxXQUFXO1FBQ1hFLGNBQWM7UUFDZEUsZUFBZTtJQUNqQjtJQUVBLE1BQU1FLGVBQWU7UUFDbkIsT0FBT1QsU0FBU0UsV0FBV0UsY0FBY0U7SUFDM0M7SUFFQSxNQUFNSSxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUksQ0FBQ0gsZ0JBQWdCO1FBQ3JCWCxRQUFRO1lBQ05FO1lBQ0FFO1lBQ0FXLFFBQVE7Z0JBQ05DLE1BQU1WO2dCQUNOVyxPQUFPVDtZQUNUO1FBQ0Y7UUFDQUU7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVWOztrQ0FDZCw4REFBQ1c7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsT0FBT3hCO2dDQUNQeUIsVUFBVSxDQUFDZCxJQUFNVixTQUFTVSxFQUFFZSxNQUFNLENBQUNGLEtBQUs7Z0NBQ3hDVixNQUFLOzs7Ozs7Ozs7Ozs7a0NBR1QsOERBQUNPOzs0QkFBTTswQ0FFTCw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE9BQU90QjtnQ0FDUHVCLFVBQVUsQ0FBQ2QsSUFBTVIsV0FBV1EsRUFBRWUsTUFBTSxDQUFDRixLQUFLO2dDQUMxQ1YsTUFBSzs7Ozs7Ozs7Ozs7O2tDQUdULDhEQUFDTzs7NEJBQU07MENBRUwsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPcEI7Z0NBQ1BxQixVQUFVLENBQUNkLElBQU1OLGNBQWNNLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDN0NWLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FHVCw4REFBQ087OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsT0FBT2xCO2dDQUNQbUIsVUFBVSxDQUFDZCxJQUFNSixlQUFlSSxFQUFFZSxNQUFNLENBQUNGLEtBQUs7Z0NBQzlDVixNQUFLOzs7Ozs7Ozs7Ozs7a0NBR1QsOERBQUNhO3dCQUFPSixNQUFLO3dCQUFTVCxNQUFLO2tDQUEyQjs7Ozs7O2tDQUd0RCw4REFBQ2E7d0JBQU9DLFNBQVM3Qjt3QkFBYWUsTUFBSztrQ0FBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RTtHQXZGTWpCO0tBQUFBO0FBeUZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0FkZFBvc3RGb3JtLnRzeD9hMDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUG9zdFBhcmFtcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBBZGRQb3N0Rm9ybSA9ICh7XG4gIGFkZFBvc3QsXG4gIGNhbmNlbF9mdW5jLFxufToge1xuICBhZGRQb3N0OiAocG9zdDogUG9zdFBhcmFtcykgPT4gdm9pZDtcbiAgY2FuY2VsX2Z1bmM6IGFueTtcbn0pID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthdXRob3JOYW1lLCBzZXRBdXRob3JOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXV0aG9yRW1haWwsIHNldEF1dGhvckVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgICBzZXRUaXRsZShcIlwiKTtcbiAgICBzZXRDb250ZW50KFwiXCIpO1xuICAgIHNldEF1dGhvck5hbWUoXCJcIik7XG4gICAgc2V0QXV0aG9yRW1haWwoXCJcIik7XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xuICAgIHJldHVybiB0aXRsZSAmJiBjb250ZW50ICYmIGF1dGhvck5hbWUgJiYgYXV0aG9yRW1haWw7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghdmFsaWRhdGVGb3JtKCkpIHJldHVybjtcbiAgICBhZGRQb3N0KHtcbiAgICAgIHRpdGxlLFxuICAgICAgY29udGVudCxcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBuYW1lOiBhdXRob3JOYW1lLFxuICAgICAgICBlbWFpbDogYXV0aG9yRW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNsZWFyRm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtcG9zdC1mb3JtXCI+XG4gICAgICA8aDI+QWRkIGEgbmV3IG5vdGU8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBUaXRsZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgbmFtZT1cInRleHRfaW5wdXRfbmV3X25vdGVcIlxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgQ29udGVudDpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG5hbWU9XCJ0ZXh0X2lucHV0X25ld19ub3RlXCJcbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEF1dGhvciBuYW1lOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2F1dGhvck5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvck5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgbmFtZT1cInRleHRfaW5wdXRfbmV3X25vdGVcIlxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgQXV0aG9yIGVtYWlsOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2F1dGhvckVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3JFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBuYW1lPVwidGV4dF9pbnB1dF9uZXdfbm90ZVwiXG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJ0ZXh0X2lucHV0X3NhdmVfbmV3X25vdGVcIj5cbiAgICAgICAgICBzYXZlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NhbmNlbF9mdW5jfSBuYW1lPVwidGV4dF9pbnB1dF9jYW5jZWxfbmV3X25vdGVcIj5cbiAgICAgICAgICBjYW5jZWxcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRQb3N0Rm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFkZFBvc3RGb3JtIiwiYWRkUG9zdCIsImNhbmNlbF9mdW5jIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYXV0aG9yTmFtZSIsInNldEF1dGhvck5hbWUiLCJhdXRob3JFbWFpbCIsInNldEF1dGhvckVtYWlsIiwiY2xlYXJGb3JtIiwidmFsaWRhdGVGb3JtIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXV0aG9yIiwibmFtZSIsImVtYWlsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AddPostForm.tsx\n"));

/***/ })

});