webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _layouts_WithNavbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/WithNavbar */ "./layouts/WithNavbar.js");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Alert */ "./components/Alert.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.browser.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _helpers_request__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../helpers/request */ "./helpers/request.js");
/* harmony import */ var _store_favorite__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../store/favorite */ "./store/favorite/index.js");









var _jsxFileName = "/Users/agungrizkyana/Public/myproject/learn-next/weather-app/pages/index.js";










var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getForecast",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var getForecast;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                consola__WEBPACK_IMPORTED_MODULE_13___default.a.info('your city', _this.state.city);

                _this.setState({
                  loading: true
                });

                _context.next = 5;
                return Object(_helpers_request__WEBPACK_IMPORTED_MODULE_16__["forecast"])({
                  method: 'GET',
                  params: {
                    q: _this.state.city
                  }
                });

              case 5:
                getForecast = _context.sent;

                _this.setState({
                  forecast: getForecast.data,
                  loading: false
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "changeCity", function (e) {
      _this.setState({
        city: e.target.value,
        error: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "addToFavorite",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(city) {
        var find;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return lodash__WEBPACK_IMPORTED_MODULE_14___default.a.find(_store_favorite__WEBPACK_IMPORTED_MODULE_17__["default"].store.getState(), {
                  city: city
                });

              case 2:
                find = _context2.sent;

                if (!find) {
                  _context2.next = 8;
                  break;
                }

                consola__WEBPACK_IMPORTED_MODULE_13___default.a.info("".concat(city, " has been added to favorite"));

                _this.setState({
                  error: "".concat(city, " has been added to favorite")
                });

                _context2.next = 11;
                break;

              case 8:
                _context2.next = 10;
                return _store_favorite__WEBPACK_IMPORTED_MODULE_17__["default"].store.dispatch(_store_favorite__WEBPACK_IMPORTED_MODULE_17__["default"].action.addToFavorite(city));

              case 10:
                consola__WEBPACK_IMPORTED_MODULE_13___default.a.info('current favorite', _store_favorite__WEBPACK_IMPORTED_MODULE_17__["default"].store.getState());

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.state = {
      loading: false,
      city: 'Bandung',
      // default bandung
      forecast: {
        "location": {
          "name": "Bandung",
          "region": "West Java",
          "country": "Indonesia",
          "lat": -7.44,
          "lon": 111.46,
          "tz_id": "Asia/Jakarta",
          "localtime_epoch": 1561443045,
          "localtime": "2019-06-25 13:10"
        },
        "current": {
          "last_updated_epoch": 1561442078,
          "last_updated": "2019-06-25 12:54",
          "temp_c": 30.7,
          "temp_f": 87.3,
          "is_day": 1,
          "condition": {
            "text": "Sunny",
            "icon": "//cdn.apixu.com/weather/64x64/day/113.png",
            "code": 1000
          },
          "wind_mph": 2.9,
          "wind_kph": 4.7,
          "wind_degree": 177,
          "wind_dir": "S",
          "pressure_mb": 1014,
          "pressure_in": 30.4,
          "precip_mm": 0,
          "precip_in": 0,
          "humidity": 55,
          "cloud": 0,
          "feelslike_c": 33.6,
          "feelslike_f": 92.5,
          "vis_km": 10,
          "vis_miles": 6,
          "uv": 8,
          "gust_mph": 3.4,
          "gust_kph": 5.4
        },
        "forecast": {
          "forecastday": [{
            "date": "2019-06-25",
            "date_epoch": 1561420800,
            "day": {
              "maxtemp_c": 35,
              "maxtemp_f": 95,
              "mintemp_c": 22.5,
              "mintemp_f": 72.5,
              "avgtemp_c": 27.7,
              "avgtemp_f": 81.9,
              "maxwind_mph": 6.7,
              "maxwind_kph": 10.8,
              "totalprecip_mm": 0,
              "totalprecip_in": 0,
              "avgvis_km": 10,
              "avgvis_miles": 6,
              "avghumidity": 70,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                "code": 1003
              },
              "uv": 10
            },
            "astro": {
              "sunrise": "05:46 AM",
              "sunset": "05:28 PM",
              "moonrise": "11:54 PM",
              "moonset": "11:36 AM"
            }
          }]
        }
      },
      favorite: [],
      error: null
    };
    _this.addToFavorite = _this.addToFavorite.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      consola__WEBPACK_IMPORTED_MODULE_13___default.a.info('query', this.props.url);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var ErrorMessage = function ErrorMessage() {
        if (_this2.state.error) {
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
            className: "mt-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("small", {
            className: "text-red-500",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, _this2.state.error));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("small", {
            className: "text-red-500",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          });
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "container mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Search city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("form", {
        className: "flex",
        onSubmit: this.getForecast.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "flex-auto w-3/4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        onChange: this.changeCity.bind(this),
        type: "text",
        className: "bg-white border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal",
        placeholder: "Type city name, example: Bandung",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "flex-auto w-1/4 px-1 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        type: "submit",
        className: "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, this.state.loading ? 'Loading...' : 'Get forecast'))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "bg-white rounded-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "text-center w-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1", {
        className: "text-6xl align-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, this.state.forecast.location.name), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "text-4xl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, this.state.forecast.current.temp_c, " \xB0")))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "flex mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "w-1/2 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
        className: "float-right align-middle",
        src: this.state.forecast.current.condition.icon,
        alt: "icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "w-1/2 py-5 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "align-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, this.state.forecast.current.condition.text))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "w-full text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.addToFavorite(_this2.state.forecast.location.name);
        },
        type: "button",
        className: "px-2 py-2 rounded focus:outline-none hover:bg-green-600 border border-green-500 bg-green-500 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Add to favorite"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(ErrorMessage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "flex mt-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "w-1/4  h-12  text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Wind"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, this.state.forecast.current.wind_mph, " mph")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "w-1/4  h-12  text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Pressure"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, this.state.forecast.current.pressure_in, " bar")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "w-1/4  h-12  text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "Humidity"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, this.state.forecast.current.humidity, " %")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "w-1/4  h-12  text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "Feels like"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, this.state.forecast.current.feelslike_c, " \xB0")))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_layouts_WithNavbar__WEBPACK_IMPORTED_MODULE_9__["default"])(Index));

/***/ })

})
//# sourceMappingURL=index.js.129fe4c463cc83850751.hot-update.js.map