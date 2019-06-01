(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_FUNCTION = function () { };
exports.EMPTY_PAGE = document.createElement('div');
exports.OPPSITE = {
    X: 'Y',
    Y: 'X'
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file render.ts 抽象类，为渲染提供运行时支持
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.06.27
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Render = (function () {
    function Render() {
    }
    Render.register = function (name, renderClass) {
        Render._renders[name] = renderClass;
    };
    Render.getRenderInstance = function (name) {
        var RenderClass = Render._renders[name];
        if (!RenderClass) {
            throw new Error("Missing render : " + name);
        }
        return new RenderClass();
    };
    Render.prototype.sign = function (x) {
        x = +x;
        if (x === 0 || isNaN(x)) {
            return 0;
        }
        return x > 0 ? 1 : -1;
    };
    return Render;
}());
Render._renders = {};
exports.default = Render;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file swiper.ts swiper 主文件
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 * @created: 2017.06.26
 *
 */
__webpack_require__(3);
var device_1 = __webpack_require__(8);
var constant_1 = __webpack_require__(0);
var interface_1 = __webpack_require__(9);
var easing_1 = __webpack_require__(10);
var render_1 = __webpack_require__(1);
var slide_1 = __webpack_require__(11);
var rotate_1 = __webpack_require__(12);
var flip_1 = __webpack_require__(13);
var card_1 = __webpack_require__(14);
var fade_1 = __webpack_require__(15);
var dumi_1 = __webpack_require__(16);
render_1.default.register('slide', slide_1.default);
render_1.default.register('rotate', rotate_1.default);
render_1.default.register('flip', flip_1.default);
render_1.default.register('card', card_1.default);
render_1.default.register('fade', fade_1.default);
render_1.default.register('dumi', dumi_1.default);
var Swiper = (function () {
    function Swiper(options) {
        options = __assign({}, Swiper.DefaultOptions, options);
        options.transition = __assign({}, Swiper.DefaultOptions.transition, options.transition);
        this.$container = options.container;
        this.debug = options.debug;
        this.data = options.data;
        this.axis = options.isVertical ? 'Y' : 'X';
        this.isLoop = options.isLoop;
        this.initIndex = options.initIndex;
        this.keepDefaultClasses = options.keepDefaultClasses;
        this.sideLength = this.axis === 'X' ? this.$container.clientWidth : this.$container.clientHeight;
        this.transition = options.transition;
        this._listeners = {};
        // runtime variable
        this.sliding = false;
        this.moving = false;
        this.pageChange = false;
        this.moveDirection = interface_1.Direction.Nonward;
        this.activePage = constant_1.EMPTY_PAGE;
        this.lastActivePage = constant_1.EMPTY_PAGE;
        this.start = { X: 0, Y: 0 };
        this.end = { X: 0, Y: 0 };
        this.offset = { X: 0, Y: 0 };
        this.log = this.debug ? console.log.bind(window.console) : constant_1.EMPTY_FUNCTION;
        this.bindEvents();
        this.initRender();
    }
    Swiper.prototype.bindEvents = function () {
        this.$container.addEventListener(Swiper.Device.startEvent, this, { passive: false });
        this.$container.addEventListener(Swiper.Device.moveEvent, this, { passive: false });
        this.$container.addEventListener(Swiper.Device.transitionEvent, this, { passive: false });
        window.addEventListener(Swiper.Device.endEvent, this, { passive: false });
        window.addEventListener(Swiper.Device.resizeEvent, this, false);
    };
    Swiper.prototype.unbindEvents = function () {
        this.$container.removeEventListener(Swiper.Device.startEvent, this, { passive: false });
        this.$container.removeEventListener(Swiper.Device.moveEvent, this, { passive: false });
        this.$container.removeEventListener(Swiper.Device.transitionEvent, this, { passive: false });
        window.removeEventListener(Swiper.Device.endEvent, this, { passive: false });
        window.removeEventListener(Swiper.Device.resizeEvent, this, false);
    };
    Swiper.prototype.handleEvent = function (event) {
        var deviceEvent = Swiper.Device.getDeviceEvent(event);
        switch (deviceEvent.type) {
            case 'mousedown':
                // block mouse buttons except left
                if (deviceEvent.button !== 0) {
                    break;
                }
            case 'touchstart':
                this.keepDefaultHandler(deviceEvent);
                this.startHandler(deviceEvent.position);
                break;
            case Swiper.Device.moveEvent:
                this.keepDefaultHandler(deviceEvent);
                this.moveHandler(deviceEvent.position);
                break;
            case Swiper.Device.endEvent:
            case Swiper.Device.cancelEvent:
                // mouseout, touchcancel event, trigger endEvent
                this.endHandler();
                break;
            case Swiper.Device.resizeEvent:
                this.resizeHandler();
                break;
            case Swiper.Device.transitionEvent:
                this.transitionEndHandler(deviceEvent);
                break;
            default:
                break;
        }
    };
    Swiper.prototype.keepDefaultHandler = function (event) {
        if (event.target && /^(input|textarea|a|select)$/i.test(event.target.tagName)) {
            return;
        }
        var keepDefaultClasses = this.keepDefaultClasses;
        for (var _i = 0, keepDefaultClasses_1 = keepDefaultClasses; _i < keepDefaultClasses_1.length; _i++) {
            var keepDefaultClass = keepDefaultClasses_1[_i];
            for (var e = event.target; e !== null; e = e.parentElement) {
                if (e.classList.contains(keepDefaultClass)) {
                    return;
                }
            }
        }
        event.preventDefault();
    };
    Swiper.prototype.startHandler = function (startPosition) {
        if (this.sliding) {
            return;
        }
        this.log('start');
        this.moving = true;
        this.startTime = new Date().getTime();
        this.start = startPosition;
        // 设置翻页动画
        this.transition = __assign({}, this.transition, this.currentPage.transition);
        this.renderInstance = render_1.default.getRenderInstance(this.transition.name);
        if (this.transition.direction === interface_1.Direction.Nonward) {
            return;
        }
        this.fire('swipeStart');
    };
    Swiper.prototype.moveHandler = function (movingPosition) {
        if (this.sliding || !this.moving || this.transition.direction === interface_1.Direction.Nonward) {
            return;
        }
        this.log('moving');
        this.end = movingPosition;
        this.offset = {
            X: this.end.X - this.start.X,
            Y: this.end.Y - this.start.Y
        };
        if (this.offset[this.axis] < 0) {
            this.moveDirection = interface_1.Direction.Forward;
            this.lastActivePage = this.activePage;
            this.activePage = this.currentPage.next;
        }
        else if (this.offset[this.axis] > 0) {
            this.moveDirection = interface_1.Direction.Backward;
            this.lastActivePage = this.activePage;
            this.activePage = this.currentPage.prev;
        }
        else {
            this.moveDirection = interface_1.Direction.Nonward;
            this.lastActivePage = this.activePage;
            this.activePage = constant_1.EMPTY_PAGE;
        }
        this.fire('swipeMoving');
        if (this.activePage !== this.lastActivePage && this.activePage !== constant_1.EMPTY_PAGE) {
            this.fire('activePageChanged');
        }
        // 页面禁止滑动时
        // 防止突然「先上后下」，直接将 this.offset 置为 0
        // 防止需要「等」 offset 归 0 后才能往上走
        if (this.transition.direction && this.transition.direction !== this.moveDirection) {
            this.offset[this.axis] = 0;
            this.start = this.end;
        }
        var GAP = {
            Forward: 20,
            Backward: this.sideLength - 20
        };
        var directionKey = interface_1.Direction[this.moveDirection];
        if (this.moveDirection * this.end[this.axis] > this.moveDirection * GAP[directionKey]) {
            var logStr = this.moveDirection === interface_1.Direction.Forward ? '<--- near edge' : 'near edge --->';
            this.log(logStr);
            return this.endHandler();
        }
        // activePage 为 EMPTY_PAGE 需要渲染，比如快速滑动最后一帧            
        // 翻页时长为 0 时不渲染，但是需要在上面判断是否在边界附近
        if (this.transition.duration !== 0) {
            this.render();
        }
    };
    Swiper.prototype.endHandler = function () {
        if (this.sliding || !this.moving || this.transition.direction === interface_1.Direction.Nonward) {
            return;
        }
        this.moving = false;
        this.log('end');
        // 如果禁止滑动
        if (this.transition.direction && this.transition.direction !== this.moveDirection) {
            this.offset[this.axis] = 0;
        }
        this.endTime = new Date().getTime();
        var moveTime = this.endTime - this.startTime;
        var threshold = moveTime > 300 ? this.sideLength / 3 : 14;
        var sideOffset = this.offset[this.axis];
        var absOffset = Math.abs(this.offset[this.axis]);
        var absReverseOffset = Math.abs(this.offset[constant_1.OPPSITE[this.axis]]);
        // 是在沿着 axis 滑动
        var isSwipeOnTheDir = absReverseOffset < absOffset;
        if (absOffset >= threshold && isSwipeOnTheDir && this.activePage !== constant_1.EMPTY_PAGE) {
            this.pageChange = true;
            this._swipeTo();
        }
        else {
            this.pageChange = false;
            this._swipeTo();
            this.fire('swipeRestore');
        }
    };
    Swiper.prototype.resizeHandler = function () {
        if (!this.sliding && !this.moving) {
            this.sideLength = this.axis === 'X' ? this.$container.clientWidth : this.$container.clientHeight;
        }
    };
    Swiper.prototype.transitionEndHandler = function (event) {
        if (event && event.target !== this.currentPage) {
            return;
        }
        this.$swiper.style.cssText = '';
        this.currentPage.style.cssText = '';
        this.activePage.style.cssText = '';
        // 回弹
        if (this.pageChange === false) {
            this.activePage.classList.remove('active');
            this.fire('swipeRestored');
        }
        else {
            this.currentPage.classList.remove('current');
            this.activePage.classList.remove('active');
            this.activePage.classList.add('current');
            this.currentPage = this.activePage;
            this.fire('swipeChanged');
        }
        this.activePage = constant_1.EMPTY_PAGE;
        this.lastActivePage = constant_1.EMPTY_PAGE;
        this.offset.X = 0;
        this.offset.Y = 0;
        this.sliding = false;
        this.pageChange = false;
    };
    Swiper.prototype.swipeTo = function (toIndex, transition) {
        if (this.sliding) {
            return;
        }
        var currentIndex = this.currentPage.index;
        this.moveDirection = interface_1.Direction.Nonward;
        this.pageChange = true;
        if (toIndex > currentIndex) {
            this.moveDirection = interface_1.Direction.Forward;
        }
        else if (toIndex < currentIndex) {
            this.moveDirection = interface_1.Direction.Backward;
        }
        var activeIndex = this.isLoop ? (toIndex + this.data.length) % this.data.length : toIndex;
        this.activePage = this.$pages[activeIndex] || constant_1.EMPTY_PAGE;
        // if the same, do nothing
        if (activeIndex === currentIndex || this.activePage === constant_1.EMPTY_PAGE) {
            this.pageChange = false;
        }
        this.transition = __assign({}, this.transition, this.currentPage.transition, transition);
        this.renderInstance = render_1.default.getRenderInstance(this.transition.name);
        // 外部调用仍然需要 fire activePageChanged 事件
        this.fire('activePageChanged');
        this.render();
        this._swipeTo();
    };
    Swiper.prototype.swipePrev = function (transition) {
        var currentIndex = this.currentPage.index;
        this.swipeTo(currentIndex - 1, transition);
    };
    Swiper.prototype.swipeNext = function (transition) {
        var currentIndex = this.currentPage.index;
        this.swipeTo(currentIndex + 1, transition);
    };
    Swiper.prototype.getCurrentIndex = function () {
        return this.currentPage.index;
    };
    Swiper.prototype._swipeTo = function () {
        if (this.sliding) {
            return;
        }
        this.sliding = true;
        var duration = this.activePage === constant_1.EMPTY_PAGE ? 300 : this.transition.duration;
        var elapsedTime = Math.abs(this.offset[this.axis]) / this.sideLength * duration;
        var remainingTime = duration - elapsedTime;
        var animateTime = this.pageChange ? remainingTime : elapsedTime;
        var endOffset = this.pageChange ? this.moveDirection * this.sideLength : 0;
        if (animateTime === 0) {
            return this.transitionEndHandler();
        }
        // force the animation works
        setTimeout(function () {
            this.currentPage.style.webkitTransition = "ease-out " + animateTime + "ms";
            if (this.activePage !== constant_1.EMPTY_PAGE) {
                this.activePage.style.webkitTransition = "ease-out " + animateTime + "ms";
            }
            // set final offset
            this.offset[this.axis] = endOffset;
            this.render();
        }.bind(this), 30);
    };
    Swiper.prototype.initRender = function () {
        var _this = this;
        this.$swiper = document.createElement('div');
        this.$swiper.classList.add('lg-swiper');
        this.$pages = this.data.map(function (page, index) {
            var $page = document.createElement('div');
            $page.classList.add('lg-swiper-page');
            if (typeof page.content === 'string') {
                $page.innerHTML = page.content;
            }
            else {
                $page.appendChild(page.content);
            }
            $page.index = index;
            $page.transition = page.transition;
            if (_this.initIndex === index) {
                $page.classList.add('current');
                _this.currentPage = $page;
            }
            _this.$swiper.appendChild($page);
            return $page;
        });
        this.$pages.forEach(function ($page, index, $pages) {
            var prevIndex = _this.isLoop ? ($pages.length + index - 1) % $pages.length : (index - 1);
            var nextIndex = _this.isLoop ? ($pages.length + index + 1) % $pages.length : (index + 1);
            $page.prev = _this.$pages[prevIndex] || constant_1.EMPTY_PAGE;
            $page.next = _this.$pages[nextIndex] || constant_1.EMPTY_PAGE;
        });
        this.$container.style.overflow = 'hidden';
        this.$container.appendChild(this.$swiper);
    };
    Swiper.prototype.on = function (eventName, callback) {
        var eventNames = eventName.split(' ');
        for (var _i = 0, eventNames_1 = eventNames; _i < eventNames_1.length; _i++) {
            var eventName_1 = eventNames_1[_i];
            if (!this._listeners[eventName_1]) {
                this._listeners[eventName_1] = [];
            }
            this._listeners[eventName_1].push(callback);
        }
        return this;
    };
    Swiper.prototype.off = function (eventName, callback) {
        if (this._listeners[eventName]) {
            var index = this._listeners[eventName].indexOf(callback);
            if (index > -1) {
                this._listeners[eventName].splice(index, 1);
            }
        }
        return this;
    };
    Swiper.prototype.fire = function (eventName, event) {
        if (event === void 0) { event = {}; }
        if (this._listeners[eventName]) {
            for (var _i = 0, _a = this._listeners[eventName]; _i < _a.length; _i++) {
                var callback = _a[_i];
                var extendArgs = __assign({}, event, { name: eventName });
                callback.call(this, extendArgs);
            }
        }
        return this;
    };
    Swiper.prototype.destroy = function () {
        this.unbindEvents();
        this._listeners = {};
        this.$container.style.overflow = '';
        this.$swiper.parentElement.removeChild(this.$swiper);
        this.fire('destroy');
    };
    Swiper.prototype.render = function () {
        // 撤销旧样式
        if (this.lastActivePage !== this.activePage) {
            this.lastActivePage.classList.remove('active');
            this.lastActivePage.style.cssText = '';
            if (this.activePage !== constant_1.EMPTY_PAGE) {
                this.activePage.classList.add('active');
            }
        }
        this.log('offset : ' + this.offset[this.axis]);
        // 普通渲染：计算
        var easingFn = easing_1.default.easeOutQuad;
        if (this.activePage === constant_1.EMPTY_PAGE) {
            easingFn = easing_1.default.rubberBand;
        }
        this.renderInstance.doRender({
            axis: this.axis,
            moveDirection: this.moveDirection,
            sideOffset: easingFn(this.offset[this.axis], this.sideLength),
            sideLength: this.sideLength,
            $swiper: this.$swiper,
            currentPage: this.currentPage,
            activePage: this.activePage
        });
    };
    return Swiper;
}());
Swiper.Events = [
    'swipeBeforeStart',
    'swipeStart',
    'swipeMoving',
    'swipeChanged',
    'swipeRestore',
    'swipeRestored',
    'activePageChanged',
    'destroy'
];
Swiper.Device = new device_1.Device(window);
Swiper.DefaultOptions = {
    container: document.body,
    data: [],
    debug: false,
    isVertical: true,
    isLoop: false,
    initIndex: 0,
    keepDefaultClasses: [],
    transition: {
        name: 'slide',
        duration: 800
    }
};
exports.Swiper = Swiper;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./swiper.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./swiper.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".lg-swiper, .lg-swiper-page{\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.lg-swiper{\n\t-webkit-user-select: none;\n\tuser-select: none;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.lg-swiper .lg-swiper-page{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1;\n\toverflow: hidden;\n\tdisplay: none;\n}\n\n.lg-swiper .lg-swiper-page.current{\n\tz-index: 5;\n\tdisplay: block;\n\twill-change: transform;\n}\n\n.lg-swiper .lg-swiper-page.active{\n\tz-index: 4;\n\tdisplay: block;\n\twill-change: transform;\n}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file: device.js 关于 swiper 所在设备
 * @class Device
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 * @created: 2017.06.26
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
;
var Device = (function () {
    function Device(global) {
        this.hasTouch = !!('ontouchstart' in global
            || (global.DocumentTouch && global.document instanceof global.DocumentTouch));
        this.startEvent = this.hasTouch ? 'touchstart' : 'mousedown';
        this.moveEvent = this.hasTouch ? 'touchmove' : 'mousemove';
        this.endEvent = this.hasTouch ? 'touchend' : 'mouseup';
        this.cancelEvent = this.hasTouch ? 'touchcancel' : 'mouseout';
        this.transitionEvent = this.getTransitionEvent();
        // orientationchange also trigger resize
        this.resizeEvent = 'resize';
    }
    Device.prototype.getDeviceEvent = function (event) {
        var position = this.hasTouch ? this.getTouchPosition(event) : this.getMousePosition(event);
        return {
            type: event.type,
            position: position,
            target: event.target,
            button: event.button,
            preventDefault: event.preventDefault.bind(event)
        };
    };
    Device.prototype.getTouchPosition = function (event) {
        if (event.targetTouches && event.targetTouches.length > 0) {
            return {
                X: event.targetTouches[0].pageX,
                Y: event.targetTouches[0].pageY,
            };
        }
        return {
            X: undefined,
            Y: undefined
        };
    };
    Device.prototype.getMousePosition = function (event) {
        if ('pageX' in event) {
            return {
                X: event.pageX,
                Y: event.pageY
            };
        }
        return {
            X: undefined,
            Y: undefined
        };
    };
    Device.prototype.getTransitionEvent = function () {
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };
        for (var t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };
    return Device;
}());
exports.Device = Device;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Forward"] = -1] = "Forward";
    Direction[Direction["Nonward"] = 0] = "Nonward";
    Direction[Direction["Backward"] = 1] = "Backward";
})(Direction = exports.Direction || (exports.Direction = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file easing.ts 缓动效果类，主要提供计算映射的函数
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.07.11
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Easing = (function () {
    function Easing() {
    }
    Easing.easeOutQuad = function (sideOffset, sideLength) {
        var t = Math.abs(sideOffset / sideLength);
        var y = 0.5 * t * (3 - t);
        return Easing.sign(sideOffset) * y * sideLength;
    };
    Easing.rubberBand = function (sideOffset, sideLength) {
        var t = Math.abs(sideOffset / sideLength);
        var d = sideLength;
        var y = 1.0 - (1.0 / ((0.55 * t) + 1.0));
        return Easing.sign(sideOffset) * y * sideLength;
    };
    Easing.sign = function (x) {
        x = +x;
        if (x === 0 || isNaN(x)) {
            return 0;
        }
        return x > 0 ? 1 : -1;
    };
    return Easing;
}());
exports.default = Easing;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file fade.ts 演示稿翻页效果（默认）
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.06.27
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(1);
var constant_1 = __webpack_require__(0);
var Slide = (function (_super) {
    __extends(Slide, _super);
    function Slide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slide.prototype.doRender = function (swiper) {
        var axis = swiper.axis;
        var sideOffset = swiper.sideOffset;
        var sideLength = swiper.sideLength;
        var moveDirection = swiper.moveDirection;
        var currentTransform = "translateZ(0) translate" + axis + "(" + sideOffset + "px)";
        var activeTransform = "translateZ(0) translate" + axis + "(" + (sideOffset - moveDirection * sideLength) + "px)";
        swiper.currentPage.style.webkitTransform = currentTransform;
        if (swiper.activePage !== constant_1.EMPTY_PAGE) {
            swiper.activePage.style.webkitTransform = activeTransform;
        }
    };
    return Slide;
}(render_1.default));
exports.default = Slide;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file rotate.ts 立方体翻页效果
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.06.27
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(1);
var constant_1 = __webpack_require__(0);
var Rotate = (function (_super) {
    __extends(Rotate, _super);
    function Rotate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rotate.prototype.doRender = function (swiper) {
        var axis = swiper.axis;
        var sideOffset = swiper.sideOffset;
        var sideLength = swiper.sideLength;
        var rotateAxis = constant_1.OPPSITE[axis];
        var moveDirection = swiper.moveDirection;
        var rotateSign = axis === 'Y' ? -1 : 1;
        // compute
        var swiperCss = "-webkit-perspective:" + sideLength * 4 + "px;-webkit-transform-style:preserve-3d;";
        var currentTransform = "rotate" + rotateAxis + "(" + rotateSign * 90 * sideOffset / sideLength + "deg) translateZ(" + 0.889 * sideLength / 2 + "px) scale(0.889)";
        var activeTransform = "rotate" + rotateAxis + "(" + rotateSign * 90 * (sideOffset / sideLength - moveDirection) + "deg) translateZ(" + 0.889 * sideLength / 2 + "px) scale(0.889)";
        // apply
        swiper.$swiper.style.cssText = swiperCss;
        swiper.currentPage.style.webkitTransform = currentTransform;
        if (swiper.activePage !== constant_1.EMPTY_PAGE) {
            swiper.activePage.style.webkitTransform = activeTransform;
        }
    };
    return Rotate;
}(render_1.default));
exports.default = Rotate;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file fade.ts 翻转翻页效果
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.06.27
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(1);
var constant_1 = __webpack_require__(0);
var Flip = (function (_super) {
    __extends(Flip, _super);
    function Flip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Flip.prototype.doRender = function (swiper) {
        var axis = swiper.axis;
        var sideOffset = swiper.sideOffset;
        var sideLength = swiper.sideLength;
        var rotateAxis = constant_1.OPPSITE[axis];
        var rotateSign = axis === 'Y' ? -1 : 1;
        // compute
        var swiperCss = "-webkit-perspective:" + sideLength * 4 + "px;-webkit-transform-style:flat;";
        var currentTransform = "translateZ(" + sideLength / 2 + "px) rotate" + rotateAxis + "(" + rotateSign * 180 * sideOffset / sideLength + "deg) scale(0.875)";
        var activeTransform = "translateZ(" + sideLength / 2 + "px) rotate" + rotateAxis + "(" + rotateSign * 180 * (sideOffset / sideLength + 1) + "deg) scale(0.875)";
        // apply
        swiper.$swiper.style.cssText = swiperCss;
        swiper.currentPage.style.webkitBackfaceVisibility = 'hidden';
        swiper.currentPage.style.webkitTransform = currentTransform;
        if (swiper.activePage !== constant_1.EMPTY_PAGE) {
            swiper.activePage.style.webkitBackfaceVisibility = 'hidden';
            swiper.activePage.style.webkitTransform = activeTransform;
            swiper.activePage.style.zIndex = 7;
        }
    };
    return Flip;
}(render_1.default));
exports.default = Flip;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file card.ts 卡片翻页效果
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.06.27
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(1);
var constant_1 = __webpack_require__(0);
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.doRender = function (swiper) {
        var axis = swiper.axis;
        var sideOffset = swiper.sideOffset;
        var sideLength = swiper.sideLength;
        var scaleAxis = constant_1.OPPSITE[axis];
        var scaleRatio = 1 - 0.2 * Math.abs(sideOffset / sideLength);
        var moveDirection = swiper.moveDirection;
        // compute
        var currentTransform = "translateZ(0) scale" + scaleAxis + "(" + scaleRatio + ") translate" + axis + "(" + sideOffset + "px)";
        var activeTransform = "translateZ(0) translate" + axis + "(" + (sideOffset - moveDirection * sideLength) + "px)";
        // apply
        swiper.currentPage.style.webkitTransform = currentTransform;
        if (swiper.activePage !== constant_1.EMPTY_PAGE) {
            swiper.activePage.style.webkitTransform = activeTransform;
        }
    };
    return Card;
}(render_1.default));
exports.default = Card;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file fade.ts 渐隐翻页效果
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.06.27
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(1);
var constant_1 = __webpack_require__(0);
var Fade = (function (_super) {
    __extends(Fade, _super);
    function Fade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fade.prototype.doRender = function (swiper) {
        var axis = swiper.axis;
        var sideOffset = swiper.sideOffset;
        var sideLength = swiper.sideLength;
        // apply
        swiper.currentPage.style.opacity = 1 - Math.abs(sideOffset / sideLength);
        if (swiper.activePage !== constant_1.EMPTY_PAGE) {
            swiper.activePage.style.opacity = Math.abs(sideOffset / sideLength);
        }
    };
    return Fade;
}(render_1.default));
exports.default = Fade;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file card.ts 度秘 3.0 新版引导页翻页效果
 *
 * 两个页面都有缩放效果，暂时没有想到合适名字
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.06.29
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(1);
var constant_1 = __webpack_require__(0);
var Dumi = (function (_super) {
    __extends(Dumi, _super);
    function Dumi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dumi.prototype.doRender = function (swiper) {
        var axis = swiper.axis;
        var sideOffset = swiper.sideOffset;
        var sideLength = swiper.sideLength;
        var scaleAxis = constant_1.OPPSITE[axis];
        var currentRatio = 1 - 0.4 * Math.min(Math.abs(sideOffset / sideLength), 0.5);
        var activeRatio = 0.8 + 0.4 * Math.min(Math.abs(sideOffset / sideLength), 0.5);
        var moveDirection = swiper.moveDirection;
        // compute
        var currentTransform = "translateZ(0) translate" + axis + "(" + sideOffset + "px) scale(" + currentRatio + ")";
        var activeTransform = "translateZ(0) translate" + axis + "(" + (sideOffset - moveDirection * sideLength) + "px) scale(" + activeRatio + ")";
        // apply
        swiper.currentPage.style.webkitTransform = currentTransform;
        if (swiper.activePage !== constant_1.EMPTY_PAGE) {
            swiper.activePage.style.webkitTransform = activeTransform;
        }
    };
    return Dumi;
}(render_1.default));
exports.default = Dumi;


/***/ })
/******/ ]);
});