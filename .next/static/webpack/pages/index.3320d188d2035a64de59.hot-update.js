webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Register.js":
/*!********************************!*\
  !*** ./components/Register.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/baseUrl */ "./helpers/baseUrl.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\React\\speechtt\\components\\Register.js",
    _s = $RefreshSig$();





const Register = () => {
  _s();

  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: surname,
    1: setSurname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const userSignup = async e => {
    e.preventDefault();
    const res = await fetch(`${_helpers_baseUrl__WEBPACK_IMPORTED_MODULE_2__["default"]}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        password
      })
    });
    const res2 = await res.json();

    if (res2.error) {//Başarısız olduğuna dair ekranda mesaj gelecek
    } else {
      //Başarılı olduğuna dair ekranda mesaj gelecek
      router.push('/upload');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "Login",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " pt-2 pl-2 pr-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: e => userSignup(e),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-outline",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "form3Example1",
                className: "form-control",
                value: name,
                onChange: e => setName(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "form-label",
                for: "form3Example1",
                children: "First name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-outline",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "form3Example2",
                className: "form-control",
                value: surname,
                onChange: e => setSurname(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "form-label",
                for: "form3Example2",
                children: "Last name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-outline mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            id: "form3Example3",
            className: "form-control",
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "form-label",
            for: "form3Example3",
            children: "Email address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-outline mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            id: "form3Example4",
            className: "form-control",
            value: password,
            onChange: e => setPassword(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "form-label",
            for: "form3Example4",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary btn-block mb-4",
          children: "Sign up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, undefined);
};

_s(Register, "zZtzGVLQaRYfocNQ3ZDYZ30ISII=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJzdXJuYW1lIiwic2V0U3VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlclNpZ251cCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwiYmFzZVVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlczIiLCJqc29uIiwiZXJyb3IiLCJwdXNoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFLO0FBQUE7O0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFpQkMsc0RBQVEsQ0FBQyxFQUFELENBQS9CO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXVCRixzREFBUSxDQUFDLEVBQUQsQ0FBckM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csS0FBRDtBQUFBLE9BQU9DO0FBQVAsTUFBbUJKLHNEQUFRLENBQUMsRUFBRCxDQUFqQztBQUNBLFFBQU07QUFBQSxPQUFDSyxRQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF5Qk4sc0RBQVEsQ0FBQyxFQUFELENBQXZDO0FBQ0EsUUFBTU8sTUFBTSxHQUFJQyw2REFBUyxFQUF6Qjs7QUFFQSxRQUFNQyxVQUFVLEdBQUcsTUFBT0MsQ0FBUCxJQUFZO0FBQzNCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNQyxHQUFHLEdBQUssTUFBTUMsS0FBSyxDQUFFLEdBQUVDLHdEQUFRLGFBQVosRUFBeUI7QUFDOUNDLFlBQU0sRUFBQyxNQUR1QztB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V0FBVyxDQUFDSSxDQUFDLENBQUNjLE1BQUYsQ0FBU0MsS0FBVjtBQUYxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUk7QUFBTyxxQkFBUyxFQUFDLFlBQWpCO0FBQThCLGVBQUcsRUFBQyxlQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0JKLGVBc0NJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyxnQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUErQ0UsQ0E3RU47O0dBQU01QixRO1VBS2NXLHFEOzs7S0FMZFgsUTtBQThFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzMyMGQxODhkMjAzNWE2NGRlNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi9oZWxwZXJzL2Jhc2VVcmwnIFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT57XHJcbiAgICBjb25zdCBbbmFtZSxzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbc3VybmFtZSxzZXRTdXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbZW1haWwsc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3Qgcm91dGVyICA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgdXNlclNpZ251cCA9IGFzeW5jIChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCByZXMgPSAgIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9zaWdudXBgLHtcclxuICAgICAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHN1cm5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZXMyID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIGlmKHJlczIuZXJyb3Ipe1xyXG4gICAgICAgICAgICAvL0JhxZ9hcsSxc8SxeiBvbGR1xJ91bmEgZGFpciBla3JhbmRhIG1lc2FqIGdlbGVjZWtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy9CYcWfYXLEsWzEsSBvbGR1xJ91bmEgZGFpciBla3JhbmRhIG1lc2FqIGdlbGVjZWtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy91cGxvYWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB0LTIgcGwtMiBwci0yXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+dXNlclNpZ251cChlKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybTNFeGFtcGxlMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCIgZm9yPVwiZm9ybTNFeGFtcGxlMVwiPkZpcnN0IG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybTNFeGFtcGxlMlwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1cm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFN1cm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCIgZm9yPVwiZm9ybTNFeGFtcGxlMlwiPkxhc3QgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3V0bGluZSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJmb3JtM0V4YW1wbGUzXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIGZvcj1cImZvcm0zRXhhbXBsZTNcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW91dGxpbmUgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiZm9ybTNFeGFtcGxlNFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIiBmb3I9XCJmb3JtM0V4YW1wbGU0XCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIG1iLTRcIj5TaWduIHVwPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKX1cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9