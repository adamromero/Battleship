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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/*! exports provided: GameBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameBoard\", function() { return GameBoard; });\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n\n\nconst GameBoard = () => {\n\n\tlet board = [\n\t\t1, 1, 0, 0, 0, 0, 0, 5, 0, 0,\n\t\t0, 0, 0, 0, 0, 0, 0, 5, 0, 0,\n\t\t0, 0, 0, 0, 0, 0, 0, 5, 0, 0,\n\t\t0, 0, 0, 0, 0, 0, 0, 5, 0, 0,\n\t\t2, 0, 3, 3, 3, 7, 0, 5, 0, 0,\n\t\t2, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n\t\t2, 0, 0, 0, 0, 6, 6, 0, 0, 0,\n\t\t0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n\t\t0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n\t\t0, 0, 0, 0, 4, 4, 4, 4, 0, 0\n\t];\n\tlet ships = new Map();\n\tconst BOARD_COL = 10;\n\tconst boardValues = {\n\t\tSHIPS: {\n\t\t\tPATROL: 1,\n\t\t\tDESTROYER: 2,\n\t\t\tSUBMARINE: 3,\n\t\t\tBATTLESHIP: 4,\n\t\t\tCARRIER: 5\n\t\t},\n\t\tSTATUS: {\n\t\t\tEMPTY: 0,\n\t\t\tMISS: 6,\n\t\t\tHIT: 7\n\t\t}\n\t};\n\n\t//const shipButtons = document.querySelectorAll(\".select-ship\");\n\n\tconst init = () => {\n\t\t/*\n\t\tfor (let row = 0; row < BOARD_COL; row++) {\n\t\t\tfor (let col = 0; col < BOARD_COL; col++) {\n\t\t\t\tboard[row * BOARD_COL + col] = boardValues.STATUS.EMPTY;\n\t\t\t}\n\t\t}*/\n\n\t\tships.set(boardValues.SHIPS.PATROL, Object(_src_ship__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(\"Patrol Boat\", 2));\n\t\tships.set(boardValues.SHIPS.DESTROYER, Object(_src_ship__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(\"Destroyer\", 3));\n\t\tships.set(boardValues.SHIPS.SUBMARINE, Object(_src_ship__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(\"Submarine\", 4));\n\t\tships.set(boardValues.SHIPS.BATTLESHIP, Object(_src_ship__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(\"Battleship\", 4));\n\t\tships.set(boardValues.SHIPS.CARRIER, Object(_src_ship__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"])(\"Carrier\", 5));\n\t}\n\n\tconst placeShip = (x, y, rotate) => {\n\t\tfor (let row = 0; row < BOARD_COL; row++) {\n\t\t\tfor (let col = 0; col < BOARD_COL; col++) {\n\t\t\t\t\n\t\t\t}\n\t\t} \n\t}\n\n\tconst receiveAttack = (x, y) => {\n\t\tif (board[x * BOARD_COL + y] === boardValues.SHIPS.PATROL ||\n\t\t\tboard[x * BOARD_COL + y] === boardValues.SHIPS.SUBMARINE ||\n\t\t\tboard[x * BOARD_COL + y] === boardValues.SHIPS.DESTROYER ||\n\t\t\tboard[x * BOARD_COL + y] === boardValues.SHIPS.BATTLESHIP ||\n\t\t\tboard[x * BOARD_COL + y] === boardValues.SHIPS.CARRIER) {\n\t\t\tships.get(board[x * BOARD_COL + y]).hit();\n\t\t\tboard[x * BOARD_COL + y] = boardValues.STATUS.HIT;\n\t\t\treturn true;\n\t\t} else if (board[x * BOARD_COL + y] === boardValues.STATUS.HIT || \n\t\t\tboard[x * BOARD_COL + y] === boardValues.STATUS.MISS) {\n\t\t\treturn true;\n\t\t} else if (board[x * BOARD_COL + y] === boardValues.STATUS.EMPTY) {\n\t\t\tboard[x * BOARD_COL + y] = boardValues.STATUS.MISS;\n\t\t\treturn true;\n\t\t}\n\n\t\treturn false;\n\t}\n\n\tconst allShipsSunk = () => {\n\t\tfor (let row = 0; row < BOARD_COL; row++) {\n\t\t\tfor (let col = 0; col < BOARD_COL; col++) {\n\t\t\t\tif (board[row * BOARD_COL + col] === boardValues.SHIPS.PATROL ||\n\t\t\t\t\tboard[row * BOARD_COL + col] === boardValues.SHIPS.SUBMARINE ||\n\t\t\t\t\tboard[row * BOARD_COL + col] === boardValues.SHIPS.DESTROYER ||\n\t\t\t\t\tboard[row * BOARD_COL + col] === boardValues.SHIPS.BATTLESHIP ||\n\t\t\t\t\tboard[row * BOARD_COL + col] === boardValues.SHIPS.CARRIER) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn true;\n\t}\n\n\tconst getBoard = () => {\n\t\treturn board;\n\t}\n\n\treturn {\n\t\tinit, placeShip, receiveAttack, getBoard, ships, allShipsSunk\n\t};\n};\n\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\nconst DOM = () => {\n\tlet playerBoard = document.getElementById(\"playerboard\");\n\tlet computerBoard = document.getElementById(\"computerboard\");\n\n\tconst renderPlayerBoard = (board) => {\n\t\tlet template = `<div class=\"board\">`;\n\t\tfor (let row = 0; row < 10; row++) {\n\t\t\tfor (let col = 0; col < 10; col++) {\n\t\t\t\tlet status = ``;\n\t\t\t\tif (board[row * 10 + col] === 7) {\n\t\t\t\t\tstatus = `hit`;\n\t\t\t\t} else if (board[row * 10 + col] === 6) {\n\t\t\t\t\tstatus = `miss`;\n\t\t\t\t} else if (board[row * 10 + col] !== 0) {\n\t\t\t\t\tstatus = `ship-block`;\n\t\t\t\t}\n\t\t\t\ttemplate += `<div class=\"column ${status}\" data-index=\"${row * 10 + col}\"></div>`;\n\t\t\t}\n\t\t\ttemplate += `<div></div>`;\n\t\t}\n\t\ttemplate += `</div>`;\n\t\tplayerBoard.innerHTML = template;\n\t}\n\n\tconst renderComputerBoard = (board) => {\n\t\tlet template = `<div class=\"board\">`;\n\t\tfor (let row = 0; row < 10; row++) {\n\t\t\tfor (let col = 0; col < 10; col++) {\n\t\t\t\tlet status = ``;\n\t\t\t\tif (board[row * 10 + col] === 7) {\n\t\t\t\t\tstatus = `hit`;\n\t\t\t\t} else if (board[row * 10 + col] === 6) {\n\t\t\t\t\tstatus = `miss`;\n\t\t\t\t}\n\t\t\t\ttemplate += `<div class=\"column ${status}\" data-index=\"${row * 10 + col}\"></div>`;\n\t\t\t}\n\t\t\ttemplate += `<div></div>`;\n\t\t}\n\t\ttemplate += `</div>`;\n\t\tcomputerBoard.innerHTML = template;\n\t}\n\n\treturn {\n\t\trenderPlayerBoard, renderComputerBoard\n\t};\n}\n\nconst message = () => {\n\n}\n\n//factory function\nconst Player = () => {\n\tlet computerBoard = document.getElementById(\"computerboard\");\n\tlet playerBoard = document.getElementById(\"playerboard\");\n\tlet message = document.getElementById(\"message\");\n\n\tconst AI_attackBoard = (board) => {\n\n\t}\n\n\tconst displayMessage = (msg) => {\n\t\tmessage.textContent = msg;\n\t}\n\n\treturn {\n\t\tAI_attackBoard\n\t};\n};\n\n//factory function\nconst Game = (() => {\n\n\tconst getPosition = (position) => {\n\t\tlet index = position.getAttribute(\"data-index\");\n\t\tlet x = parseInt(index / 10);\n\t\tlet y = index % 10;\n\t\treturn { x, y };\n\t}\n\t\n\tlet init = () => {\n\t\tlet playerGameBoard = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"GameBoard\"])();\n\t\tplayerGameBoard.init();\n\n\t\tlet computerGameBoard = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"GameBoard\"])();\n\t\tcomputerGameBoard.init();\n\n\t\tlet dom = DOM();\n\t\tdom.renderPlayerBoard(playerGameBoard.getBoard());\n\t\tdom.renderComputerBoard(computerGameBoard.getBoard());\n\n\t\tlet player = Player();\n\n\t\tplayerGameBoard.placeShip();\n\n\t\tdocument.getElementById(\"boardArena\").addEventListener(\"click\", function (event) {\n\t\t\tif (event.target.parentNode.parentNode.matches(\"#playerboard\")) {\n\t\t\t\tlet coords = getPosition(event.target);\n\t\t\t\tlet orientation = document.querySelector(\"input[name=orientation]:checked\").value ===  \"horizontal\";\n\t\t\t\tplayerGameBoard.placeShip(coords.x, coords.y, orientation);\n\t\t\t}\n\n\t\t\tif (event.target.parentNode.parentNode.matches(\"#computerboard\")) {\n\t\t\t\tlet coords = getPosition(event.target);\n\t\t\t\tif (computerGameBoard.receiveAttack(coords.x, coords.y)) {\n\t\t\t\t\tdom.renderComputerBoard(computerGameBoard.getBoard());\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t//let computer = Player();\n\t\t//computer.AI_attackBoard(playerGameBoard.getBoard());\n\t}\n\n\treturn {\n\t\tinit\n\t};\n\n})();\n\nGame.init();\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ship\", function() { return Ship; });\n// factory function\nconst Ship = (name, size) => {\n\tlet numHits = 0;\n\n\tconst hit = () => {\n\t\tnumHits++;\n\t}\n\n\tconst isSunk = () => {\n\t\treturn numHits === size;\n\t}\n\n\treturn { name, size, numHits, hit, isSunk };\n};\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ });