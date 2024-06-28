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

/***/ "(app-pages-browser)/./app/App.tsx":
/*!*********************!*\
  !*** ./app/App.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Page */ \"(app-pages-browser)/./app/components/Page.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Pagination */ \"(app-pages-browser)/./app/components/Pagination.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./app/components/Header.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import script from \"../../scripts/generateNotes\"\nconst App = ()=>{\n    _s();\n    //   console.log(script())\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currPage, setCurrPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPosts, setTotalPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [postsPerPage, setPostsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [reFetch, setReFetch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const NOTES_URL = \"http://localhost:3001/notes\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(NOTES_URL + \"?_page=\".concat(currPage) + \"&_limit=\".concat(postsPerPage)).then((res)=>{\n            // res.headers[\"x-total-count\"] &&     TODO?\n            setTotalPosts(+res.headers[\"x-total-count\"]);\n            setPosts(res.data // TODO sort?\n            );\n            console.log(res.data);\n        }).catch((error)=>{\n            console.log(\"Encountered an error:\" + error);\n        });\n    }, [\n        currPage,\n        postsPerPage,\n        reFetch\n    ]);\n    const calcPagesRange = ()=>{\n        const maxPage = Math.ceil(totalPosts / postsPerPage);\n        if (currPage <= 3) {\n            return Array.from({\n                length: Math.min(maxPage, 5)\n            }, (_, i)=>i + 1);\n        }\n        if (currPage > maxPage - 2) {\n            return [\n                maxPage - 4,\n                maxPage - 3,\n                maxPage - 2,\n                maxPage - 1,\n                maxPage\n            ];\n        }\n        return [\n            currPage - 2,\n            currPage - 1,\n            currPage,\n            currPage + 1,\n            currPage + 2\n        ];\n    };\n    const setPostsInPage = (numberOfPosts)=>{\n        setCurrPage(1);\n        setPostsPerPage(numberOfPosts);\n    };\n    // id: number,\n    // title: string,\n    // author: Author,\n    // content: string\n    const addPost = (post)=>{\n        const lastPage = Math.ceil(totalPosts / postsPerPage);\n        const updatePagination = currPage === lastPage || totalPosts % postsPerPage === 0 && (currPage === lastPage - 1 || currPage === lastPage - 2);\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(NOTES_URL, {\n            post\n        }).then((res)=>{\n            res.status === 201 && updatePagination && setTotalPosts(totalPosts + 1);\n            console.log(\"Post added successfully\", res.status);\n        }).catch((error)=>{\n            console.error(\"Error adding post:\", error);\n            return error.status;\n        });\n        return 0;\n    };\n    const updatePost = async (ith, post, thenf)=>{\n        const curith = postsPerPage * (currPage - 1) + ith;\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(NOTES_URL + \"/\" + curith, {\n            post\n        }).then(thenf).catch((error)=>console.error(\"Error updating post:\", error));\n    };\n    const deleteAction = async (ith)=>{\n        const curith = postsPerPage * (currPage - 1) + ith;\n        console.log(\"Deleting post number: \", curith);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].delete(NOTES_URL + \"/\" + curith).then((res)=>{\n            console.log(res);\n            if (res.status == 204) {\n                console.log(res.status);\n                setTotalPosts(totalPosts - 1); //triger rerender\n                if (totalPosts == curith && totalPosts % postsPerPage == 1) {\n                    //means we deleted the last post in the current page\n                    setCurrPage(currPage - 1);\n                }\n                console.log(\"Post deleted succesfully\");\n            } else if (res.status == 500) {\n                console.log(\"Can't deleted post\");\n            }\n        }).catch((error)=>{\n            console.log(\"Error deleting post:\");\n            console.error(\"Error updating post:\", error);\n        });\n        console.log(\"finished deleteAction\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                postsPerPage: postsPerPage,\n                setPostsPerPage: setPostsInPage\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                posts: posts,\n                pageNumber: currPage,\n                baseUrl: NOTES_URL,\n                addPost: addPost,\n                setReFetch: setReFetch,\n                updatePost: updatePost,\n                deleteAction: deleteAction\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currPage: currPage,\n                setCurrPage: setCurrPage,\n                pagesRange: calcPagesRange(),\n                maxPage: Math.ceil(totalPosts / postsPerPage)\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"pXybpxpjFYAOd6nb1B69k2Z5kxU=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFFUDtBQUNZO0FBQ1I7QUFFZjtBQUkxQixtREFBbUQ7QUFFbkQsTUFBTU0sTUFBTTs7SUFDViwwQkFBMEI7SUFDMUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1pQixZQUFZO0lBRWxCaEIsZ0RBQVNBLENBQUM7UUFDUkksNkNBQUtBLENBQ0ZhLEdBQUcsQ0FBQ0QsWUFBWSxVQUFtQixPQUFUUixZQUFhLFdBQXdCLE9BQWJJLGVBQ2xETSxJQUFJLENBQUMsQ0FBQ0M7WUFDTCw0Q0FBNEM7WUFDNUNSLGNBQWMsQ0FBQ1EsSUFBSUMsT0FBTyxDQUFDLGdCQUFnQjtZQUMzQ2IsU0FDRVksSUFBSUUsSUFBSSxDQUFDLGFBQWE7O1lBRXhCQyxRQUFRQyxHQUFHLENBQUNKLElBQUlFLElBQUk7UUFDdEIsR0FDQ0csS0FBSyxDQUFDLENBQUNDO1lBQ05ILFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJFO1FBQ3hDO0lBQ0osR0FBRztRQUFDakI7UUFBVUk7UUFBY0U7S0FBUTtJQUVwQyxNQUFNWSxpQkFBaUI7UUFDckIsTUFBTUMsVUFBVUMsS0FBS0MsSUFBSSxDQUFDbkIsYUFBYUU7UUFDdkMsSUFBSUosWUFBWSxHQUFHO1lBQ2pCLE9BQU9zQixNQUFNQyxJQUFJLENBQUM7Z0JBQUVDLFFBQVFKLEtBQUtLLEdBQUcsQ0FBQ04sU0FBUztZQUFHLEdBQUcsQ0FBQ08sR0FBR0MsSUFBTUEsSUFBSTtRQUNwRTtRQUNBLElBQUkzQixXQUFXbUIsVUFBVSxHQUFHO1lBQzFCLE9BQU87Z0JBQUNBLFVBQVU7Z0JBQUdBLFVBQVU7Z0JBQUdBLFVBQVU7Z0JBQUdBLFVBQVU7Z0JBQUdBO2FBQVE7UUFDdEU7UUFDQSxPQUFPO1lBQUNuQixXQUFXO1lBQUdBLFdBQVc7WUFBR0E7WUFBVUEsV0FBVztZQUFHQSxXQUFXO1NBQUU7SUFDM0U7SUFFQSxNQUFNNEIsaUJBQWlCLENBQUNDO1FBQ3RCNUIsWUFBWTtRQUNaSSxnQkFBZ0J3QjtJQUNsQjtJQUVBLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNQyxVQUFVLENBQUNDO1FBQ2YsTUFBTUMsV0FBV1osS0FBS0MsSUFBSSxDQUFDbkIsYUFBYUU7UUFDeEMsTUFBTTZCLG1CQUNKakMsYUFBYWdDLFlBQ1o5QixhQUFhRSxpQkFBaUIsS0FDNUJKLENBQUFBLGFBQWFnQyxXQUFXLEtBQUtoQyxhQUFhZ0MsV0FBVztRQUMxRHBDLDZDQUFLQSxDQUNGbUMsSUFBSSxDQUFDdkIsV0FBVztZQUFFdUI7UUFBSyxHQUN2QnJCLElBQUksQ0FBQyxDQUFDQztZQUNMQSxJQUFJdUIsTUFBTSxLQUFLLE9BQ2JELG9CQUNBOUIsY0FBY0QsYUFBYTtZQUMzQlksUUFBUUMsR0FBRyxDQUFDLDJCQUEyQkosSUFBSXVCLE1BQU07UUFDckQsR0FDQ2xCLEtBQUssQ0FBQyxDQUFDQztZQUNOSCxRQUFRRyxLQUFLLENBQUMsc0JBQXNCQTtZQUNwQyxPQUFPQSxNQUFNaUIsTUFBTTtRQUNyQjtRQUNGLE9BQU87SUFDVDtJQUNBLE1BQU1DLGFBQWEsT0FDakJDLEtBQ0FMLE1BQ0FNO1FBRUEsTUFBTUMsU0FBU2xDLGVBQWdCSixDQUFBQSxXQUFXLEtBQUtvQztRQUMvQ3hDLDZDQUFLQSxDQUNGMkMsR0FBRyxDQUFDL0IsWUFBWSxNQUFNOEIsUUFBUTtZQUFFUDtRQUFLLEdBQ3JDckIsSUFBSSxDQUFDMkIsT0FDTHJCLEtBQUssQ0FBQyxDQUFDQyxRQUFVSCxRQUFRRyxLQUFLLENBQUMsd0JBQXdCQTtJQUM1RDtJQUNBLE1BQU11QixlQUFlLE9BQU9KO1FBQzFCLE1BQU1FLFNBQVNsQyxlQUFnQkosQ0FBQUEsV0FBVyxLQUFLb0M7UUFDL0N0QixRQUFRQyxHQUFHLENBQUMsMEJBQTBCdUI7UUFDdEMsTUFBTTNCLE1BQU0sTUFBTWYsNkNBQUtBLENBQ3BCNkMsTUFBTSxDQUFDakMsWUFBWSxNQUFNOEIsUUFDekI1QixJQUFJLENBQUMsQ0FBQ0M7WUFDTEcsUUFBUUMsR0FBRyxDQUFDSjtZQUNaLElBQUlBLElBQUl1QixNQUFNLElBQUksS0FBSztnQkFDckJwQixRQUFRQyxHQUFHLENBQUNKLElBQUl1QixNQUFNO2dCQUN0Qi9CLGNBQWNELGFBQWEsSUFBSSxpQkFBaUI7Z0JBQ2hELElBQUlBLGNBQWNvQyxVQUFVcEMsYUFBYUUsZ0JBQWdCLEdBQUc7b0JBQzFELG9EQUFvRDtvQkFDcERILFlBQVlELFdBQVc7Z0JBQ3pCO2dCQUNBYyxRQUFRQyxHQUFHLENBQUM7WUFDZCxPQUFPLElBQUlKLElBQUl1QixNQUFNLElBQUksS0FBSztnQkFDNUJwQixRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNGLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOSCxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUcsS0FBSyxDQUFDLHdCQUF3QkE7UUFBTTtRQUc5Q0gsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBQ0EscUJBQ0UsOERBQUMyQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2hELDBEQUFNQTtnQkFBQ1MsY0FBY0E7Z0JBQWNDLGlCQUFpQnVCOzs7Ozs7MEJBQ3JELDhEQUFDbkMsd0RBQUlBO2dCQUNISyxPQUFPQTtnQkFDUDhDLFlBQVk1QztnQkFDWjZDLFNBQVNyQztnQkFDVHNCLFNBQVNBO2dCQUNUdkIsWUFBWUE7Z0JBQ1o0QixZQUFZQTtnQkFDWkssY0FBY0E7Ozs7OzswQkFFaEIsOERBQUM5Qyw4REFBVUE7Z0JBQ1RNLFVBQVVBO2dCQUNWQyxhQUFhQTtnQkFDYjZDLFlBQVk1QjtnQkFDWkMsU0FBU0MsS0FBS0MsSUFBSSxDQUFDbkIsYUFBYUU7Ozs7Ozs7Ozs7OztBQUl4QztHQTNITVA7S0FBQUE7QUE2SE4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0FwcC50c3g/ZDYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1BhZ2luYXRpb25cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgeyBQb3N0UGFyYW1zIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLy8gaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmF0ZU5vdGVzXCJcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKHNjcmlwdCgpKVxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJQYWdlLCBzZXRDdXJyUGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3RvdGFsUG9zdHMsIHNldFRvdGFsUG9zdHNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwb3N0c1BlclBhZ2UsIHNldFBvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IFtyZUZldGNoLCBzZXRSZUZldGNoXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IE5PVEVTX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL25vdGVzXCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChOT1RFU19VUkwgKyBgP19wYWdlPSR7Y3VyclBhZ2V9YCArIGAmX2xpbWl0PSR7cG9zdHNQZXJQYWdlfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIHJlcy5oZWFkZXJzW1wieC10b3RhbC1jb3VudFwiXSAmJiAgICAgVE9ETz9cbiAgICAgICAgc2V0VG90YWxQb3N0cygrcmVzLmhlYWRlcnNbXCJ4LXRvdGFsLWNvdW50XCJdKTtcbiAgICAgICAgc2V0UG9zdHMoXG4gICAgICAgICAgcmVzLmRhdGEgLy8gVE9ETyBzb3J0P1xuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVuY291bnRlcmVkIGFuIGVycm9yOlwiICsgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtjdXJyUGFnZSwgcG9zdHNQZXJQYWdlLCByZUZldGNoXSk7XG5cbiAgY29uc3QgY2FsY1BhZ2VzUmFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWF4UGFnZSA9IE1hdGguY2VpbCh0b3RhbFBvc3RzIC8gcG9zdHNQZXJQYWdlKTtcbiAgICBpZiAoY3VyclBhZ2UgPD0gMykge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IE1hdGgubWluKG1heFBhZ2UsIDUpIH0sIChfLCBpKSA9PiBpICsgMSk7XG4gICAgfVxuICAgIGlmIChjdXJyUGFnZSA+IG1heFBhZ2UgLSAyKSB7XG4gICAgICByZXR1cm4gW21heFBhZ2UgLSA0LCBtYXhQYWdlIC0gMywgbWF4UGFnZSAtIDIsIG1heFBhZ2UgLSAxLCBtYXhQYWdlXTtcbiAgICB9XG4gICAgcmV0dXJuIFtjdXJyUGFnZSAtIDIsIGN1cnJQYWdlIC0gMSwgY3VyclBhZ2UsIGN1cnJQYWdlICsgMSwgY3VyclBhZ2UgKyAyXTtcbiAgfTtcblxuICBjb25zdCBzZXRQb3N0c0luUGFnZSA9IChudW1iZXJPZlBvc3RzOiBudW1iZXIpID0+IHtcbiAgICBzZXRDdXJyUGFnZSgxKTtcbiAgICBzZXRQb3N0c1BlclBhZ2UobnVtYmVyT2ZQb3N0cyk7XG4gIH07XG5cbiAgLy8gaWQ6IG51bWJlcixcbiAgLy8gdGl0bGU6IHN0cmluZyxcbiAgLy8gYXV0aG9yOiBBdXRob3IsXG4gIC8vIGNvbnRlbnQ6IHN0cmluZ1xuICBjb25zdCBhZGRQb3N0ID0gKHBvc3Q6IFBvc3RQYXJhbXMpID0+IHtcbiAgICBjb25zdCBsYXN0UGFnZSA9IE1hdGguY2VpbCh0b3RhbFBvc3RzIC8gcG9zdHNQZXJQYWdlKTtcbiAgICBjb25zdCB1cGRhdGVQYWdpbmF0aW9uID1cbiAgICAgIGN1cnJQYWdlID09PSBsYXN0UGFnZSB8fFxuICAgICAgKHRvdGFsUG9zdHMgJSBwb3N0c1BlclBhZ2UgPT09IDAgJiZcbiAgICAgICAgKGN1cnJQYWdlID09PSBsYXN0UGFnZSAtIDEgfHwgY3VyclBhZ2UgPT09IGxhc3RQYWdlIC0gMikpO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChOT1RFU19VUkwsIHsgcG9zdCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXMuc3RhdHVzID09PSAyMDEgJiZcbiAgICAgICAgICB1cGRhdGVQYWdpbmF0aW9uICYmXG4gICAgICAgICAgc2V0VG90YWxQb3N0cyh0b3RhbFBvc3RzICsgMSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJQb3N0IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLCByZXMuc3RhdHVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgcG9zdDpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3Iuc3RhdHVzO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIDA7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZVBvc3QgPSBhc3luYyAoXG4gICAgaXRoOiBudW1iZXIsXG4gICAgcG9zdDogUG9zdFBhcmFtcyxcbiAgICB0aGVuZjogKHJlczogYW55KSA9PiB2b2lkXG4gICkgPT4ge1xuICAgIGNvbnN0IGN1cml0aCA9IHBvc3RzUGVyUGFnZSAqIChjdXJyUGFnZSAtIDEpICsgaXRoO1xuICAgIGF4aW9zXG4gICAgICAucHV0KE5PVEVTX1VSTCArIFwiL1wiICsgY3VyaXRoLCB7IHBvc3QgfSlcbiAgICAgIC50aGVuKHRoZW5mKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIHBvc3Q6XCIsIGVycm9yKSk7XG4gIH07XG4gIGNvbnN0IGRlbGV0ZUFjdGlvbiA9IGFzeW5jIChpdGg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGN1cml0aCA9IHBvc3RzUGVyUGFnZSAqIChjdXJyUGFnZSAtIDEpICsgaXRoO1xuICAgIGNvbnNvbGUubG9nKFwiRGVsZXRpbmcgcG9zdCBudW1iZXI6IFwiLCBjdXJpdGgpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zXG4gICAgICAuZGVsZXRlKE5PVEVTX1VSTCArIFwiL1wiICsgY3VyaXRoKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKTtcbiAgICAgICAgICBzZXRUb3RhbFBvc3RzKHRvdGFsUG9zdHMgLSAxKTsgLy90cmlnZXIgcmVyZW5kZXJcbiAgICAgICAgICBpZiAodG90YWxQb3N0cyA9PSBjdXJpdGggJiYgdG90YWxQb3N0cyAlIHBvc3RzUGVyUGFnZSA9PSAxKSB7XG4gICAgICAgICAgICAvL21lYW5zIHdlIGRlbGV0ZWQgdGhlIGxhc3QgcG9zdCBpbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICBzZXRDdXJyUGFnZShjdXJyUGFnZSAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBvc3QgZGVsZXRlZCBzdWNjZXNmdWxseVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzID09IDUwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuJ3QgZGVsZXRlZCBwb3N0XCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRlbGV0aW5nIHBvc3Q6XCIpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwb3N0OlwiLCBlcnJvcil9KTtcblxuXG4gICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIGRlbGV0ZUFjdGlvblwiKVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICA8SGVhZGVyIHBvc3RzUGVyUGFnZT17cG9zdHNQZXJQYWdlfSBzZXRQb3N0c1BlclBhZ2U9e3NldFBvc3RzSW5QYWdlfSAvPlxuICAgICAgPFBhZ2VcbiAgICAgICAgcG9zdHM9e3Bvc3RzfVxuICAgICAgICBwYWdlTnVtYmVyPXtjdXJyUGFnZX1cbiAgICAgICAgYmFzZVVybD17Tk9URVNfVVJMfVxuICAgICAgICBhZGRQb3N0PXthZGRQb3N0fVxuICAgICAgICBzZXRSZUZldGNoPXtzZXRSZUZldGNofVxuICAgICAgICB1cGRhdGVQb3N0PXt1cGRhdGVQb3N0fVxuICAgICAgICBkZWxldGVBY3Rpb249e2RlbGV0ZUFjdGlvbn1cbiAgICAgIC8+XG4gICAgICA8UGFnaW5hdGlvblxuICAgICAgICBjdXJyUGFnZT17Y3VyclBhZ2V9XG4gICAgICAgIHNldEN1cnJQYWdlPXtzZXRDdXJyUGFnZX1cbiAgICAgICAgcGFnZXNSYW5nZT17Y2FsY1BhZ2VzUmFuZ2UoKX1cbiAgICAgICAgbWF4UGFnZT17TWF0aC5jZWlsKHRvdGFsUG9zdHMgLyBwb3N0c1BlclBhZ2UpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBhZ2UiLCJQYWdpbmF0aW9uIiwiSGVhZGVyIiwiYXhpb3MiLCJBcHAiLCJwb3N0cyIsInNldFBvc3RzIiwiY3VyclBhZ2UiLCJzZXRDdXJyUGFnZSIsInRvdGFsUG9zdHMiLCJzZXRUb3RhbFBvc3RzIiwicG9zdHNQZXJQYWdlIiwic2V0UG9zdHNQZXJQYWdlIiwicmVGZXRjaCIsInNldFJlRmV0Y2giLCJOT1RFU19VUkwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiaGVhZGVycyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImNhbGNQYWdlc1JhbmdlIiwibWF4UGFnZSIsIk1hdGgiLCJjZWlsIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWluIiwiXyIsImkiLCJzZXRQb3N0c0luUGFnZSIsIm51bWJlck9mUG9zdHMiLCJhZGRQb3N0IiwicG9zdCIsImxhc3RQYWdlIiwidXBkYXRlUGFnaW5hdGlvbiIsInN0YXR1cyIsInVwZGF0ZVBvc3QiLCJpdGgiLCJ0aGVuZiIsImN1cml0aCIsInB1dCIsImRlbGV0ZUFjdGlvbiIsImRlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2VOdW1iZXIiLCJiYXNlVXJsIiwicGFnZXNSYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.tsx\n"));

/***/ })

});