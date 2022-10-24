/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  }; // import a list of modules into the list

  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls

  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/solitaire/BuildPiles.js":
/*!*************************************!*\
  !*** ./src/solitaire/BuildPiles.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildPiles": () => (/* binding */ BuildPiles)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _addToFirstEmpty = /*#__PURE__*/new WeakSet();
var BuildPiles = /*#__PURE__*/function () {
  function BuildPiles(element) {
    _classCallCheck(this, BuildPiles);
    _classPrivateMethodInitSpec(this, _addToFirstEmpty);
    _defineProperty(this, "buildPiles", [{
      pile: [],
      suit: null,
      element: null
    }, {
      pile: [],
      suit: null,
      element: null
    }, {
      pile: [],
      suit: null,
      element: null
    }, {
      pile: [],
      suit: null,
      element: null
    }]);
    console.log(element);
    this.buildPiles.forEach(function (pile, index) {
      pile.element = element.children[index];
    });
    console.log(this.buildPiles);
  }
  _createClass(BuildPiles, [{
    key: "addPile",
    value: function addPile(card) {
      this.validateCard(card);
      this.buildPiles[0].pile.push(card);
      console.log(this.buildPiles.element);
      this.buildPiles[0].element.appendChild(card[0].element);
    }
  }, {
    key: "validateCard",
    value: function validateCard(card) {
      console.log(card);
      if (card[0].card.value === 'ACE') {
        _classPrivateMethodGet(this, _addToFirstEmpty, _addToFirstEmpty2).call(this, card);
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: "getPile",
    value: function getPile(index) {
      return this.buildPiles.piles[index];
    }
  }]);
  return BuildPiles;
}();
function _addToFirstEmpty2(card) {
  var emptyBuildPile = this.buildPiles.find(function (pile) {
    return pile.pile.length === 0;
  });
  emptyBuildPile.pile.push(card);
}

/***/ }),

/***/ "./src/solitaire/Card.js":
/*!*******************************!*\
  !*** ./src/solitaire/Card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Card = /*#__PURE__*/function () {
  function Card(card, flipped) {
    _classCallCheck(this, Card);
    _defineProperty(this, "flipped", false);
    _defineProperty(this, "element", null);
    _defineProperty(this, "front", null);
    _defineProperty(this, "back", null);
    _defineProperty(this, "card", null);
    this.card = card;
    this.flipped = flipped ? true : false;
    var container = document.createElement('div');
    var imageElement = document.createElement('img');
    imageElement.src = card.images.png;
    imageElement.classList.add('card');
    this.element = container;
    this.front = imageElement;
    this.back = document.createElement('img');
    this.back.classList.add('card');
    this.back.classList.add('card-back');
    this.element.appendChild(this.flipped ? this.front : this.back);
  }
  _createClass(Card, [{
    key: "flip",
    value: function flip() {
      this.flipped = !this.flipped;
      if (this.flipped) {
        this.element.appendChild(this.front);
        this.back.remove();
      } else {
        this.element.appendChild(this.back);
        this.front.remove();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.card.value;
      if (value === 'JACK') {
        value = 11;
      } else if (value === 'QUEEN') {
        value = 12;
      } else if (value === 'KING') {
        value = 13;
      } else if (value === 'ACE') {
        value = 14;
      }
      value = parseInt(value);
      return value;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      switch (this.card.suit) {
        case 'HEARTS':
          return 'red';
        case 'DIAMONDS':
          return 'red';
        case 'CLUBS':
          return 'black';
        case 'SPADES':
          return 'black';
        default:
          break;
      }
    }
  }, {
    key: "makeDraggable",
    value: function makeDraggable() {
      var _this = this;
      this.element.addEventListener('dragstart', function (event) {
        console.log('dragstart');
        _this.element.classList.add('empty');
        _this.element.classList.add('card');
        _this.element.firstChild.classList.add('hidden');
      });
      this.element.addEventListener('dragend', function (event) {
        console.log('dragend');
        _this.element.classList.remove('empty');
        _this.element.classList.remove('card');
        _this.element.firstChild.classList.remove('hidden');
      });
    }
    /**
     * 
     * @param {function (ClickEvent, Card)} fn 
     */
  }, {
    key: "onDbClick",
    value: function onDbClick(fn) {
      var _this2 = this;
      this.element.addEventListener('dblclick', function (event) {
        console.log('double');
        fn(event, _this2);
      });
    }
  }, {
    key: "offDbClick",
    value: function offDbClick() {
      this.element.removeEventListener('dblclick');
    }
  }]);
  return Card;
}();

/***/ }),

/***/ "./src/solitaire/Deck.js":
/*!*******************************!*\
  !*** ./src/solitaire/Deck.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deck": () => (/* binding */ Deck)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/solitaire/Card.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _fetchCards = /*#__PURE__*/new WeakSet();
var Deck = /*#__PURE__*/function () {
  function Deck(element) {
    _classCallCheck(this, Deck);
    _classPrivateMethodInitSpec(this, _fetchCards);
    _defineProperty(this, "drawQue", {
      element: null,
      cards: []
    });
    _defineProperty(this, "hasCards", false);
    this.drawQue.element = element;
    _classPrivateMethodGet(this, _fetchCards, _fetchCards2).call(this).then(this.hasCards = true)["catch"](function (error) {
      throw error;
    });
  }
  _createClass(Deck, [{
    key: "refillCards",
    value: function refillCards(cards) {
      var _this = this;
      cards.forEach(function (card) {
        _this.drawQue.cards.push(card);
      });
    }

    /**
     * 
     * @param {number} amount The amount of cards to draw
     * @returns cards
     */
  }, {
    key: "getCards",
    value: function getCards() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.drawQue.cards.splice(0, amount);
    }
  }]);
  return Deck;
}();
function _fetchCards2() {
  return _fetchCards3.apply(this, arguments);
}
function _fetchCards3() {
  _fetchCards3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _this2 = this;
    var deckOfCards, drawCards, cards;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(function (response) {
              return response.json();
            });
          case 2:
            deckOfCards = _context.sent;
            console.log(deckOfCards);
            _context.next = 6;
            return fetch("https://deckofcardsapi.com/api/deck/".concat(deckOfCards.deck_id, "/draw/?count=52")).then(function (response) {
              return response.json();
            });
          case 6:
            drawCards = _context.sent;
            console.log(drawCards);
            cards = drawCards.cards;
            cards.forEach(function (card) {
              _this2.drawQue.cards.push(new _Card__WEBPACK_IMPORTED_MODULE_0__.Card(card, false));
            });
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchCards3.apply(this, arguments);
}

/***/ }),

/***/ "./src/solitaire/Game.js":
/*!*******************************!*\
  !*** ./src/solitaire/Game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Playarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playarea */ "./src/solitaire/Playarea.js");
/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deck */ "./src/solitaire/Deck.js");
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stack */ "./src/solitaire/Stack.js");
/* harmony import */ var _BuildPiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BuildPiles */ "./src/solitaire/BuildPiles.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Game = /*#__PURE__*/function () {
  function Game(playAreaElement, deckElement, stackElement, buildPilesElement) {
    _classCallCheck(this, Game);
    this.buildPiles = new _BuildPiles__WEBPACK_IMPORTED_MODULE_3__.BuildPiles(buildPilesElement);
    this.playArea = new _Playarea__WEBPACK_IMPORTED_MODULE_0__.PlayArea(playAreaElement, this.buildPiles);
    this.deck = new _Deck__WEBPACK_IMPORTED_MODULE_1__.Deck(deckElement);
    this.stack = new _Stack__WEBPACK_IMPORTED_MODULE_2__.Stack(stackElement);
    this.init();
    console.log(this);
  }
  _createClass(Game, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.deck.drawQue.element.addEventListener('click', function () {
        _this.draw();
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      this.stack.addCards(this.deck.getCards(3));
      console.log(this);
    }
  }, {
    key: "flipStack",
    value: function flipStack() {
      this.deck.refillCards(this.stack.removeStack());
    }
  }]);
  return Game;
}();

/***/ }),

/***/ "./src/solitaire/Playarea.js":
/*!***********************************!*\
  !*** ./src/solitaire/Playarea.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayArea": () => (/* binding */ PlayArea)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/solitaire/Card.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlayArea = /*#__PURE__*/function () {
  function PlayArea(element, buildPile) {
    _classCallCheck(this, PlayArea);
    _defineProperty(this, "table", {
      rows: [{
        id: 1,
        cards: [],
        element: null
      }, {
        id: 2,
        cards: [],
        element: null
      }, {
        id: 3,
        cards: [],
        element: null
      }, {
        id: 4,
        cards: [],
        element: null
      }, {
        id: 5,
        cards: [],
        element: null
      }, {
        id: 6,
        cards: [],
        element: null
      }, {
        id: 7,
        cards: [],
        element: null
      }]
    });
    _defineProperty(this, "element", null);
    _defineProperty(this, "selectedCard", null);
    this.element = element;
    this.buildPile = buildPile;
  }

  /**
   * 
   * @param {[*]} cards should be an array of 28 cards
   */
  _createClass(PlayArea, [{
    key: "setTable",
    value: function setTable(cards) {
      var _this = this;
      console.log(cards);
      var rows = document.querySelectorAll('.row');
      rows.forEach(function (row, index) {
        _this.table.rows[index].element = row;
      });
      this.table.rows.forEach(function (row, index, array) {
        for (var i = 0; i < row.id; i++) {
          var _card = cards.shift();
          array[index].cards.push(_card);
        }
        array[index].cards.forEach(function (card, index) {
          row.element.appendChild(card.element);
          card.element.style.zIndex = index;
        });
        row.cards[row.cards.length - 1].flip();
        row.cards[row.cards.length - 1].makeDraggable();
        row.cards[row.cards.length - 1].onDbClick(function (e, card) {
          console.log(e.target);
          console.log(card);
          _this.moveToBuildPile(card);
        });
      });
    }
  }, {
    key: "getRowFromId",
    value: function getRowFromId(id) {
      return this.table.rows.find(function (row) {
        return row.id === id;
      });
    }
  }, {
    key: "addCardToRow",
    value: function addCardToRow(card, rowId) {
      var row = this.getRowFromId(rowId);
      row.cards.push(card);
    }
  }, {
    key: "moveCardToRow",
    value: function moveCardToRow(fromRowId, toRowId) {
      this.removeCardFromRow(card, fromRowId);
      this.addCardToRow(card, toRowId);
    }
  }, {
    key: "moveToBuildPile",
    value: function moveToBuildPile(card) {
      var row = this.table.rows.find(function (row) {
        return row.cards.find(function (rowCard) {
          return rowCard.card.code === card.card.code;
        });
      });
      var indexInRow = row === null || row === void 0 ? void 0 : row.cards.lastIndexOf(card);
      console.log(row.id - 1, indexInRow);
      var movedCard = row.cards.splice(indexInRow, row.cards.length);
      console.log(movedCard[0].element.remove());
      this.buildPile.addPile(movedCard);
    }
  }]);
  return PlayArea;
}();

/***/ }),

/***/ "./src/solitaire/Stack.js":
/*!********************************!*\
  !*** ./src/solitaire/Stack.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stack": () => (/* binding */ Stack)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Stack = /*#__PURE__*/function () {
  function Stack(element) {
    _classCallCheck(this, Stack);
    _defineProperty(this, "cardStack", {
      element: null,
      cards: []
    });
    this.cardStack.element = element;
  }
  _createClass(Stack, [{
    key: "addCards",
    value: function addCards(cards) {
      var _this = this;
      console.log('Got cards', cards);
      cards.forEach(function (card) {
        _this.cardStack.cards.push(card);
        card.flip();
        /* this.cardStack.element.appendChild(card.element.querySelector('img'));
        
        console.log(card.element.querySelector('img')); */
      });

      this.cardStack.element.innerHTML = '';
      this.cardStack.element.appendChild(cards[cards.length - 3].element);
      this.cardStack.element.appendChild(cards[cards.length - 2].element);
      this.cardStack.element.appendChild(cards[cards.length - 1].element);
    }
  }, {
    key: "removeStack",
    value: function removeStack() {
      var cards = _toConsumableArray(this.cardStack.cards);
      this.cardStack.cards = [];
      return cards;
    }
  }]);
  return Stack;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/cardGamePattern.svg */ "./src/assets/images/cardGamePattern.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/pattern.png */ "./src/assets/images/pattern.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    margin: 0;\n    padding: 0;\n    background: rgb(0, 255, 134);\n    background: radial-gradient(circle, rgba(0, 255, 134, 1) 0%, rgba(12, 121, 9, 1) 40%, rgba(32, 85, 55, 1) 100%);\n}\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: repeat;\n    background-size: 250px;\n    margin: 0;\n    box-sizing: border-box;\n    padding-top: 2rem;\n    min-width: 100vw;\n    min-height: 100vh;\n}\nheader {\n    display: flex;\n    margin-top: 1rem;\n}\nmain {\n    margin-top: 2rem;\n}\n.play-area {\n    display: flex;\n    justify-content: space-evenly;\n}\n.build-piles {\n    display: flex;\n    overflow-x: scroll;\n    flex-wrap: nowrap;\n    margin-right: 1rem;\n    flex-grow: 1;\n}\n.build-piles img {\n    width: 10vw;\n}\n.card-back {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: repeat;\n    background-size: 70px;\n}\n.card {\n    background-color: hsla(0, 0%, 95%, 0.247);\n    aspect-ratio: 113 / 157;\n    width: 10vw;\n    border-radius: 4px;\n    border: dashed 2px #000000;\n\n    margin: 0 0.5rem;\n    padding: 0;\n    box-sizing: border-box;\n    display: block;\n    box-shadow: 0 0 0.7rem hsla(0, 0%, 10%, 0.823);\n}\n\n.deck {\n    display: flex;\n}\n.stack {\n    position: relative;\n    width: calc(10vw + 30px);\n    margin: 0 1rem;\n}\n.stack .card {\n    position: absolute;\n}\n.card:not(.empty) {\n    cursor: pointer;\n    border: 0;\n    background-color: transparent;\n}\n.card.empty:not(:last-child) {\n    display: none;\n}\n.stack div:nth-last-child(1) {\n    display: block;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    transform: translate(20px, 10px);\n}\n.stack div:nth-last-child(2) {\n    display: block;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    transform: translate(0, 0);\n}\n.stack div:nth-last-child(3) {\n    display: block;\n    top: 0;\n    left: 0;\n    z-index: 3;\n    transform: translate(-20px, -10px);\n}\n.row {\n    /* position: relative; */\n    min-height: 70vh;\n    width: 100%;\n}\n.row div:not(:first-child, :nth-child(2)) {\n    /*  position: absolute; */\n    /* left: 50%;\n    transform: translateX(-50%); */\n    margin-top: -80%;\n}\n.hidden {\n    opacity: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,4BAA4B;IAC5B,+GAA+G;AACnH;AACA;IACI,yDAA6D;IAC7D,yBAAyB;IACzB,sBAAsB;IACtB,SAAS;IACT,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,yDAAqD;IACrD,yBAAyB;IACzB,qBAAqB;AACzB;AACA;IACI,yCAAyC;IACzC,uBAAuB;IACvB,WAAW;IACX,kBAAkB;IAClB,0BAA0B;;IAE1B,gBAAgB;IAChB,UAAU;IACV,sBAAsB;IACtB,cAAc;IACd,8CAA8C;AAClD;;AAEA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,cAAc;AAClB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,SAAS;IACT,6BAA6B;AACjC;AACA;IACI,aAAa;AACjB;AACA;IACI,cAAc;IACd,MAAM;IACN,OAAO;IACP,UAAU;IACV,gCAAgC;AACpC;AACA;IACI,cAAc;IACd,MAAM;IACN,OAAO;IACP,UAAU;IACV,0BAA0B;AAC9B;AACA;IACI,cAAc;IACd,MAAM;IACN,OAAO;IACP,UAAU;IACV,kCAAkC;AACtC;AACA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,yBAAyB;IACzB;kCAC8B;IAC9B,gBAAgB;AACpB;AACA;IACI,UAAU;AACd","sourcesContent":["html {\n    margin: 0;\n    padding: 0;\n    background: rgb(0, 255, 134);\n    background: radial-gradient(circle, rgba(0, 255, 134, 1) 0%, rgba(12, 121, 9, 1) 40%, rgba(32, 85, 55, 1) 100%);\n}\nbody {\n    background-image: url(\"../assets/images/cardGamePattern.svg\");\n    background-repeat: repeat;\n    background-size: 250px;\n    margin: 0;\n    box-sizing: border-box;\n    padding-top: 2rem;\n    min-width: 100vw;\n    min-height: 100vh;\n}\nheader {\n    display: flex;\n    margin-top: 1rem;\n}\nmain {\n    margin-top: 2rem;\n}\n.play-area {\n    display: flex;\n    justify-content: space-evenly;\n}\n.build-piles {\n    display: flex;\n    overflow-x: scroll;\n    flex-wrap: nowrap;\n    margin-right: 1rem;\n    flex-grow: 1;\n}\n.build-piles img {\n    width: 10vw;\n}\n.card-back {\n    background-image: url(\"../assets/images/pattern.png\");\n    background-repeat: repeat;\n    background-size: 70px;\n}\n.card {\n    background-color: hsla(0, 0%, 95%, 0.247);\n    aspect-ratio: 113 / 157;\n    width: 10vw;\n    border-radius: 4px;\n    border: dashed 2px #000000;\n\n    margin: 0 0.5rem;\n    padding: 0;\n    box-sizing: border-box;\n    display: block;\n    box-shadow: 0 0 0.7rem hsla(0, 0%, 10%, 0.823);\n}\n\n.deck {\n    display: flex;\n}\n.stack {\n    position: relative;\n    width: calc(10vw + 30px);\n    margin: 0 1rem;\n}\n.stack .card {\n    position: absolute;\n}\n.card:not(.empty) {\n    cursor: pointer;\n    border: 0;\n    background-color: transparent;\n}\n.card.empty:not(:last-child) {\n    display: none;\n}\n.stack div:nth-last-child(1) {\n    display: block;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    transform: translate(20px, 10px);\n}\n.stack div:nth-last-child(2) {\n    display: block;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    transform: translate(0, 0);\n}\n.stack div:nth-last-child(3) {\n    display: block;\n    top: 0;\n    left: 0;\n    z-index: 3;\n    transform: translate(-20px, -10px);\n}\n.row {\n    /* position: relative; */\n    min-height: 70vh;\n    width: 100%;\n}\n.row div:not(:first-child, :nth-child(2)) {\n    /*  position: absolute; */\n    /* left: 50%;\n    transform: translateX(-50%); */\n    margin-top: -80%;\n}\n.hidden {\n    opacity: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/cardGamePattern.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/cardGamePattern.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/src/assets/images/b6e17c1dad6938ef1a24.svg";

/***/ }),

/***/ "./src/assets/images/pattern.png":
/*!***************************************!*\
  !*** ./src/assets/images/pattern.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/src/assets/images/112f573474e5f8574c85.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _solitaire_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solitaire/Game */ "./src/solitaire/Game.js");


var game = new _solitaire_Game__WEBPACK_IMPORTED_MODULE_1__.Game(document.querySelector('.play-area'), document.querySelector('.deck button'), document.querySelector('.stack'), document.querySelector('.build-piles'));
var intervall = setInterval(function () {
  if (game.deck.hasCards) {
    clearInterval(intervall);
    game.playArea.setTable(game.deck.getCards(28));
    console.log(game.playArea.table);
  }
}, 1000);

/* 
const deck = {
    element: null,
    cards: []
};
const stack = {
    element: null,
    cards: []
};
deck.element = document.querySelector('button');
stack.element = document.querySelector('.stack');
console.log(stack);


getCards()
    .then(loadPictures)
    .then(() => {
        deck.element.addEventListener('click', () => {
            console.log('card clicked');
            drawCards()
        })
    });

async function getCards() {
    const deckOfCards = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => response.json())
    console.log(deckOfCards);
    const drawCards = await fetch(`https://deckofcardsapi.com/api/deck/${deckOfCards.deck_id}/draw/?count=52`).then(response => response.json())
    console.log(drawCards);
    const cards = drawCards.cards;
    cards.forEach(card => {
        deck.cards.push(card);
    });
}

async function drawCards() {
    stack.element.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const card = deck.cards.shift();
        if (card !== undefined) {
            stack.cards.push(card);
        }

    }
    for (let i = 0; i < 3; i++) {
        const imageElement = document.createElement('img');
        imageElement.src = stack.cards[stack.cards.length - i - 1].images.png;
        imageElement.classList.add('card');
        stack.element.appendChild(imageElement);
    }
}


async function execute() {
    const stack = document.querySelector('.stack');
    cards.forEach((card, index) => {
        const cardElement = document.createElement('img');
        cardElement.src = card.images.png;
        cardElement.classList.add('from-deck');
        cardElement.classList.add('card');
        stack.appendChild(cardElement);
    });

    function getNumericValue(value) {
        if (value === 'JACK') {
            value = 11;
        } else if (value === 'QUEEN') {
            value = 12;
        } else if (value === 'KING') {
            value = 13;
        } else if (value === 'ACE') {
            value = 14;
        }
        value = parseInt(value);

        return value;
    }

    function addColor(card, value) {
        switch (card.suit) {
            case 'HEARTS':
                return value + 100;
            case 'DIAMONDS':
                return value + 200;
            case 'CLUBS':
                return value + 300;
            case 'SPADES':
                return value + 400;
            default:
                break;
        }
    }

}

async function loadPictures() {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.style.overflow = 'hidden';
    div.style.height = '0px';
    body.appendChild(div);
    deck.cards.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card.images.svg;
        div.appendChild(cardElement);
    });

} */
})();

/******/ })()
;
//# sourceMappingURL=main.js.map