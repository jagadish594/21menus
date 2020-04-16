webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Display.js":
/*!*******************************!*\
  !*** ./components/Display.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\myReact-Redux\\21Menus\\21menus\\components\\Display.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Display = function Display(props) {
  var foods = [];

  if (props.data.foods) {
    foods = props.data.foods;
  }

  return __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, foods ? foods.map(function (food) {
    return __jsx("li", {
      key: food.fdcId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(food.fdcId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, food.fdcId, " - ", food.brandOwner)));
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ })

})
//# sourceMappingURL=index.js.72cf80eba333c5f04b10.hot-update.js.map