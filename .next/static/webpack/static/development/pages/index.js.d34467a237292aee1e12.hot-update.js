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
    case "FETCH-DATA":
      newState.data = action.value;
      newState.isLocalStorage = action.payload;
      break;

    case "INPUT-QUERY":
      newState.inputQuery = action.value;
      break;

    case "IS-SEARCH":
      newState.isSearch = action.value;
      break;

    case "SEARCH":
      newState.isSearch = true;
      break;

    default:
      new Error();
  }

  return newState;
};

/* harmony default export */ __webpack_exports__["default"] = (FoodSearchReducer);

/***/ })

})
//# sourceMappingURL=index.js.d34467a237292aee1e12.hot-update.js.map