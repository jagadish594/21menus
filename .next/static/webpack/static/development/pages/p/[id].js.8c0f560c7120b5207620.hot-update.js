webpackHotUpdate("static\\development\\pages\\p\\[id].js",{

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _myKeys_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../myKeys.json */ "./myKeys.json");
var _myKeys_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../myKeys.json */ "./myKeys.json", 1);


var _this = undefined,
    _jsxFileName = "C:\\myReact-Redux\\21Menus\\21menus\\pages\\p\\[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Result = function Result(props) {
  if (!props.brandOwner || !pro) {
    return null;
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  });
};

var FoodDetailsPage = function FoodDetailsPage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var fdcId = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      foodDetails = _useState[0],
      setFoodDetails = _useState[1];

  var brandOwner, ingredients;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var response, jsonData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.nal.usda.gov/fdc/v1/food/".concat(fdcId, "?api_key=").concat(_myKeys_json__WEBPACK_IMPORTED_MODULE_5__.usda)));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 5:
              jsonData = _context.sent;
              setFoodDetails(jsonData);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    fetchData();
  }, [fdcId]); //({ brandOwner="", ingredients="" } = foodDetails);
  // if(foodDetails){
  //   console.log("fooddetails: ", foodDetails);
  //   ({ brandOwner, ingredients } = foodDetails);
  //   console.log("length: ", brandOwner.length);
  // }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Back")), brandOwner.length > 0 ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 31
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "Brand: ", brandOwner), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, "ingredients: ", ingredients)) : __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 31
    }
  }, "No data found"));
};

/* harmony default export */ __webpack_exports__["default"] = (FoodDetailsPage);

/***/ })

})
//# sourceMappingURL=[id].js.8c0f560c7120b5207620.hot-update.js.map