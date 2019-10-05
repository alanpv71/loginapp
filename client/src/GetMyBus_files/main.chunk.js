(window["webpackJsonpclient"] = window["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/Register */ "./src/components/auth/Register.js");
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth/Login */ "./src/components/auth/Login.js");
/* harmony import */ var _components_layouts_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layouts/Dashboard */ "./src/components/layouts/Dashboard.js");
var _jsxFileName = "/home/alan/GetMyBus/client/src/App.js";







class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "hiiiiii", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/dashboard",
      component: _components_layouts_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/register",
      component: _components_auth_Register__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/login",
      component: _components_auth_Login__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/auth/Login.js":
/*!**************************************!*\
  !*** ./src/components/auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Header */ "./src/components/layouts/Header.js");
var _jsxFileName = "/home/alan/GetMyBus/client/src/components/auth/Login.js";





class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      email: "",
      password: "",
      error: {}
    };

    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      const newUser = {
        email: this.state.email,
        password: this.state.password
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/users/login', newUser).then(res => this.props.history.push('/dashboard')).catch(err => this.setState({
        error: err.response.data
      }));
    };
  }

  render() {
    const _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password,
          error = _this$state.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-8 m-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mt-5 text-center mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Login Here"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      name: "email",
      value: email,
      onChange: this.handleChange,
      className: error.type === "email" ? "is-invalid form-control" : "form-control",
      placeholder: "Email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "invalid-feedback",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, error.msg)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      name: "password",
      value: password,
      onChange: this.handleChange,
      className: error.type === "password" ? "is-invalid form-control" : "form-control",
      placeholder: "Password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "invalid-feedback",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, error.msg)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      className: "btn btn-dark justify-content-center d-flex w-100",
      value: "Login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/auth/Register.js":
/*!*****************************************!*\
  !*** ./src/components/auth/Register.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Header */ "./src/components/layouts/Header.js");
var _jsxFileName = "/home/alan/GetMyBus/client/src/components/auth/Register.js";




class Register extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: {}
    };

    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      const newUser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/users/register', newUser).then(res => this.props.history.push('/login')).catch(err => this.setState({
        error: err.response.data
      }));
    };
  }

  render() {
    const _this$state = this.state,
          username = _this$state.username,
          email = _this$state.email,
          password = _this$state.password,
          error = _this$state.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-8 m-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mt-5 text-center mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Register Here"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "username",
      value: username,
      onChange: this.handleChange,
      className: error.type === "username" ? "is-invalid form-control" : "form-control",
      placeholder: "Username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "invalid-feedback",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, error.msg)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      name: "email",
      value: email,
      onChange: this.handleChange,
      className: error.type === "email" ? "is-invalid form-control" : "form-control",
      placeholder: "Email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "invalid-feedback",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, error.msg)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      name: "password",
      value: password,
      onChange: this.handleChange,
      className: error.type === "password" ? "is-invalid form-control" : "form-control",
      placeholder: "Password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "invalid-feedback",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, error.msg)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      className: "btn btn-dark justify-content-center d-flex w-100",
      value: "Register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./src/components/layouts/Dashboard.js":
/*!*********************************************!*\
  !*** ./src/components/layouts/Dashboard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "../node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "../node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/alan/GetMyBus/client/src/components/layouts/Dashboard.js";




class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      startDate: new Date()
    };

    this.handleChange = date => {
      this.setState({
        startDate: date
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-8 m-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mt-5 text-center mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Welcome"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "book-form",
      id: "register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Plan Your Trip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      action: "#",
      method: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-md-3 form-time-w3layouts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, " Starting Point "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      class: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "From"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Bangalore"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Mysore"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "S.Bathery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Nilambur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Kozhikode"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-md-3 form-left-agileits-w3layouts ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, " Destination"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      class: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "To"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Bangalore"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Mysore"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "S.Bathery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Nilambur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Kozhikode"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-md-3 form-date-w3-agileits",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Departure Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
      selected: this.state.startDate,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-md-3 form-left-agileits-submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "Search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/components/layouts/Header.js":
/*!******************************************!*\
  !*** ./src/components/layouts/Header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/alan/GetMyBus/client/src/components/layouts/Header.js";



const Header = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-dark bg-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/register",
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Register")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/login",
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Login"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/alan/GetMyBus/client/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/alan/GetMyBus/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/alan/GetMyBus/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map