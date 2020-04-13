webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/FoodSearchReducer.js":
/*!*****************************************!*\
  !*** ./components/FoodSearchReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FoodSearchReducer = function FoodSearchReducer(state, action) {
  var newState = _objectSpread({}, state);

  switch (action.type) {
    default:
      new Error();
  }

  return newState;
};

/* harmony default export */ __webpack_exports__["default"] = (Food);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

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
/* harmony import */ var _components_FoodSearchReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FoodSearchReducer */ "./components/FoodSearchReducer.js");


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

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_components_FoodSearchReducer__WEBPACK_IMPORTED_MODULE_7__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_components_InputSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputQuery: inputQuery,
    handleInput: handleInput,
    handleSearchButton: handleSearchButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_components_Display__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FoodSearch);
/*
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import InputSearch from '../components/InputSearch';
import Display from '../components/Display';

const FoodSearch = () => {
  const [data, setFetchData] = useState("");
  const [inputQuery, setInputQuery] = useState("");
  const [isSearch, setSearch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const searchURL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=GiSVQi6vc4bkITDFpqevACfryGTKgtKeRaE6FR98&query=${inputQuery}`;
      const resp = await fetch(searchURL);
      const jsonData = await resp.json();
      setFetchData(jsonData);
      setSearch(false);
    };
    
    if (isSearch) {
      fetchData();
    }
  }, [isSearch]);

  const handleInput = (event) => {
    setInputQuery(event.target.value);
  };

  const handleSearchButton = () => {
    setSearch(true);
  };

  return (
    <Layout>
      <InputSearch
        inputQuery={inputQuery}
        handleInput={handleInput}
        handleSearchButton={handleSearchButton}
      />
      <Display data={data}/>
    </Layout>
  );
};

export default FoodSearch;
*/

/***/ })

})
//# sourceMappingURL=index.js.8431556e426ea7a0abe6.hot-update.js.map