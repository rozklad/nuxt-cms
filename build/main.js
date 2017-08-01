require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(5);







var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// MongoDb
__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Promise = global.Promise;
__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connect('mongodb://localhost/weeker');

// Body-parser settings
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json()); // to support JSON-encoded bodies
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

// Import API Router
app.use('/api', __WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */]);

// Import and Set Nuxt.js options
var config = __webpack_require__(8);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__week__ = __webpack_require__(9);





var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add TASKS Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__tasks__["a" /* default */]);

// Add WEEK Routes
router.use(__WEBPACK_IMPORTED_MODULE_2__week__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_task__);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* GET users listing. */
router.get('/tasks', function (req, res, next) {
  __WEBPACK_IMPORTED_MODULE_1__models_task___default.a.find({}, function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
});

router.post('/tasks', function (req, res) {
  var new_task = new __WEBPACK_IMPORTED_MODULE_1__models_task___default.a(req.body);
  new_task.save(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Weeker',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_week__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_week__);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* GET users listing. */
router.get('/week/:year/:number', function (req, res, next) {
  console.log('hola prdel');
  __WEBPACK_IMPORTED_MODULE_1__models_week___default.a.findOne({ year: req.params.year, number: req.params.number }, function (err, week) {
    if (err) res.send(err);
    console.log(week);
    res.json(week);
  });
});

/* POST create new week */
router.post('/week', function (req, res) {
  var new_week = new __WEBPACK_IMPORTED_MODULE_1__models_week___default.a(req.body);
  new_week.save(function (err, week) {
    if (err) res.send(err);
    res.json(week);
  });
});

/* POST update week */
router.post('/week/update', function (req, res) {
  var data = req.body;
  __WEBPACK_IMPORTED_MODULE_1__models_week___default.a.findOneAndUpdate({ number: data.number, year: data.year }, req.body, { new: true }, function (err, week) {
    if (err) res.send(err);
    res.json(week);
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var WeekSchema = new Schema({
  number: {
    type: Number,
    Required: 'Kindly enter the number of week'
  },
  year: {
    type: Number
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    default: ''
  },
  status: {
    type: [{
      type: String,
      enum: ['passed', 'actual']
    }],
    default: ['actual']
  }
});

module.exports = mongoose.model('Week', WeekSchema);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map