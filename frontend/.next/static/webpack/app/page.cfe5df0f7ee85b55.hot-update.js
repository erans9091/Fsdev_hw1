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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Page */ \"(app-pages-browser)/./app/components/Page.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Pagination */ \"(app-pages-browser)/./app/components/Pagination.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./app/components/Header.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import script from \"../../scripts/generateNotes\"\nconst App = ()=>{\n    _s();\n    //   console.log(script())\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currPage, setCurrPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPosts, setTotalPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [postsPerPage, setPostsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [reFetch, setReFetch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const NOTES_URL = \"http://localhost:3001/notes\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(NOTES_URL + \"?_page=\".concat(currPage) + \"&_limit=\".concat(postsPerPage)).then((res)=>{\n            // res.headers[\"x-total-count\"] &&     TODO?\n            setTotalPosts(+res.headers[\"x-total-count\"]);\n            setPosts(res.data // TODO sort?\n            );\n            console.log(res.data);\n        }).catch((error)=>{\n            console.log(\"Encountered an error:\" + error);\n        });\n    }, [\n        currPage,\n        postsPerPage,\n        reFetch\n    ]);\n    const calcPagesRange = ()=>{\n        const maxPage = Math.ceil(totalPosts / postsPerPage);\n        if (currPage <= 3) {\n            return Array.from({\n                length: Math.min(maxPage, 5)\n            }, (_, i)=>i + 1);\n        }\n        if (currPage > maxPage - 2) {\n            return [\n                maxPage - 4,\n                maxPage - 3,\n                maxPage - 2,\n                maxPage - 1,\n                maxPage\n            ];\n        }\n        return [\n            currPage - 2,\n            currPage - 1,\n            currPage,\n            currPage + 1,\n            currPage + 2\n        ];\n    };\n    const setPostsInPage = (numberOfPosts)=>{\n        setCurrPage(1);\n        setPostsPerPage(numberOfPosts);\n    };\n    // id: number,\n    // title: string,\n    // author: Author,\n    // content: string\n    const addPost = (post)=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(NOTES_URL, {\n            post\n        }).then((res)=>{\n            const lastPage = Math.ceil(totalPosts / postsPerPage);\n            res.status === 201 && currPage === lastPage && //posts.length < postsPerPage &&\n            // setReFetch((prev) => !prev); TODO fix\n            setTotalPosts(totalPosts + 1);\n            console.log(\"Post added successfully\", res.status);\n        }).catch((error)=>{\n            console.error(\"Error adding post:\", error);\n            return error.status;\n        });\n        return 0;\n    };\n    const updatePost = async (ith, post, thenf)=>{\n        const curith = postsPerPage * (currPage - 1) + ith;\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(NOTES_URL + \"/\" + curith, {\n            post\n        }).then(thenf).catch((error)=>console.error(\"Error updating post:\", error));\n    };\n    const deleteAction = async (ith)=>{\n        const curith = postsPerPage * (currPage - 1) + ith;\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].delete(NOTES_URL + \"/\" + curith).then((res)=>{\n            if (res.status == 204) {\n                setTotalPosts(totalPosts - 1); //triger rerender\n                if (totalPosts == curith && totalPosts % postsPerPage == 1) {\n                    //means we deleted the last post in the current page\n                    setCurrPage(currPage - 1);\n                }\n                console.log(\"Post deleted succesfully\");\n            } else if (res.status == 500) {\n                console.log(\"Can't deleted post\");\n            }\n        }).catch((error)=>console.error(\"Error updating post:\", error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                postsPerPage: postsPerPage,\n                setPostsPerPage: setPostsInPage\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                posts: posts,\n                pageNumber: currPage,\n                baseUrl: NOTES_URL,\n                addPost: addPost,\n                setReFetch: setReFetch,\n                updatePost: updatePost,\n                deleteAction: deleteAction\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currPage: currPage,\n                setCurrPage: setCurrPage,\n                pagesRange: calcPagesRange(),\n                maxPage: Math.ceil(totalPosts / postsPerPage)\n            }, void 0, false, {\n                fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eransht/study/FSdev/Fsdev_hw1/app/App.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"pXybpxpjFYAOd6nb1B69k2Z5kxU=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixlQUFlLE9BQU9KO1FBQzFCLE1BQU1FLFNBQVNqQyxlQUFnQkosQ0FBQUEsV0FBVyxLQUFLbUM7UUFDL0N2Qyw2Q0FBS0EsQ0FDRjRDLE1BQU0sQ0FBQ2hDLFlBQVksTUFBTTZCLFFBQ3pCM0IsSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSUEsSUFBSXNCLE1BQU0sSUFBSSxLQUFLO2dCQUNyQjlCLGNBQWNELGFBQWEsSUFBRyxpQkFBaUI7Z0JBQy9DLElBQUlBLGNBQWNtQyxVQUFVbkMsYUFBYUUsZ0JBQWdCLEdBQUc7b0JBQzFELG9EQUFvRDtvQkFDcERILFlBQVlELFdBQVc7Z0JBQ3pCO2dCQUNBYyxRQUFRQyxHQUFHLENBQUM7WUFDZCxPQUFPLElBQUlKLElBQUlzQixNQUFNLElBQUksS0FBSztnQkFDNUJuQixRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUVGLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVSCxRQUFRRyxLQUFLLENBQUMsd0JBQXdCQTtJQUU1RDtJQUNBLHFCQUNFLDhEQUFDd0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUMvQywwREFBTUE7Z0JBQUNTLGNBQWNBO2dCQUFjQyxpQkFBaUJ1Qjs7Ozs7OzBCQUNyRCw4REFBQ25DLHdEQUFJQTtnQkFDSEssT0FBT0E7Z0JBQ1A2QyxZQUFZM0M7Z0JBQ1o0QyxTQUFTcEM7Z0JBQ1RzQixTQUFTQTtnQkFDVHZCLFlBQVlBO2dCQUNaMkIsWUFBWUE7Z0JBQ1pLLGNBQWNBOzs7Ozs7MEJBRWhCLDhEQUFDN0MsOERBQVVBO2dCQUNUTSxVQUFVQTtnQkFDVkMsYUFBYUE7Z0JBQ2I0QyxZQUFZM0I7Z0JBQ1pDLFNBQVNDLEtBQUtDLElBQUksQ0FBQ25CLGFBQWFFOzs7Ozs7Ozs7Ozs7QUFJeEM7R0EvR01QO0tBQUFBO0FBaUhOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9BcHAudHN4P2Q2MDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBQYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHsgUG9zdFBhcmFtcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8vIGltcG9ydCBzY3JpcHQgZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhdGVOb3Rlc1wiXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhzY3JpcHQoKSlcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXJyUGFnZSwgc2V0Q3VyclBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFt0b3RhbFBvc3RzLCBzZXRUb3RhbFBvc3RzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcG9zdHNQZXJQYWdlLCBzZXRQb3N0c1BlclBhZ2VdID0gdXNlU3RhdGUoMTApO1xuICBjb25zdCBbcmVGZXRjaCwgc2V0UmVGZXRjaF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBOT1RFU19VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ub3Rlc1wiO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoTk9URVNfVVJMICsgYD9fcGFnZT0ke2N1cnJQYWdlfWAgKyBgJl9saW1pdD0ke3Bvc3RzUGVyUGFnZX1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyByZXMuaGVhZGVyc1tcIngtdG90YWwtY291bnRcIl0gJiYgICAgIFRPRE8/XG4gICAgICAgIHNldFRvdGFsUG9zdHMoK3Jlcy5oZWFkZXJzW1wieC10b3RhbC1jb3VudFwiXSk7XG4gICAgICAgIHNldFBvc3RzKFxuICAgICAgICAgIHJlcy5kYXRhIC8vIFRPRE8gc29ydD9cbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFbmNvdW50ZXJlZCBhbiBlcnJvcjpcIiArIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbY3VyclBhZ2UsIHBvc3RzUGVyUGFnZSwgcmVGZXRjaF0pO1xuXG4gIGNvbnN0IGNhbGNQYWdlc1JhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1heFBhZ2UgPSBNYXRoLmNlaWwodG90YWxQb3N0cyAvIHBvc3RzUGVyUGFnZSk7XG4gICAgaWYgKGN1cnJQYWdlIDw9IDMpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNYXRoLm1pbihtYXhQYWdlLCA1KSB9LCAoXywgaSkgPT4gaSArIDEpO1xuICAgIH1cbiAgICBpZiAoY3VyclBhZ2UgPiBtYXhQYWdlIC0gMikge1xuICAgICAgcmV0dXJuIFttYXhQYWdlIC0gNCwgbWF4UGFnZSAtIDMsIG1heFBhZ2UgLSAyLCBtYXhQYWdlIC0gMSwgbWF4UGFnZV07XG4gICAgfVxuICAgIHJldHVybiBbY3VyclBhZ2UgLSAyLCBjdXJyUGFnZSAtIDEsIGN1cnJQYWdlLCBjdXJyUGFnZSArIDEsIGN1cnJQYWdlICsgMl07XG4gIH07XG5cbiAgY29uc3Qgc2V0UG9zdHNJblBhZ2UgPSAobnVtYmVyT2ZQb3N0czogbnVtYmVyKSA9PiB7XG4gICAgc2V0Q3VyclBhZ2UoMSk7XG4gICAgc2V0UG9zdHNQZXJQYWdlKG51bWJlck9mUG9zdHMpO1xuICB9O1xuXG4gIC8vIGlkOiBudW1iZXIsXG4gIC8vIHRpdGxlOiBzdHJpbmcsXG4gIC8vIGF1dGhvcjogQXV0aG9yLFxuICAvLyBjb250ZW50OiBzdHJpbmdcbiAgY29uc3QgYWRkUG9zdCA9IChwb3N0OiBQb3N0UGFyYW1zKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KE5PVEVTX1VSTCwgeyBwb3N0IH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsUG9zdHMgLyBwb3N0c1BlclBhZ2UpO1xuICAgICAgICByZXMuc3RhdHVzID09PSAyMDEgJiZcbiAgICAgICAgICBjdXJyUGFnZSA9PT0gbGFzdFBhZ2UgJiZcbiAgICAgICAgICAvL3Bvc3RzLmxlbmd0aCA8IHBvc3RzUGVyUGFnZSAmJlxuICAgICAgICAgIC8vIHNldFJlRmV0Y2goKHByZXYpID0+ICFwcmV2KTsgVE9ETyBmaXhcbiAgICAgICAgICBzZXRUb3RhbFBvc3RzKHRvdGFsUG9zdHMgKyAxKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJQb3N0IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLCByZXMuc3RhdHVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgcG9zdDpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3Iuc3RhdHVzO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIDA7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZVBvc3QgPSBhc3luYyAoaXRoOiBudW1iZXIsIHBvc3Q6IFBvc3RQYXJhbXMsIHRoZW5mOiAocmVzOiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICBjb25zdCBjdXJpdGggPSBwb3N0c1BlclBhZ2UgKiAoY3VyclBhZ2UgLSAxKSArIGl0aDtcbiAgICBheGlvc1xuICAgICAgLnB1dChOT1RFU19VUkwgKyBcIi9cIiArIGN1cml0aCwgeyBwb3N0IH0pXG4gICAgICAudGhlbih0aGVuZilcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwb3N0OlwiLCBlcnJvcikpO1xuICB9XG4gIGNvbnN0IGRlbGV0ZUFjdGlvbiA9IGFzeW5jIChpdGg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGN1cml0aCA9IHBvc3RzUGVyUGFnZSAqIChjdXJyUGFnZSAtIDEpICsgaXRoO1xuICAgIGF4aW9zXG4gICAgICAuZGVsZXRlKE5PVEVTX1VSTCArIFwiL1wiICsgY3VyaXRoKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDQpIHtcbiAgICAgICAgICBzZXRUb3RhbFBvc3RzKHRvdGFsUG9zdHMgLSAxKTsvL3RyaWdlciByZXJlbmRlclxuICAgICAgICAgIGlmICh0b3RhbFBvc3RzID09IGN1cml0aCAmJiB0b3RhbFBvc3RzICUgcG9zdHNQZXJQYWdlID09IDEpIHtcbiAgICAgICAgICAgIC8vbWVhbnMgd2UgZGVsZXRlZCB0aGUgbGFzdCBwb3N0IGluIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIHNldEN1cnJQYWdlKGN1cnJQYWdlIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUG9zdCBkZWxldGVkIHN1Y2Nlc2Z1bGx5XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcy5zdGF0dXMgPT0gNTAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDYW4ndCBkZWxldGVkIHBvc3RcIik7XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwb3N0OlwiLCBlcnJvcikpO1xuXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgIDxIZWFkZXIgcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9IHNldFBvc3RzUGVyUGFnZT17c2V0UG9zdHNJblBhZ2V9IC8+XG4gICAgICA8UGFnZVxuICAgICAgICBwb3N0cz17cG9zdHN9XG4gICAgICAgIHBhZ2VOdW1iZXI9e2N1cnJQYWdlfVxuICAgICAgICBiYXNlVXJsPXtOT1RFU19VUkx9XG4gICAgICAgIGFkZFBvc3Q9e2FkZFBvc3R9XG4gICAgICAgIHNldFJlRmV0Y2g9e3NldFJlRmV0Y2h9XG4gICAgICAgIHVwZGF0ZVBvc3Q9e3VwZGF0ZVBvc3R9XG4gICAgICAgIGRlbGV0ZUFjdGlvbj17ZGVsZXRlQWN0aW9ufVxuICAgICAgLz5cbiAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgIGN1cnJQYWdlPXtjdXJyUGFnZX1cbiAgICAgICAgc2V0Q3VyclBhZ2U9e3NldEN1cnJQYWdlfVxuICAgICAgICBwYWdlc1JhbmdlPXtjYWxjUGFnZXNSYW5nZSgpfVxuICAgICAgICBtYXhQYWdlPXtNYXRoLmNlaWwodG90YWxQb3N0cyAvIHBvc3RzUGVyUGFnZSl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUGFnZSIsIlBhZ2luYXRpb24iLCJIZWFkZXIiLCJheGlvcyIsIkFwcCIsInBvc3RzIiwic2V0UG9zdHMiLCJjdXJyUGFnZSIsInNldEN1cnJQYWdlIiwidG90YWxQb3N0cyIsInNldFRvdGFsUG9zdHMiLCJwb3N0c1BlclBhZ2UiLCJzZXRQb3N0c1BlclBhZ2UiLCJyZUZldGNoIiwic2V0UmVGZXRjaCIsIk5PVEVTX1VSTCIsImdldCIsInRoZW4iLCJyZXMiLCJoZWFkZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiY2FsY1BhZ2VzUmFuZ2UiLCJtYXhQYWdlIiwiTWF0aCIsImNlaWwiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtaW4iLCJfIiwiaSIsInNldFBvc3RzSW5QYWdlIiwibnVtYmVyT2ZQb3N0cyIsImFkZFBvc3QiLCJwb3N0IiwibGFzdFBhZ2UiLCJzdGF0dXMiLCJ1cGRhdGVQb3N0IiwiaXRoIiwidGhlbmYiLCJjdXJpdGgiLCJwdXQiLCJkZWxldGVBY3Rpb24iLCJkZWxldGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlTnVtYmVyIiwiYmFzZVVybCIsInBhZ2VzUmFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/App.tsx\n"));

/***/ })

});