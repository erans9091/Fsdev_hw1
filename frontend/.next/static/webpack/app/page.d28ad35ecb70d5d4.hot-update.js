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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Page */ \"(app-pages-browser)/./app/components/Page.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Pagination */ \"(app-pages-browser)/./app/components/Pagination.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./app/components/Header.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import script from \"../../scripts/generateNotes\"\nconst App = ()=>{\n    _s();\n    //   console.log(script())\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currPage, setCurrPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPosts, setTotalPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [postsPerPage, setPostsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [reFetch, setReFetch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    console.log(\"totalPosts\", totalPosts);\n    const NOTES_URL = \"http://localhost:3001/notes\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(NOTES_URL + \"?_page=\".concat(currPage) + \"&_limit=\".concat(postsPerPage)).then((res)=>{\n            // res.headers[\"x-total-count\"] &&     TODO?\n            setTotalPosts(+res.headers[\"x-total-count\"]);\n            setPosts(res.data // TODO sort?\n            );\n            console.log(res.data);\n        }).catch((error)=>{\n            console.log(\"Encountered an error:\" + error);\n        });\n    }, [\n        currPage,\n        postsPerPage,\n        reFetch\n    ]);\n    const calcPagesRange = ()=>{\n        const maxPage = Math.ceil(totalPosts / postsPerPage);\n        if (currPage <= 3) {\n            return Array.from({\n                length: Math.min(maxPage, 5)\n            }, (_, i)=>i + 1);\n        }\n        if (currPage > maxPage - 2) {\n            return [\n                maxPage - 4,\n                maxPage - 3,\n                maxPage - 2,\n                maxPage - 1,\n                maxPage\n            ];\n        }\n        return [\n            currPage - 2,\n            currPage - 1,\n            currPage,\n            currPage + 1,\n            currPage + 2\n        ];\n    };\n    const setPostsInPage = (numberOfPosts)=>{\n        setCurrPage(1);\n        setPostsPerPage(numberOfPosts);\n    };\n    // id: number,\n    // title: string,\n    // author: Author,\n    // content: string\n    const addPost = (post)=>{\n        const lastPage = Math.ceil(totalPosts / postsPerPage);\n        const updatePagination = currPage === lastPage || totalPosts % postsPerPage === 0 && (currPage === lastPage - 1 || currPage === lastPage - 2);\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(NOTES_URL, {\n            post\n        }).then((res)=>{\n            res.status === 201 && updatePagination && setTotalPosts(totalPosts + 1);\n            console.log(\"Post added successfully\", res.status);\n        }).catch((error)=>{\n            console.error(\"Error adding post:\", error);\n            return error.status;\n        });\n        return 0;\n    };\n    const updatePost = async (ith, post, thenf)=>{\n        const curith = postsPerPage * (currPage - 1) + ith;\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(NOTES_URL + \"/\" + curith, {\n            post\n        }).then(thenf).catch((error)=>console.error(\"Error updating post:\", error));\n    };\n    const deleteAction = async (ith)=>{\n        const curith = postsPerPage * (currPage - 1) + ith;\n        console.log(\"Deleting post number: \", curith);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].delete(NOTES_URL + \"/\" + curith).then((res)=>{\n            console.log(res);\n            if (res.status == 204) {\n                console.log(res.status);\n                setTotalPosts((curr)=>curr - 1);\n                if (totalPosts === curith && totalPosts % postsPerPage === 1) {\n                    console.log(\"should rerender\");\n                    //means we deleted the last post in the current page\n                    setCurrPage(currPage - 1);\n                }\n                console.log(\"Post deleted succesfully\");\n            } else if (res.status == 500) {\n                console.log(\"Can't deleted post\");\n            }\n        }).catch((error)=>{\n            console.log(\"Error deleting post:\");\n            console.error(\"Error updating post:\", error);\n        });\n        console.log(\"finished deleteAction\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                postsPerPage: postsPerPage,\n                setPostsPerPage: setPostsInPage\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                posts: posts,\n                pageNumber: currPage,\n                baseUrl: NOTES_URL,\n                addPost: addPost,\n                setReFetch: setReFetch,\n                updatePost: updatePost,\n                deleteAction: deleteAction\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currPage: currPage,\n                setCurrPage: setCurrPage,\n                pagesRange: calcPagesRange(),\n                maxPage: Math.ceil(totalPosts / postsPerPage)\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"pXybpxpjFYAOd6nb1B69k2Z5kxU=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WkssY0FBY0E7Ozs7OzswQkFFaEIsOERBQUM5Qyw4REFBVUE7Z0JBQ1RNLFVBQVVBO2dCQUNWQyxhQUFhQTtnQkFDYjhDLFlBQVk3QjtnQkFDWkMsU0FBU0MsS0FBS0MsSUFBSSxDQUFDbkIsYUFBYUU7Ozs7Ozs7Ozs7OztBQUl4QztHQTdITVA7S0FBQUE7QUErSE4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0FwcC50c3g/ZDYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1BhZ2luYXRpb25cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgeyBQb3N0UGFyYW1zIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLy8gaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmF0ZU5vdGVzXCJcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKHNjcmlwdCgpKVxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJQYWdlLCBzZXRDdXJyUGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3RvdGFsUG9zdHMsIHNldFRvdGFsUG9zdHNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwb3N0c1BlclBhZ2UsIHNldFBvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IFtyZUZldGNoLCBzZXRSZUZldGNoXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnNvbGUubG9nKFwidG90YWxQb3N0c1wiLCB0b3RhbFBvc3RzKTtcbiAgY29uc3QgTk9URVNfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbm90ZXNcIjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KE5PVEVTX1VSTCArIGA/X3BhZ2U9JHtjdXJyUGFnZX1gICsgYCZfbGltaXQ9JHtwb3N0c1BlclBhZ2V9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gcmVzLmhlYWRlcnNbXCJ4LXRvdGFsLWNvdW50XCJdICYmICAgICBUT0RPP1xuICAgICAgICBzZXRUb3RhbFBvc3RzKCtyZXMuaGVhZGVyc1tcIngtdG90YWwtY291bnRcIl0pO1xuICAgICAgICBzZXRQb3N0cyhcbiAgICAgICAgICByZXMuZGF0YSAvLyBUT0RPIHNvcnQ/XG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW5jb3VudGVyZWQgYW4gZXJyb3I6XCIgKyBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW2N1cnJQYWdlLCBwb3N0c1BlclBhZ2UsIHJlRmV0Y2hdKTtcblxuICBjb25zdCBjYWxjUGFnZXNSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYXhQYWdlID0gTWF0aC5jZWlsKHRvdGFsUG9zdHMgLyBwb3N0c1BlclBhZ2UpO1xuICAgIGlmIChjdXJyUGFnZSA8PSAzKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogTWF0aC5taW4obWF4UGFnZSwgNSkgfSwgKF8sIGkpID0+IGkgKyAxKTtcbiAgICB9XG4gICAgaWYgKGN1cnJQYWdlID4gbWF4UGFnZSAtIDIpIHtcbiAgICAgIHJldHVybiBbbWF4UGFnZSAtIDQsIG1heFBhZ2UgLSAzLCBtYXhQYWdlIC0gMiwgbWF4UGFnZSAtIDEsIG1heFBhZ2VdO1xuICAgIH1cbiAgICByZXR1cm4gW2N1cnJQYWdlIC0gMiwgY3VyclBhZ2UgLSAxLCBjdXJyUGFnZSwgY3VyclBhZ2UgKyAxLCBjdXJyUGFnZSArIDJdO1xuICB9O1xuXG4gIGNvbnN0IHNldFBvc3RzSW5QYWdlID0gKG51bWJlck9mUG9zdHM6IG51bWJlcikgPT4ge1xuICAgIHNldEN1cnJQYWdlKDEpO1xuICAgIHNldFBvc3RzUGVyUGFnZShudW1iZXJPZlBvc3RzKTtcbiAgfTtcblxuICAvLyBpZDogbnVtYmVyLFxuICAvLyB0aXRsZTogc3RyaW5nLFxuICAvLyBhdXRob3I6IEF1dGhvcixcbiAgLy8gY29udGVudDogc3RyaW5nXG4gIGNvbnN0IGFkZFBvc3QgPSAocG9zdDogUG9zdFBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsUG9zdHMgLyBwb3N0c1BlclBhZ2UpO1xuICAgIGNvbnN0IHVwZGF0ZVBhZ2luYXRpb24gPVxuICAgICAgY3VyclBhZ2UgPT09IGxhc3RQYWdlIHx8XG4gICAgICAodG90YWxQb3N0cyAlIHBvc3RzUGVyUGFnZSA9PT0gMCAmJlxuICAgICAgICAoY3VyclBhZ2UgPT09IGxhc3RQYWdlIC0gMSB8fCBjdXJyUGFnZSA9PT0gbGFzdFBhZ2UgLSAyKSk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KE5PVEVTX1VSTCwgeyBwb3N0IH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMgPT09IDIwMSAmJlxuICAgICAgICAgIHVwZGF0ZVBhZ2luYXRpb24gJiZcbiAgICAgICAgICBzZXRUb3RhbFBvc3RzKHRvdGFsUG9zdHMgKyAxKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBvc3QgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsIHJlcy5zdGF0dXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwb3N0OlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvci5zdGF0dXM7XG4gICAgICB9KTtcbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgdXBkYXRlUG9zdCA9IGFzeW5jIChcbiAgICBpdGg6IG51bWJlcixcbiAgICBwb3N0OiBQb3N0UGFyYW1zLFxuICAgIHRoZW5mOiAocmVzOiBhbnkpID0+IHZvaWRcbiAgKSA9PiB7XG4gICAgY29uc3QgY3VyaXRoID0gcG9zdHNQZXJQYWdlICogKGN1cnJQYWdlIC0gMSkgKyBpdGg7XG4gICAgYXhpb3NcbiAgICAgIC5wdXQoTk9URVNfVVJMICsgXCIvXCIgKyBjdXJpdGgsIHsgcG9zdCB9KVxuICAgICAgLnRoZW4odGhlbmYpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcG9zdDpcIiwgZXJyb3IpKTtcbiAgfTtcbiAgY29uc3QgZGVsZXRlQWN0aW9uID0gYXN5bmMgKGl0aDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY3VyaXRoID0gcG9zdHNQZXJQYWdlICogKGN1cnJQYWdlIC0gMSkgKyBpdGg7XG4gICAgY29uc29sZS5sb2coXCJEZWxldGluZyBwb3N0IG51bWJlcjogXCIsIGN1cml0aCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NcbiAgICAgIC5kZWxldGUoTk9URVNfVVJMICsgXCIvXCIgKyBjdXJpdGgpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpO1xuICAgICAgICAgIHNldFRvdGFsUG9zdHMoKGN1cnIpID0+IGN1cnIgLSAxKTtcbiAgICAgICAgICBpZiAodG90YWxQb3N0cyA9PT0gY3VyaXRoICYmIHRvdGFsUG9zdHMgJSBwb3N0c1BlclBhZ2UgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hvdWxkIHJlcmVuZGVyXCIpXG4gICAgICAgICAgICAvL21lYW5zIHdlIGRlbGV0ZWQgdGhlIGxhc3QgcG9zdCBpbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICBzZXRDdXJyUGFnZShjdXJyUGFnZSAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBvc3QgZGVsZXRlZCBzdWNjZXNmdWxseVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzID09IDUwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuJ3QgZGVsZXRlZCBwb3N0XCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRlbGV0aW5nIHBvc3Q6XCIpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwb3N0OlwiLCBlcnJvcil9KTtcblxuXG4gICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIGRlbGV0ZUFjdGlvblwiKVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICA8SGVhZGVyIHBvc3RzUGVyUGFnZT17cG9zdHNQZXJQYWdlfSBzZXRQb3N0c1BlclBhZ2U9e3NldFBvc3RzSW5QYWdlfSAvPlxuICAgICAgPFBhZ2VcbiAgICAgICAgcG9zdHM9e3Bvc3RzfVxuICAgICAgICBwYWdlTnVtYmVyPXtjdXJyUGFnZX1cbiAgICAgICAgYmFzZVVybD17Tk9URVNfVVJMfVxuICAgICAgICBhZGRQb3N0PXthZGRQb3N0fVxuICAgICAgICBzZXRSZUZldGNoPXtzZXRSZUZldGNofVxuICAgICAgICB1cGRhdGVQb3N0PXt1cGRhdGVQb3N0fVxuICAgICAgICBkZWxldGVBY3Rpb249e2RlbGV0ZUFjdGlvbn1cbiAgICAgIC8+XG4gICAgICA8UGFnaW5hdGlvblxuICAgICAgICBjdXJyUGFnZT17Y3VyclBhZ2V9XG4gICAgICAgIHNldEN1cnJQYWdlPXtzZXRDdXJyUGFnZX1cbiAgICAgICAgcGFnZXNSYW5nZT17Y2FsY1BhZ2VzUmFuZ2UoKX1cbiAgICAgICAgbWF4UGFnZT17TWF0aC5jZWlsKHRvdGFsUG9zdHMgLyBwb3N0c1BlclBhZ2UpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBhZ2UiLCJQYWdpbmF0aW9uIiwiSGVhZGVyIiwiYXhpb3MiLCJBcHAiLCJwb3N0cyIsInNldFBvc3RzIiwiY3VyclBhZ2UiLCJzZXRDdXJyUGFnZSIsInRvdGFsUG9zdHMiLCJzZXRUb3RhbFBvc3RzIiwicG9zdHNQZXJQYWdlIiwic2V0UG9zdHNQZXJQYWdlIiwicmVGZXRjaCIsInNldFJlRmV0Y2giLCJjb25zb2xlIiwibG9nIiwiTk9URVNfVVJMIiwiZ2V0IiwidGhlbiIsInJlcyIsImhlYWRlcnMiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNhbGNQYWdlc1JhbmdlIiwibWF4UGFnZSIsIk1hdGgiLCJjZWlsIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWluIiwiXyIsImkiLCJzZXRQb3N0c0luUGFnZSIsIm51bWJlck9mUG9zdHMiLCJhZGRQb3N0IiwicG9zdCIsImxhc3RQYWdlIiwidXBkYXRlUGFnaW5hdGlvbiIsInN0YXR1cyIsInVwZGF0ZVBvc3QiLCJpdGgiLCJ0aGVuZiIsImN1cml0aCIsInB1dCIsImRlbGV0ZUFjdGlvbiIsImRlbGV0ZSIsImN1cnIiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlTnVtYmVyIiwiYmFzZVVybCIsInBhZ2VzUmFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.tsx\n"));

/***/ })

});