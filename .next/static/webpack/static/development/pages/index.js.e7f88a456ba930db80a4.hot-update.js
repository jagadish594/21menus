webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/FoodSearch.js":
/*!*****************************!*\
  !*** ./pages/FoodSearch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_InputSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputSearch */ "./components/InputSearch.js");
/* harmony import */ var _components_Display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Display */ "./components/Display.js");


var _this = undefined,
    _jsxFileName = "C:\\myReact-Redux\\21Menus\\21menus\\pages\\FoodSearch.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var FoodSearch = function FoodSearch() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      data = _useState[0],
      setFetchData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      inputQuery = _useState2[0],
      setInputQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isSearch = _useState3[0],
      setSearch = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var searchURL, resp, jsonData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              searchURL = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=GiSVQi6vc4bkITDFpqevACfryGTKgtKeRaE6FR98&query=".concat(inputQuery);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(searchURL));

            case 3:
              resp = _context.sent;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resp.json());

            case 6:
              jsonData = _context.sent;
              setFetchData(jsonData);
              setSearch(false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    if (isSearch) {
      fetchData();
    }
  }, [isSearch]);

  var handleInput = function handleInput(event) {
    setInputQuery(event.target.value);
  };

  var handleSearchButton = function handleSearchButton() {
    setSearch(true);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_components_InputSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputQuery: inputQuery,
    handleInput: handleInput,
    handleSearchButton: handleSearchButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(_components_Display__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FoodSearch);

/***/ })

})
//# sourceMappingURL=index.js.e7f88a456ba930db80a4.hot-update.js.map