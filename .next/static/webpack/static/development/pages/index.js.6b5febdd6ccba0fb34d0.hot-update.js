webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/WithNavbar.js":
/*!*******************************!*\
  !*** ./layouts/WithNavbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.browser.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_favorite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/favorite */ "./store/favorite/index.js");















var WithNavbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithNavbar, _React$Component);

  function WithNavbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WithNavbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(WithNavbar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getCountFavorite",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var favorites;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _store_favorite__WEBPACK_IMPORTED_MODULE_13__["default"].store.getState();

            case 2:
              favorites = _context.sent;

              _this.setState({
                countFavorites: favorites ? favorites.length : 0
              });

              consola__WEBPACK_IMPORTED_MODULE_12___default.a.info('current favorites navbar ==>> ', favorites);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      countFavorites: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(WithNavbar, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getCountFavorite();

              case 2:
                _store_favorite__WEBPACK_IMPORTED_MODULE_13__["default"].store.subscribe(function () {
                  consola__WEBPACK_IMPORTED_MODULE_12___default.a.info('update state', _store_favorite__WEBPACK_IMPORTED_MODULE_13__["default"].store.getState());
                  var favorites = _store_favorite__WEBPACK_IMPORTED_MODULE_13__["default"].store.getState();

                  _this2.setState({
                    countFavorites: favorites ? favorites.length : 0
                  });
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() // async componentDidUpdate(prevProps, prevState, snapshot) {
    //     await this.getCountFavorite()
    // }

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("nav", {
        className: "flex items-center justify-between flex-wrap bg-teal-500 p-4"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "flex items-center flex-shrink-0 text-white mr-6"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "font-semibold text-xl tracking-tight cursor-pointer"
      }, "Weather app"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "block lg:hidden"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        className: "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("svg", {
        className: "fill-current h-3 w-3",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("title", null, "Menu"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("path", {
        d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "text-sm lg:flex-grow"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/favorite"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      }, "Favorites (", this.state.countFavorites, ")"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "pt-6 px-2"
      }, this.props.children));
    }
  }]);

  return WithNavbar;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WithNavbar);

/***/ })

})
//# sourceMappingURL=index.js.6b5febdd6ccba0fb34d0.hot-update.js.map