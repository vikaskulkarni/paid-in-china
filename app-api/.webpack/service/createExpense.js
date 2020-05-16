(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./createExpense.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./createExpense.js":
/*!**************************!*\
  !*** ./createExpense.js ***!
  \**************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_dynamodb_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/dynamodb-lib */ "./libs/dynamodb-lib.js");
/* harmony import */ var _libs_currency_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/currency-converter */ "./libs/currency-converter.js");
/* harmony import */ var _libs_response_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/response-lib */ "./libs/response-lib.js");




async function main(event, context) {
  const data = JSON.parse(event.body);
  /* Input parameters while adding an expense */

  const params = {
    TableName: "chinaPay",
    Item: {
      expenseId: uuid__WEBPACK_IMPORTED_MODULE_0__["v1"](),
      whatValue: data.whatValue,
      whenValue: data.whenValue,
      howMuch: data.howMuch,
      currency: data.currency,
      createdAt: Date.now()
    }
  };

  try {
    // Insert into chinaPay table
    await _libs_dynamodb_lib__WEBPACK_IMPORTED_MODULE_1__["call"]("put", params);
    const howMuch = await _libs_currency_converter__WEBPACK_IMPORTED_MODULE_2__["convert"](params.Item.howMuch, params.Item.currency); // Get the aggregated results from the second table

    const getAggregatedResult = await _libs_dynamodb_lib__WEBPACK_IMPORTED_MODULE_1__["call"]("get", {
      TableName: "aggregatedChinaPay",
      Key: {
        aggregateId: "12345"
      }
    });
    const aggregatedValues = getAggregatedResult.Item; // Store the aggregated table values into another variable to hold calculated values

    let calculatedValues = JSON.parse(JSON.stringify(aggregatedValues));

    const calculateValue = (whenValue, whatValueChar, howMuch) => {
      switch (whenValue) {
        case "weekly":
          calculatedValues[`${whatValueChar}wk`] = howMuch + aggregatedValues[`${whatValueChar}wk`];
          break;

        case "monthly":
          calculatedValues[`${whatValueChar}mt`] = howMuch + aggregatedValues[`${whatValueChar}mt`];
          break;

        case "yearly":
          calculatedValues[`${whatValueChar}yr`] = howMuch + aggregatedValues[`${whatValueChar}yr`];
          break;
      }
    };
    /* Determine what type of input entry, if personal, bussiness or country */


    switch (params.Item.whatValue) {
      case "personal":
        // Store this as calculateValue.pwk or calculateValue.pmt or calculateValue.pyr
        // based on the whenValue if it is week, month or year
        calculateValue(params.Item.whenValue, "p", howMuch); // Calculate personal total with current and previous values

        calculatedValues["personalTotal"] = howMuch + aggregatedValues["personalTotal"];
        break;

      case "bussiness":
        // Store this as calculateValue.bwk or calculateValue.bmt or calculateValue.byr
        // based on the whenValue if it is week, month or year
        calculateValue(params.Item.whenValue, "b", howMuch); // Calculate bussiness total with current and previous values

        calculatedValues["bussinessTotal"] = howMuch + aggregatedValues["bussinessTotal"];
        break;

      case "country":
        // Store this as calculateValue.cwk or calculateValue.cmt or calculateValue.cyr
        // based on the whenValue if it is week, month or year
        calculateValue(params.Item.whenValue, "c", howMuch); // Calculate country total with current and previous values

        calculatedValues["countryTotal"] = howMuch + aggregatedValues["countryTotal"];
        break;
    } // Calculate the TOTAL


    calculatedValues["allTotal"] = howMuch + aggregatedValues["allTotal"];
    const paramsAggregated = {
      TableName: "aggregatedChinaPay",
      Key: {
        aggregateId: "12345"
      },
      UpdateExpression: "SET pwk = :pwk, pmt = :pmt,  pyr = :pyr, \
        bwk = :bwk, bmt = :bmt,  byr = :byr, \
        cwk = :cwk, cmt = :cmt,  cyr = :cyr, \
        countryTotal = :countryTotal, bussinessTotal = :bussinessTotal, personalTotal = :personalTotal, allTotal = :allTotal",
      ExpressionAttributeValues: {
        ":pwk": calculatedValues.pwk,
        ":pmt": calculatedValues.pmt,
        ":pyr": calculatedValues.pyr,
        ":bwk": calculatedValues.bwk,
        ":bmt": calculatedValues.bmt,
        ":byr": calculatedValues.byr,
        ":cwk": calculatedValues.cwk,
        ":cmt": calculatedValues.cmt,
        ":cyr": calculatedValues.cyr,
        ":countryTotal": calculatedValues.countryTotal,
        ":bussinessTotal": calculatedValues.bussinessTotal,
        ":personalTotal": calculatedValues.personalTotal,
        ":allTotal": calculatedValues.allTotal
      },
      ReturnValues: "ALL_NEW"
    };
    /*
        This is how the input parameter values, paramsAggregated to be updated looks like;
         :allTotal:240
        :bmt:40
        :bussinessTotal:40
        :bwk:0
        :byr:0
        :cmt:0
        :countryTotal:0
        :cwk:0
        :cyr:0
        :personalTotal:200
        :pmt:0
        :pwk:200
        :pyr:0
     */

    const updateResult = await _libs_dynamodb_lib__WEBPACK_IMPORTED_MODULE_1__["call"]("update", paramsAggregated);
    return Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_3__["success"])({
      item: params.Item,
      ipHowMuch: data.howMuch,
      opHowMuch: howMuch
    });
  } catch (e) {
    return Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_3__["failure"])({
      status: false,
      error: e
    });
  }
}

/***/ }),

/***/ "./libs/currency-converter.js":
/*!************************************!*\
  !*** ./libs/currency-converter.js ***!
  \************************************/
/*! exports provided: convert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert", function() { return convert; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function convert(howMuch, currency) {
  const resp = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://openexchangerates.org/api/latest.json?app_id=ffeb39cd300d480192407dc85aceed6c");
  const data = resp.data;

  let fx = __webpack_require__(/*! ./money */ "./libs/money.js");

  if (typeof fx !== "undefined" && fx.rates) {
    fx.rates = data.rates;
    fx.base = data.base;
  } else {}

  const result = fx.convert(howMuch, {
    from: currency,
    to: "USD"
  });
  return result; //return result.data;
}

/***/ }),

/***/ "./libs/dynamodb-lib.js":
/*!******************************!*\
  !*** ./libs/dynamodb-lib.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);

function call(action, params) {
  const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.DynamoDB.DocumentClient();
  return dynamoDb[action](params).promise();
}

/***/ }),

/***/ "./libs/money.js":
/*!***********************!*\
  !*** ./libs/money.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * money.js / fx() v0.2
 * Copyright 2014 Open Exchange Rates
 *
 * JavaScript library for realtime currency conversion and exchange rate calculation.
 *
 * Freely distributable under the MIT license.
 * Portions of money.js are inspired by or borrowed from underscore.js
 *
 * For details, examples and documentation:
 * http://openexchangerates.github.io/money.js/
 */
(function (root, undefined) {
  // Create a safe reference to the money.js object for use below.
  var fx = function (obj) {
    return new fxWrapper(obj);
  }; // Current version.


  fx.version = '0.2';
  /* --- Setup --- */
  // fxSetup can be defined before loading money.js, to set the exchange rates and the base
  // (and default from/to) currencies - or the rates can be loaded in later if needed.

  var fxSetup = root.fxSetup || {
    rates: {},
    base: ""
  }; // Object containing exchange rates relative to the fx.base currency, eg { "GBP" : "0.64" }

  fx.rates = fxSetup.rates; // Default exchange rate base currency (eg "USD"), which all the exchange rates are relative to

  fx.base = fxSetup.base; // Default from / to currencies for conversion via fx.convert():

  fx.settings = {
    from: fxSetup.from || fx.base,
    to: fxSetup.to || fx.base
  };
  /* --- Conversion --- */
  // The base function of the library: converts a value from one currency to another

  var convert = fx.convert = function (val, opts) {
    // Convert arrays recursively
    if (typeof val === 'object' && val.length) {
      for (var i = 0; i < val.length; i++) {
        val[i] = convert(val[i], opts);
      }

      return val;
    } // Make sure we gots some opts


    opts = opts || {}; // We need to know the `from` and `to` currencies

    if (!opts.from) opts.from = fx.settings.from;
    if (!opts.to) opts.to = fx.settings.to; // Multiple the value by the exchange rate

    return val * getRate(opts.to, opts.from);
  }; // Returns the exchange rate to `target` currency from `base` currency


  var getRate = function (to, from) {
    // Save bytes in minified version
    var rates = fx.rates; // Make sure the base rate is in the rates object:

    rates[fx.base] = 1; // Throw an error if either rate isn't in the rates array

    if (!rates[to] || !rates[from]) throw "fx error"; // If `from` currency === fx.base, return the basic exchange rate for the `to` currency

    if (from === fx.base) {
      return rates[to];
    } // If `to` currency === fx.base, return the basic inverse rate of the `from` currency


    if (to === fx.base) {
      return 1 / rates[from];
    } // Otherwise, return the `to` rate multipled by the inverse of the `from` rate to get the
    // relative exchange rate between the two currencies


    return rates[to] * (1 / rates[from]);
  };
  /* --- OOP wrapper and chaining --- */
  // If fx(val) is called as a function, it returns a wrapped object that can be used OO-style


  var fxWrapper = function (val) {
    // Experimental: parse strings to pull out currency code and value:
    if (typeof val === "string") {
      this._v = parseFloat(val.replace(/[^0-9-.]/g, ""));
      this._fx = val.replace(/([^A-Za-z])/g, "");
    } else {
      this._v = val;
    }
  }; // Expose `wrapper.prototype` as `fx.prototype`


  var fxProto = fx.prototype = fxWrapper.prototype; // fx(val).convert(opts) does the same thing as fx.convert(val, opts)

  fxProto.convert = function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this._v);
    return convert.apply(fx, args);
  }; // fx(val).from(currency) returns a wrapped `fx` where the value has been converted from
  // `currency` to the `fx.base` currency. Should be followed by `.to(otherCurrency)`


  fxProto.from = function (currency) {
    var wrapped = fx(convert(this._v, {
      from: currency,
      to: fx.base
    }));
    wrapped._fx = fx.base;
    return wrapped;
  }; // fx(val).to(currency) returns the value, converted from `fx.base` to `currency`


  fxProto.to = function (currency) {
    return convert(this._v, {
      from: this._fx ? this._fx : fx.settings.from,
      to: currency
    });
  };
  /* --- Module Definition --- */
  // Export the fx object for CommonJS. If being loaded as an AMD module, define it as such.
  // Otherwise, just add `fx` to the global object


  if (true) {
    if ( true && module.exports) {
      exports = module.exports = fx;
    }

    exports.fx = fx;
  } else {} // Root will be `window` in browser or `global` on the server:

})(this);

/***/ }),

/***/ "./libs/response-lib.js":
/*!******************************!*\
  !*** ./libs/response-lib.js ***!
  \******************************/
/*! exports provided: success, failure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
function success(body) {
  return buildResponse(200, body);
}
function failure(body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ })));
//# sourceMappingURL=createExpense.js.map