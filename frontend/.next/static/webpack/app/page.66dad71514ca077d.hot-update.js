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

/***/ "(app-pages-browser)/./app/components/Pagination.tsx":
/*!***************************************!*\
  !*** ./app/components/Pagination.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ \"(app-pages-browser)/./app/styles.css\");\n\n\nconst Pagination = (param)=>{\n    let { currPage, setCurrPage, pagesRange, maxPage } = param;\n    const handlePageChange = (page)=>{\n        maxPage >= page && setCurrPage(page);\n    };\n    const handleArrowClick = (direction)=>{\n        if (direction === \"left\") {\n            handlePageChange(currPage - 1);\n        } else {\n            handlePageChange(currPage + 1);\n        }\n    };\n    const handleEdge = (edge)=>{\n        if (edge === \"first\") {\n            handlePageChange(1);\n        } else {\n            handlePageChange(maxPage);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pagination\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>currPage !== 1 && handleEdge(\"first\"),\n                name: \"first\",\n                children: \"first\"\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/Pagination.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>currPage !== 1 && handleArrowClick(\"left\"),\n                name: \"previous\",\n                children: \"\\xab\"\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/Pagination.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            pagesRange.map((i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handlePageChange(i),\n                    className: i === currPage ? \"current\" : \"\",\n                    name: \"page-\" + currPage,\n                    children: i\n                }, i, false, {\n                    fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/Pagination.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>currPage === maxPage && handleArrowClick(),\n                name: \"next\",\n                children: \"\\xbb\"\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/Pagination.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>currPage === maxPage && handleEdge(\"last\"),\n                name: \"last\",\n                children: \"last\"\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/Pagination.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/components/Pagination.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFFdUI7QUFFdkIsTUFBTUEsYUFBYTtRQUFDLEVBQ2xCQyxRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsVUFBVSxFQUNWQyxPQUFPLEVBTVI7SUFDQyxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEJGLFdBQVdFLFFBQVFKLFlBQVlJO0lBQ2pDO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDO1FBQ3hCLElBQUlBLGNBQWMsUUFBUTtZQUN4QkgsaUJBQWlCSixXQUFXO1FBQzlCLE9BQU87WUFDTEksaUJBQWlCSixXQUFXO1FBQzlCO0lBQ0Y7SUFDQSxNQUFNUSxhQUFhLENBQUNDO1FBQ2xCLElBQUlBLFNBQVMsU0FBUztZQUNwQkwsaUJBQWlCO1FBQ25CLE9BQU87WUFDTEEsaUJBQWlCRDtRQUNuQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsU0FBUyxJQUFNYixhQUFhLEtBQUtRLFdBQVc7Z0JBQzVDTSxNQUFLOzBCQUNOOzs7Ozs7MEJBSUQsOERBQUNGO2dCQUNDQyxTQUFTLElBQU1iLGFBQWEsS0FBS00saUJBQWlCO2dCQUNsRFEsTUFBSzswQkFDTjs7Ozs7O1lBR0FaLFdBQVdhLEdBQUcsQ0FBQyxDQUFDQyxrQkFDZiw4REFBQ0o7b0JBRUNDLFNBQVMsSUFBTVQsaUJBQWlCWTtvQkFDaENMLFdBQVdLLE1BQU1oQixXQUFXLFlBQVk7b0JBQ3hDYyxNQUFNLFVBQVVkOzhCQUVmZ0I7bUJBTElBOzs7OzswQkFRVCw4REFBQ0o7Z0JBQ0NDLFNBQVMsSUFBTWIsYUFBYUcsV0FBV0c7Z0JBQ3ZDUSxNQUFLOzBCQUNOOzs7Ozs7MEJBR0QsOERBQUNGO2dCQUNDQyxTQUFTLElBQU1iLGFBQWFHLFdBQVdLLFdBQVc7Z0JBQ2xETSxNQUFLOzBCQUNOOzs7Ozs7Ozs7Ozs7QUFLUDtLQXJFTWY7QUF1RU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGFnaW5hdGlvbi50c3g/ZjcxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgUGFnaW5hdGlvbiA9ICh7XG4gIGN1cnJQYWdlLFxuICBzZXRDdXJyUGFnZSxcbiAgcGFnZXNSYW5nZSxcbiAgbWF4UGFnZSxcbn06IHtcbiAgY3VyclBhZ2U6IG51bWJlcjtcbiAgc2V0Q3VyclBhZ2U6IGFueTtcbiAgcGFnZXNSYW5nZTogbnVtYmVyW107XG4gIG1heFBhZ2U6IG51bWJlcjtcbn0pID0+IHtcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBtYXhQYWdlID49IHBhZ2UgJiYgc2V0Q3VyclBhZ2UocGFnZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXJyb3dDbGljayA9IChkaXJlY3Rpb24/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgaGFuZGxlUGFnZUNoYW5nZShjdXJyUGFnZSAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVQYWdlQ2hhbmdlKGN1cnJQYWdlICsgMSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVFZGdlID0gKGVkZ2U6IHN0cmluZykgPT4ge1xuICAgIGlmIChlZGdlID09PSBcImZpcnN0XCIpIHtcbiAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UobWF4UGFnZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGN1cnJQYWdlICE9PSAxICYmIGhhbmRsZUVkZ2UoXCJmaXJzdFwiKX1cbiAgICAgICAgbmFtZT1cImZpcnN0XCJcbiAgICAgID5cbiAgICAgICAgZmlyc3RcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGN1cnJQYWdlICE9PSAxICYmIGhhbmRsZUFycm93Q2xpY2soXCJsZWZ0XCIpfVxuICAgICAgICBuYW1lPVwicHJldmlvdXNcIlxuICAgICAgPlxuICAgICAgICAmbGFxdW87XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtwYWdlc1JhbmdlLm1hcCgoaSkgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UoaSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpID09PSBjdXJyUGFnZSA/IFwiY3VycmVudFwiIDogXCJcIn1cbiAgICAgICAgICBuYW1lPXtcInBhZ2UtXCIgKyBjdXJyUGFnZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBjdXJyUGFnZSA9PT0gbWF4UGFnZSAmJiBoYW5kbGVBcnJvd0NsaWNrKCl9XG4gICAgICAgIG5hbWU9XCJuZXh0XCJcbiAgICAgID5cbiAgICAgICAgJnJhcXVvO1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGN1cnJQYWdlID09PSBtYXhQYWdlICYmIGhhbmRsZUVkZ2UoXCJsYXN0XCIpfVxuICAgICAgICBuYW1lPVwibGFzdFwiXG4gICAgICA+XG4gICAgICAgIGxhc3RcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwiY3VyclBhZ2UiLCJzZXRDdXJyUGFnZSIsInBhZ2VzUmFuZ2UiLCJtYXhQYWdlIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJoYW5kbGVBcnJvd0NsaWNrIiwiZGlyZWN0aW9uIiwiaGFuZGxlRWRnZSIsImVkZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwibmFtZSIsIm1hcCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Pagination.tsx\n"));

/***/ })

});