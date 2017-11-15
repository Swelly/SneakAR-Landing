(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	console.log('Test:' + (0, _test2.default)());
})();

$(document).ready(function () {

	function setHeight() {
		var windowHeight = $(window).innerHeight();
		$('#card').css('min-height', windowHeight);
	};

	setHeight();

	$(window).resize(function () {
		setHeight();
	});

	$(document).on("mousemove", function (e) {
		var card = $("#card");
		var ax = -($(window).innerWidth() / 2 - e.pageX) / 20;
		var ay = ($(window).innerHeight() / 2 - e.pageY) / 10;

		card.attr("style", "transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-webkit-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-moz-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg)");
	});
});

},{"./test":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = status;
function status() {
    return 'OK';
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluLmpzIiwic3JjXFxqc1xcdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLENBQUMsWUFBTTtBQUNILFNBQVEsR0FBUixXQUFvQixxQkFBcEI7QUFDSCxDQUZEOztBQUlBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVzs7QUFFNUIsVUFBUyxTQUFULEdBQXFCO0FBQ3BCLE1BQUksZUFBZSxFQUFFLE1BQUYsRUFBVSxXQUFWLEVBQW5CO0FBQ0EsSUFBRSxPQUFGLEVBQVcsR0FBWCxDQUFlLFlBQWYsRUFBNkIsWUFBN0I7QUFDQTs7QUFFRDs7QUFFQSxHQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDM0I7QUFDQSxFQUZEOztBQUtBLEdBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxXQUFmLEVBQTJCLFVBQVMsQ0FBVCxFQUFZO0FBQ3RDLE1BQUksT0FBTyxFQUFFLE9BQUYsQ0FBWDtBQUNBLE1BQUksS0FBSyxFQUFFLEVBQUUsTUFBRixFQUFVLFVBQVYsS0FBdUIsQ0FBdkIsR0FBMEIsRUFBRSxLQUE5QixJQUF1QyxFQUFoRDtBQUNBLE1BQUksS0FBSyxDQUFDLEVBQUUsTUFBRixFQUFVLFdBQVYsS0FBd0IsQ0FBeEIsR0FBMkIsRUFBRSxLQUE5QixJQUF1QyxFQUFoRDs7QUFFQSxPQUFLLElBQUwsQ0FBVSxPQUFWLEVBQW1CLHdCQUFzQixFQUF0QixHQUF5QixlQUF6QixHQUF5QyxFQUF6QyxHQUE0QyxrQ0FBNUMsR0FBK0UsRUFBL0UsR0FBa0YsZUFBbEYsR0FBa0csRUFBbEcsR0FBcUcsK0JBQXJHLEdBQXFJLEVBQXJJLEdBQXdJLGVBQXhJLEdBQXdKLEVBQXhKLEdBQTJKLE1BQTlLO0FBQ0EsRUFORDtBQU9BLENBckJEOzs7Ozs7OztrQkNOd0IsTTtBQUFULFNBQVMsTUFBVCxHQUFrQjtBQUM3QixXQUFPLElBQVA7QUFDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc3RhdHVzIGZyb20gJy4vdGVzdCc7XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFRlc3Q6JHtzdGF0dXMoKX1gKTtcclxufSkoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRmdW5jdGlvbiBzZXRIZWlnaHQoKSB7XHJcblx0XHRsZXQgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XHJcblx0XHQkKCcjY2FyZCcpLmNzcygnbWluLWhlaWdodCcsIHdpbmRvd0hlaWdodCk7XHJcblx0fTtcclxuXHJcblx0c2V0SGVpZ2h0KCk7XHJcblxyXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHRzZXRIZWlnaHQoKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdCQoZG9jdW1lbnQpLm9uKFwibW91c2Vtb3ZlXCIsZnVuY3Rpb24oZSkge1xyXG5cdFx0bGV0IGNhcmQgPSAkKFwiI2NhcmRcIik7XHJcblx0XHRsZXQgYXggPSAtKCQod2luZG93KS5pbm5lcldpZHRoKCkvMi0gZS5wYWdlWCkgLyAyMDtcclxuXHRcdGxldCBheSA9ICgkKHdpbmRvdykuaW5uZXJIZWlnaHQoKS8yLSBlLnBhZ2VZKSAvIDEwO1xyXG5cclxuXHRcdGNhcmQuYXR0cihcInN0eWxlXCIsIFwidHJhbnNmb3JtOiByb3RhdGVZKFwiK2F4K1wiZGVnKSByb3RhdGVYKFwiK2F5K1wiZGVnKTstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWShcIitheCtcImRlZykgcm90YXRlWChcIitheStcImRlZyk7LW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoXCIrYXgrXCJkZWcpIHJvdGF0ZVgoXCIrYXkrXCJkZWcpXCIpO1xyXG5cdH0pO1xyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdHVzKCkge1xyXG4gICAgcmV0dXJuICdPSyc7XHJcbn07XHJcbiJdfQ==

//# sourceMappingURL=script.js.map
