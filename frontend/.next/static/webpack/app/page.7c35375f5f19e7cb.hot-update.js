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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Page */ \"(app-pages-browser)/./app/components/Page.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Pagination */ \"(app-pages-browser)/./app/components/Pagination.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./app/components/Header.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import script from \"../../scripts/generateNotes\"\nconst App = ()=>{\n    _s();\n    //   console.log(script())\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currPage, setCurrPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPosts, setTotalPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [postsPerPage, setPostsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [reFetch, setReFetch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const NOTES_URL = \"http://localhost:3001/notes\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(NOTES_URL + \"?_page=\".concat(currPage) + \"&_limit=\".concat(postsPerPage)).then((res)=>{\n            // res.headers[\"x-total-count\"] &&     TODO?\n            setTotalPosts(+res.headers[\"x-total-count\"]);\n            setPosts(res.data // TODO sort?\n            );\n            console.log(res.data);\n        }).catch((error)=>{\n            console.log(\"Encountered an error:\" + error);\n        });\n    }, [\n        currPage,\n        postsPerPage,\n        reFetch\n    ]);\n    const calcPagesRange = ()=>{\n        const maxPage = Math.ceil(totalPosts / postsPerPage);\n        if (currPage <= 3) {\n            return Array.from({\n                length: Math.min(maxPage, 5)\n            }, (_, i)=>i + 1);\n        }\n        if (currPage > maxPage - 2) {\n            return [\n                maxPage - 4,\n                maxPage - 3,\n                maxPage - 2,\n                maxPage - 1,\n                maxPage\n            ];\n        }\n        return [\n            currPage - 2,\n            currPage - 1,\n            currPage,\n            currPage + 1,\n            currPage + 2\n        ];\n    };\n    const setPostsInPage = (numberOfPosts)=>{\n        setCurrPage(1);\n        setPostsPerPage(numberOfPosts);\n    };\n    // id: number,\n    // title: string,\n    // author: Author,\n    // content: string\n    const addPost = (post)=>{\n        const lastPage = Math.ceil(totalPosts / postsPerPage);\n        const updatePagination = currPage === lastPage || totalPosts % postsPerPage === 0 && (currPage === lastPage - 1 || currPage === lastPage - 2);\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(NOTES_URL, {\n            post\n        }).then((res)=>{\n            res.status === 201 && updatePagination && setTotalPosts(totalPosts + 1);\n            console.log(\"Post added successfully\", res.status);\n        }).catch((error)=>{\n            console.error(\"Error adding post:\", error);\n            return error.status;\n        });\n        return 0;\n    };\n    const updatePost = async (ith, post, thenf)=>{\n        const curith = postsPerPage * (currPage - 1) + ith;\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(NOTES_URL + \"/\" + curith, {\n            post\n        }).then(thenf).catch((error)=>console.error(\"Error updating post:\", error));\n    };\n    const deleteAction = async (ith)=>{\n        const curith = postsPerPage * (currPage - 1) + ith;\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].delete(NOTES_URL + \"/\" + curith).then((res)=>{\n            if (res.status == 204) {\n                setTotalPosts(totalPosts - 1); //triger rerender\n                if (totalPosts == curith && totalPosts % postsPerPage == 1) {\n                    //means we deleted the last post in the current page\n                    setCurrPage(currPage - 1);\n                }\n                console.log(\"Post deleted succesfully\");\n            } else if (res.status == 500) {\n                console.log(\"Can't deleted post\");\n            }\n        }).catch((error)=>console.error(\"Error updating post:\", error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                postsPerPage: postsPerPage,\n                setPostsPerPage: setPostsInPage\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                posts: posts,\n                pageNumber: currPage,\n                baseUrl: NOTES_URL,\n                addPost: addPost,\n                setReFetch: setReFetch,\n                updatePost: updatePost,\n                deleteAction: deleteAction\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currPage: currPage,\n                setCurrPage: setCurrPage,\n                pagesRange: calcPagesRange(),\n                maxPage: Math.ceil(totalPosts / postsPerPage)\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"pXybpxpjFYAOd6nb1B69k2Z5kxU=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUGFnaW5hdGlvblwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7IFBvc3RQYXJhbXMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vLyBpbXBvcnQgc2NyaXB0IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYXRlTm90ZXNcIlxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coc2NyaXB0KCkpXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VyclBhZ2UsIHNldEN1cnJQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbdG90YWxQb3N0cywgc2V0VG90YWxQb3N0c10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Bvc3RzUGVyUGFnZSwgc2V0UG9zdHNQZXJQYWdlXSA9IHVzZVN0YXRlKDEwKTtcbiAgY29uc3QgW3JlRmV0Y2gsIHNldFJlRmV0Y2hdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgTk9URVNfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbm90ZXNcIjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KE5PVEVTX1VSTCArIGA/X3BhZ2U9JHtjdXJyUGFnZX1gICsgYCZfbGltaXQ9JHtwb3N0c1BlclBhZ2V9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gcmVzLmhlYWRlcnNbXCJ4LXRvdGFsLWNvdW50XCJdICYmICAgICBUT0RPP1xuICAgICAgICBzZXRUb3RhbFBvc3RzKCtyZXMuaGVhZGVyc1tcIngtdG90YWwtY291bnRcIl0pO1xuICAgICAgICBzZXRQb3N0cyhcbiAgICAgICAgICByZXMuZGF0YSAvLyBUT0RPIHNvcnQ/XG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW5jb3VudGVyZWQgYW4gZXJyb3I6XCIgKyBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW2N1cnJQYWdlLCBwb3N0c1BlclBhZ2UsIHJlRmV0Y2hdKTtcblxuICBjb25zdCBjYWxjUGFnZXNSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYXhQYWdlID0gTWF0aC5jZWlsKHRvdGFsUG9zdHMgLyBwb3N0c1BlclBhZ2UpO1xuICAgIGlmIChjdXJyUGFnZSA8PSAzKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogTWF0aC5taW4obWF4UGFnZSwgNSkgfSwgKF8sIGkpID0+IGkgKyAxKTtcbiAgICB9XG4gICAgaWYgKGN1cnJQYWdlID4gbWF4UGFnZSAtIDIpIHtcbiAgICAgIHJldHVybiBbbWF4UGFnZSAtIDQsIG1heFBhZ2UgLSAzLCBtYXhQYWdlIC0gMiwgbWF4UGFnZSAtIDEsIG1heFBhZ2VdO1xuICAgIH1cbiAgICByZXR1cm4gW2N1cnJQYWdlIC0gMiwgY3VyclBhZ2UgLSAxLCBjdXJyUGFnZSwgY3VyclBhZ2UgKyAxLCBjdXJyUGFnZSArIDJdO1xuICB9O1xuXG4gIGNvbnN0IHNldFBvc3RzSW5QYWdlID0gKG51bWJlck9mUG9zdHM6IG51bWJlcikgPT4ge1xuICAgIHNldEN1cnJQYWdlKDEpO1xuICAgIHNldFBvc3RzUGVyUGFnZShudW1iZXJPZlBvc3RzKTtcbiAgfTtcblxuICAvLyBpZDogbnVtYmVyLFxuICAvLyB0aXRsZTogc3RyaW5nLFxuICAvLyBhdXRob3I6IEF1dGhvcixcbiAgLy8gY29udGVudDogc3RyaW5nXG4gIGNvbnN0IGFkZFBvc3QgPSAocG9zdDogUG9zdFBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsUG9zdHMgLyBwb3N0c1BlclBhZ2UpO1xuICAgIGNvbnN0IHVwZGF0ZVBhZ2luYXRpb24gPVxuICAgICAgY3VyclBhZ2UgPT09IGxhc3RQYWdlIHx8XG4gICAgICAodG90YWxQb3N0cyAlIHBvc3RzUGVyUGFnZSA9PT0gMCAmJlxuICAgICAgICAoY3VyclBhZ2UgPT09IGxhc3RQYWdlIC0gMSB8fCBjdXJyUGFnZSA9PT0gbGFzdFBhZ2UgLSAyKSk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KE5PVEVTX1VSTCwgeyBwb3N0IH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMgPT09IDIwMSAmJiB1cGRhdGVQYWdpbmF0aW9uICYmIHNldFRvdGFsUG9zdHModG90YWxQb3N0cyArIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBvc3QgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsIHJlcy5zdGF0dXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwb3N0OlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvci5zdGF0dXM7XG4gICAgICB9KTtcbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgdXBkYXRlUG9zdCA9IGFzeW5jIChcbiAgICBpdGg6IG51bWJlcixcbiAgICBwb3N0OiBQb3N0UGFyYW1zLFxuICAgIHRoZW5mOiAocmVzOiBhbnkpID0+IHZvaWRcbiAgKSA9PiB7XG4gICAgY29uc3QgY3VyaXRoID0gcG9zdHNQZXJQYWdlICogKGN1cnJQYWdlIC0gMSkgKyBpdGg7XG4gICAgYXhpb3NcbiAgICAgIC5wdXQoTk9URVNfVVJMICsgXCIvXCIgKyBjdXJpdGgsIHsgcG9zdCB9KVxuICAgICAgLnRoZW4odGhlbmYpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcG9zdDpcIiwgZXJyb3IpKTtcbiAgfTtcbiAgY29uc3QgZGVsZXRlQWN0aW9uID0gYXN5bmMgKGl0aDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY3VyaXRoID0gcG9zdHNQZXJQYWdlICogKGN1cnJQYWdlIC0gMSkgKyBpdGg7XG4gICAgYXhpb3NcbiAgICAgIC5kZWxldGUoTk9URVNfVVJMICsgXCIvXCIgKyBjdXJpdGgpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09IDIwNCkge1xuICAgICAgICAgIHNldFRvdGFsUG9zdHModG90YWxQb3N0cyAtIDEpOyAvL3RyaWdlciByZXJlbmRlclxuICAgICAgICAgIGlmICh0b3RhbFBvc3RzID09IGN1cml0aCAmJiB0b3RhbFBvc3RzICUgcG9zdHNQZXJQYWdlID09IDEpIHtcbiAgICAgICAgICAgIC8vbWVhbnMgd2UgZGVsZXRlZCB0aGUgbGFzdCBwb3N0IGluIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIHNldEN1cnJQYWdlKGN1cnJQYWdlIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUG9zdCBkZWxldGVkIHN1Y2Nlc2Z1bGx5XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcy5zdGF0dXMgPT0gNTAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDYW4ndCBkZWxldGVkIHBvc3RcIik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcG9zdDpcIiwgZXJyb3IpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgPEhlYWRlciBwb3N0c1BlclBhZ2U9e3Bvc3RzUGVyUGFnZX0gc2V0UG9zdHNQZXJQYWdlPXtzZXRQb3N0c0luUGFnZX0gLz5cbiAgICAgIDxQYWdlXG4gICAgICAgIHBvc3RzPXtwb3N0c31cbiAgICAgICAgcGFnZU51bWJlcj17Y3VyclBhZ2V9XG4gICAgICAgIGJhc2VVcmw9e05PVEVTX1VSTH1cbiAgICAgICAgYWRkUG9zdD17YWRkUG9zdH1cbiAgICAgICAgc2V0UmVGZXRjaD17c2V0UmVGZXRjaH1cbiAgICAgICAgdXBkYXRlUG9zdD17dXBkYXRlUG9zdH1cbiAgICAgICAgZGVsZXRlQWN0aW9uPXtkZWxldGVBY3Rpb259XG4gICAgICAvPlxuICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgY3VyclBhZ2U9e2N1cnJQYWdlfVxuICAgICAgICBzZXRDdXJyUGFnZT17c2V0Q3VyclBhZ2V9XG4gICAgICAgIHBhZ2VzUmFuZ2U9e2NhbGNQYWdlc1JhbmdlKCl9XG4gICAgICAgIG1heFBhZ2U9e01hdGguY2VpbCh0b3RhbFBvc3RzIC8gcG9zdHNQZXJQYWdlKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQYWdlIiwiUGFnaW5hdGlvbiIsIkhlYWRlciIsImF4aW9zIiwiQXBwIiwicG9zdHMiLCJzZXRQb3N0cyIsImN1cnJQYWdlIiwic2V0Q3VyclBhZ2UiLCJ0b3RhbFBvc3RzIiwic2V0VG90YWxQb3N0cyIsInBvc3RzUGVyUGFnZSIsInNldFBvc3RzUGVyUGFnZSIsInJlRmV0Y2giLCJzZXRSZUZldGNoIiwiTk9URVNfVVJMIiwiZ2V0IiwidGhlbiIsInJlcyIsImhlYWRlcnMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJjYWxjUGFnZXNSYW5nZSIsIm1heFBhZ2UiLCJNYXRoIiwiY2VpbCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1pbiIsIl8iLCJpIiwic2V0UG9zdHNJblBhZ2UiLCJudW1iZXJPZlBvc3RzIiwiYWRkUG9zdCIsInBvc3QiLCJsYXN0UGFnZSIsInVwZGF0ZVBhZ2luYXRpb24iLCJzdGF0dXMiLCJ1cGRhdGVQb3N0IiwiaXRoIiwidGhlbmYiLCJjdXJpdGgiLCJwdXQiLCJkZWxldGVBY3Rpb24iLCJkZWxldGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlTnVtYmVyIiwiYmFzZVVybCIsInBhZ2VzUmFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.tsx\n"));

/***/ })

});