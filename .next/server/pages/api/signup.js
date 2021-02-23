module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/initDB.js":
/*!***************************!*\
  !*** ./helpers/initDB.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
//bhtspeech@gmail.com bht123456
//RpRdgc8EfRX5Y7bY


function initDB() {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log("ALREADY CONNECTED");
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb+srv://speechtotext:RpRdgc8EfRX5Y7bY@cluster0.adaqf.mongodb.net/speechtotext?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.once('open', function () {
    console.log('Conection has been made!');
  }).on('error', function (error) {
    console.log('Error is: ', error);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (initDB);

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin", "root"]
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema));

/***/ }),

/***/ "./pages/api/signup.js":
/*!*****************************!*\
  !*** ./pages/api/signup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_initDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/initDB */ "./helpers/initDB.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ "./models/User.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);



Object(_helpers_initDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    name,
    surname,
    email,
    password
  } = req.body;

  try {
    if (!name || !surname || !email || !password) {
      return res.status(422).json({
        error: "Lütfen tüm alanları doldurunuz."
      });
    }

    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      email
    });

    if (user) {
      return res.status(422).json({
        error: "Bu mail adresiyle bir kullanıcı bulunmakta."
      });
    } // const hashedPassword= await bcrypt.hash(password,12)  
    // const newUser = await new User({
    //     name,
    //     surname,
    //     email,
    //     password:hashedPassword
    //  }).save()
    // console.log(newUser)


    res.status(201).json({
      message: "Kayıt Başarılı"
    });
  } catch (err) {
    console.log(err);
  }
});

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9pbml0REIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiaW5pdERCIiwibW9uZ29vc2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb24iLCJvbmNlIiwib24iLCJlcnJvciIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwic3VybmFtZSIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsImVudW0iLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIiwicmVxIiwicmVzIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJ1c2VyIiwiZmluZE9uZSIsIm1lc3NhZ2UiLCJlcnIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7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LENBQW5COztBQUNBLFFBQUdlLElBQUgsRUFBUTtBQUNKLGFBQU9KLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUN0QixhQUFLLEVBQUM7QUFBUCxPQUFyQixDQUFQO0FBQ0gsS0FQRixDQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0M7OztBQUNDbUIsT0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0csYUFBTyxFQUFDO0FBQVQsS0FBckI7QUFFSCxHQWxCRCxDQWtCQyxPQUFNQyxHQUFOLEVBQVU7QUFDUGxDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaUMsR0FBWjtBQUNIO0FBQ0osQ0F2QkQsRTs7Ozs7Ozs7Ozs7QUNQQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvc2lnbnVwLmpzXCIpO1xuIiwiICAvL2JodHNwZWVjaEBnbWFpbC5jb20gYmh0MTIzNDU2XHJcbiAgLy9ScFJkZ2M4RWZSWDVZN2JZXHJcbiAgaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuICBmdW5jdGlvbiBpbml0REIoKXtcclxuICAgICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFMUkVBRFkgQ09OTkVDVEVEXCIpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiK3NydjovL3NwZWVjaHRvdGV4dDpScFJkZ2M4RWZSWDVZN2JZQGNsdXN0ZXIwLmFkYXFmLm1vbmdvZGIubmV0L3NwZWVjaHRvdGV4dD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlLHVzZVVuaWZpZWRUb3BvbG9neTp0cnVlfSk7XHJcbiAgICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24ub25jZSgnb3BlbicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjdGlvbiBoYXMgYmVlbiBtYWRlIScpO1xyXG4gICAgICB9KS5vbignZXJyb3InLCBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaXM6ICcsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgaW5pdERCIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZTp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBzdXJuYW1lOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtYWlsOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHJvbGU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgZGVmYXVsdDpcInVzZXJcIixcclxuICAgICAgICBlbnVtOltcInVzZXJcIiwgXCJhZG1pblwiLFwicm9vdFwiXVxyXG4gICAgfVxyXG4gICAgfSx7XHJcbiAgICAgICAgdGltZXN0YW1wczp0cnVlXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJyx1c2VyU2NoZW1hKSIsImltcG9ydCBpbml0REIgZnJvbSAnLi4vLi4vaGVscGVycy9pbml0REInXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJ1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xyXG5cclxuXHJcbmluaXREQigpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHtuYW1lLHN1cm5hbWUsZW1haWwscGFzc3dvcmR9ID0gcmVxLmJvZHlcclxuICAgIHRyeXtcclxuICAgICAgICBpZighbmFtZSB8fCAhc3VybmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkKXtcclxuICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe2Vycm9yOlwiTMO8dGZlbiB0w7xtIGFsYW5sYXLEsSBkb2xkdXJ1bnV6LlwifSlcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe2VtYWlsfSlcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtlcnJvcjpcIkJ1IG1haWwgYWRyZXNpeWxlIGJpciBrdWxsYW7EsWPEsSBidWx1bm1ha3RhLlwifSlcclxuICAgICAgICB9ICBcclxuICAgICAgIC8vIGNvbnN0IGhhc2hlZFBhc3N3b3JkPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwxMikgIFxyXG4gICAgICAgLy8gY29uc3QgbmV3VXNlciA9IGF3YWl0IG5ldyBVc2VyKHtcclxuICAgICAgIC8vICAgICBuYW1lLFxyXG4gICAgICAgLy8gICAgIHN1cm5hbWUsXHJcbiAgICAgICAvLyAgICAgZW1haWwsXHJcbiAgICAgICAvLyAgICAgcGFzc3dvcmQ6aGFzaGVkUGFzc3dvcmRcclxuICAgICAgLy8gIH0pLnNhdmUoKVxyXG4gICAgICAgLy8gY29uc29sZS5sb2cobmV3VXNlcilcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTpcIkthecSxdCBCYcWfYXLEsWzEsVwifSlcclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9