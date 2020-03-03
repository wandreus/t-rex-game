/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Menu = /*#__PURE__*/function () {\n  function Menu() {\n    _classCallCheck(this, Menu);\n\n    this.state = {\n      init: 0\n    };\n    this.qqqqq();\n  }\n\n  _createClass(Menu, [{\n    key: \"qqqqq\",\n    value: function qqqqq() {\n      console.log('aaaaaaaaaa', this.state.init);\n    }\n  }]);\n\n  return Menu;\n}();\n\nexports[\"default\"] = Menu;\n\n//# sourceURL=webpack:///./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _header = _interopRequireDefault(__webpack_require__(/*! ./components/header */ \"./src/js/components/header.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nnew _header[\"default\"]();\nvar settings = {\n  DOT: 0.5,\n  SPEED: 2\n};\nvar theme = {\n  PRIMARY: '#7DCE9A',\n  BACKGROUND: '#211020'\n};\n\nvar getSize = function getSize(size) {\n  return \"\".concat(size * settings.DOT, \"vmin\");\n}; // contructor personagem\n\n\nvar Trex = /*#__PURE__*/function () {\n  function Trex() {\n    _classCallCheck(this, Trex);\n\n    this.height = 20;\n    this.width = 10;\n    this.left = 50;\n    this.altitude = 0;\n    this.el = document.createElement('div');\n    this.el.style.position = 'absolute';\n    this.el.style.bottom = 0;\n    this.el.style.left = getSize(this.left);\n    this.el.style.height = getSize(this.height);\n    this.el.style.width = getSize(this.width);\n    this.el.style.background = theme.PRIMARY;\n  }\n\n  _createClass(Trex, [{\n    key: \"jump\",\n    value: function jump() {\n      if (this.altitude > 0) return;\n      this.goUp();\n    }\n  }, {\n    key: \"goUp\",\n    value: function goUp() {\n      if (this.altitude >= 30) return this.goDown();\n      this.altitude++;\n      setTimeout(this.goUp.bind(this), 12);\n    }\n  }, {\n    key: \"goDown\",\n    value: function goDown() {\n      if (this.altitude === 0) return;\n      this.altitude--;\n      setTimeout(this.goDown.bind(this), 12);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.el.style.transform = \"translateY(-\".concat(getSize(this.altitude), \")\");\n    }\n  }]);\n\n  return Trex;\n}();\n\nvar Foe = /*#__PURE__*/function () {\n  function Foe() {\n    _classCallCheck(this, Foe);\n\n    this.height = Math.random() * (10 - 5) + 5;\n    this.width = Math.random() * (8 - 5) + 5;\n    this.left = 200;\n    this.distance = 0;\n    this.el = document.createElement('div');\n    this.el.style.position = 'absolute';\n    this.el.style.bottom = 0;\n    this.el.style.left = getSize(this.left);\n    this.el.style.height = getSize(this.height);\n    this.el.style.width = getSize(this.width);\n    this.el.style.background = theme.PRIMARY;\n  }\n\n  _createClass(Foe, [{\n    key: \"move\",\n    value: function move() {\n      this.distance++;\n      setTimeout(this.move.bind(this), 20);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.el.style.transform = \"translateX(-\".concat(getSize(this.distance), \")\");\n    }\n  }]);\n\n  return Foe;\n}();\n\nvar SCORE_KEY = 'TREX_HIGHSCORE';\n\nvar ScoreBoard = /*#__PURE__*/function () {\n  function ScoreBoard() {\n    _classCallCheck(this, ScoreBoard);\n\n    this.score = 0;\n    this.highscore = localStorage.getItem(SCORE_KEY) || 0;\n    this.el = document.createElement('div');\n    this.el.style.position = 'absolute';\n    this.el.style.top = getSize(2);\n    this.el.style.right = getSize(2);\n    this.el.style.color = theme.PRIMARY;\n  }\n\n  _createClass(ScoreBoard, [{\n    key: \"countUp\",\n    value: function countUp() {\n      this.score++;\n    }\n  }, {\n    key: \"save\",\n    value: function save() {\n      if (this.score > this.highscore) {\n        localStorage.setItem(SCORE_KEY, this.score);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.el.innerHTML = \"Score: \".concat(this.score, \" | Hi: \").concat(this.highscore);\n    }\n  }]);\n\n  return ScoreBoard;\n}();\n\nvar Stage = /*#__PURE__*/function () {\n  function Stage(el) {\n    _classCallCheck(this, Stage);\n\n    this.height = 100;\n    this.width = 200;\n    this.el = document.createElement('div');\n    this.el.style.position = 'relative';\n    this.el.style.height = getSize(this.height);\n    this.el.style.width = getSize(this.width);\n    this.el.style.overflow = 'hidden';\n    this.el.style.background = theme.BACKGROUND;\n    el.appendChild(this.el);\n  }\n\n  _createClass(Stage, [{\n    key: \"add\",\n    value: function add(child) {\n      this.el.appendChild(child.el);\n    }\n  }]);\n\n  return Stage;\n}();\n\nvar App = /*#__PURE__*/function () {\n  function App(selector) {\n    _classCallCheck(this, App);\n\n    this.el = document.querySelector(selector);\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {\n      this.foes = [];\n      this.loop = null;\n      this.stage = new Stage(this.el);\n      this.trex = new Trex();\n      this.stage.add(this.trex);\n      this.scoreBoard = new ScoreBoard();\n      this.stage.add(this.scoreBoard);\n      this.initListeners();\n      this.start();\n      this.generateFoe();\n      this.addScore();\n    }\n  }, {\n    key: \"initListeners\",\n    value: function initListeners() {\n      window.addEventListener('keydown', this.handleInput.bind(this));\n    }\n  }, {\n    key: \"handleInput\",\n    value: function handleInput(event) {\n      if (event.key === ' ') {\n        this.trex.jump();\n      }\n\n      return;\n    }\n  }, {\n    key: \"generateFoe\",\n    value: function generateFoe() {\n      if (this.loop === null) return;\n      var foe = new Foe();\n      this.stage.add(foe);\n      this.foes.push(foe);\n      foe.move();\n      setTimeout(this.generateFoe.bind(this), 2000);\n    }\n  }, {\n    key: \"addScore\",\n    value: function addScore() {\n      if (this.loop === null) return;\n      this.scoreBoard.countUp();\n      setTimeout(this.addScore.bind(this), 500);\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      var _this = this;\n\n      this.trex.render();\n      this.scoreBoard.render();\n      this.foes.forEach(function (foe) {\n        foe.render();\n\n        if (_this.collision(_this.trex, foe)) {\n          console.log('ouch');\n\n          _this.stop();\n        }\n      });\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.loop = setInterval(this.tick.bind(this), 5);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.scoreBoard.save();\n      clearInterval(this.loop);\n      this.loop = null;\n    }\n  }, {\n    key: \"collision\",\n    value: function collision(a, b) {\n      if (a.altitude > b.height) return false;\n      if (a.left + a.width < b.left - b.distance) return false;\n      if (a.left > b.left - b.distance + b.width) return false;\n      return true;\n    }\n  }]);\n\n  return App;\n}();\n\nvar app = new App('#app');\napp.init();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });