'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonSpinner = (0, _createReactClass2.default)({
  displayName: 'IonSpinner',

  propTypes: {
    customClasses: _propTypes2.default.string,
    icon: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      icon: 'ios'
    };
  },
  componentDidMount: function componentDidMount() {
    // Below comes from Ionic
    var TRANSLATE32 = 'translate(32,32)';
    var STROKE_OPACITY = 'stroke-opacity';
    var ROUND = 'round';
    var INDEFINITE = 'indefinite';
    var DURATION = '750ms';
    var NONE = 'none';
    var SHORTCUTS = {
      a: 'animate',
      an: 'attributeName',
      at: 'animateTransform',
      c: 'circle',
      da: 'stroke-dasharray',
      os: 'stroke-dashoffset',
      f: 'fill',
      lc: 'stroke-linecap',
      rc: 'repeatCount',
      sw: 'stroke-width',
      t: 'transform',
      v: 'values'
    };

    var SPIN_ANIMATION = {
      v: '0,32,32;360,32,32',
      an: 'transform',
      type: 'rotate',
      rc: INDEFINITE,
      dur: DURATION
    };

    function createSvgElement(tagName, data, parent, spinnerName) {
      var ele = document.createElement(SHORTCUTS[tagName] || tagName);
      var k, x, y;
      for (k in data) {

        if (Array.isArray(data[k])) {
          for (x = 0; x < data[k].length; x++) {
            if (data[k][x].fn) {
              for (y = 0; y < data[k][x].t; y++) {
                createSvgElement(k, data[k][x].fn(y, spinnerName), ele, spinnerName);
              }
            } else {
              createSvgElement(k, data[k][x], ele, spinnerName);
            }
          }
        } else {
          setSvgAttribute(ele, k, data[k]);
        }
      }

      parent.appendChild(ele);
    }

    function setSvgAttribute(ele, k, v) {
      ele.setAttribute(SHORTCUTS[k] || k, v);
    }

    function animationValues(strValues, i) {
      var values = strValues.split(';');
      var back = values.slice(i);
      var front = values.slice(0, values.length - back.length);
      values = back.concat(front).reverse();
      return values.join(';') + ';' + values[0];
    }

    var IOS_SPINNER = {
      sw: 4,
      lc: ROUND,
      line: [{
        fn: function fn(i, spinnerName) {
          return {
            y1: spinnerName == 'ios' ? 17 : 12,
            y2: spinnerName == 'ios' ? 29 : 20,
            t: TRANSLATE32 + ' rotate(' + (30 * i + (i < 6 ? 180 : -180)) + ')',
            a: [{
              fn: function fn() {
                return {
                  an: STROKE_OPACITY,
                  dur: DURATION,
                  v: animationValues('0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1', i),
                  rc: INDEFINITE
                };
              },
              t: 1
            }]
          };
        },
        t: 12
      }]
    };

    var spinners = {

      android: {
        c: [{
          sw: 6,
          da: 128,
          os: 82,
          r: 26,
          cx: 32,
          cy: 32,
          f: NONE
        }]
      },

      ios: IOS_SPINNER,

      'ios-small': IOS_SPINNER,

      bubbles: {
        sw: 0,
        c: [{
          fn: function fn(i) {
            return {
              cx: 24 * Math.cos(2 * Math.PI * i / 8),
              cy: 24 * Math.sin(2 * Math.PI * i / 8),
              t: TRANSLATE32,
              a: [{
                fn: function fn() {
                  return {
                    an: 'r',
                    dur: DURATION,
                    v: animationValues('1;2;3;4;5;6;7;8', i),
                    rc: INDEFINITE
                  };
                },
                t: 1
              }]
            };
          },
          t: 8
        }]
      },

      circles: {

        c: [{
          fn: function fn(i) {
            return {
              r: 5,
              cx: 24 * Math.cos(2 * Math.PI * i / 8),
              cy: 24 * Math.sin(2 * Math.PI * i / 8),
              t: TRANSLATE32,
              sw: 0,
              a: [{
                fn: function fn() {
                  return {
                    an: 'fill-opacity',
                    dur: DURATION,
                    v: animationValues('.3;.3;.3;.4;.7;.85;.9;1', i),
                    rc: INDEFINITE
                  };
                },
                t: 1
              }]
            };
          },
          t: 8
        }]
      },

      crescent: {
        c: [{
          sw: 4,
          da: 128,
          os: 82,
          r: 26,
          cx: 32,
          cy: 32,
          f: NONE,
          at: [SPIN_ANIMATION]
        }]
      },

      dots: {

        c: [{
          fn: function fn(i) {
            return {
              cx: 16 + 16 * i,
              cy: 32,
              sw: 0,
              a: [{
                fn: function fn() {
                  return {
                    an: 'fill-opacity',
                    dur: DURATION,
                    v: animationValues('.5;.6;.8;1;.8;.6;.5', i),
                    rc: INDEFINITE
                  };
                },
                t: 1
              }, {
                fn: function fn() {
                  return {
                    an: 'r',
                    dur: DURATION,
                    v: animationValues('4;5;6;5;4;3;3', i),
                    rc: INDEFINITE
                  };
                },
                t: 1
              }]
            };
          },
          t: 3
        }]
      },

      lines: {
        sw: 7,
        lc: ROUND,
        line: [{
          fn: function fn(i) {
            return {
              x1: 10 + i * 14,
              x2: 10 + i * 14,
              a: [{
                fn: function fn() {
                  return {
                    an: 'y1',
                    dur: DURATION,
                    v: animationValues('16;18;28;18;16', i),
                    rc: INDEFINITE
                  };
                },
                t: 1
              }, {
                fn: function fn() {
                  return {
                    an: 'y2',
                    dur: DURATION,
                    v: animationValues('48;44;36;46;48', i),
                    rc: INDEFINITE
                  };
                },
                t: 1
              }, {
                fn: function fn() {
                  return {
                    an: STROKE_OPACITY,
                    dur: DURATION,
                    v: animationValues('1;.8;.5;.4;1', i),
                    rc: INDEFINITE
                  };
                },
                t: 1
              }]
            };
          },
          t: 4
        }]
      },

      ripple: {
        f: NONE,
        'fill-rule': 'evenodd',
        sw: 3,
        circle: [{
          fn: function fn(i) {
            return {
              cx: 32,
              cy: 32,
              a: [{
                fn: function fn() {
                  return {
                    an: 'r',
                    begin: i * -1 + 's',
                    dur: '2s',
                    v: '0;24',
                    keyTimes: '0;1',
                    keySplines: '0.1,0.2,0.3,1',
                    calcMode: 'spline',
                    rc: INDEFINITE
                  };
                },
                t: 1
              }, {
                fn: function fn() {
                  return {
                    an: STROKE_OPACITY,
                    begin: i * -1 + 's',
                    dur: '2s',
                    v: '.2;1;.2;0',
                    rc: INDEFINITE
                  };
                },
                t: 1
              }]
            };
          },
          t: 2
        }]
      },

      spiral: {
        defs: [{
          linearGradient: [{
            id: 'sGD',
            gradientUnits: 'userSpaceOnUse',
            x1: 55,
            y1: 46,
            x2: 2,
            y2: 46,
            stop: [{
              offset: 0.1,
              class: 'stop1'
            }, {
              offset: 1,
              class: 'stop2'
            }]
          }]
        }],
        g: [{
          sw: 4,
          lc: ROUND,
          f: NONE,
          path: [{
            stroke: 'url(#sGD)',
            d: 'M4,32 c0,15,12,28,28,28c8,0,16-4,21-9'
          }, {
            d: 'M60,32 C60,16,47.464,4,32,4S4,16,4,32'
          }],
          at: [SPIN_ANIMATION]
        }]
      }

    };

    var animations = {

      android: function android(ele) {

        var rIndex = 0;
        var rotateCircle = 0;
        var startTime;
        var svgEle = ele.querySelector('g');
        var circleEle = ele.querySelector('circle');

        function run() {
          var v = easeInOutCubic(Date.now() - startTime, 650);
          var scaleX = 1;
          var translateX = 0;
          var dasharray = 188 - 58 * v;
          var dashoffset = 182 - 182 * v;

          if (rIndex % 2) {
            scaleX = -1;
            translateX = -64;
            dasharray = 128 - -58 * v;
            dashoffset = 182 * v;
          }

          var rotateLine = [0, -101, -90, -11, -180, 79, -270, -191][rIndex];

          setSvgAttribute(circleEle, 'da', Math.max(Math.min(dasharray, 188), 128));
          setSvgAttribute(circleEle, 'os', Math.max(Math.min(dashoffset, 182), 0));
          setSvgAttribute(circleEle, 't', 'scale(' + scaleX + ',1) translate(' + translateX + ',0) rotate(' + rotateLine + ',32,32)');

          rotateCircle += 4.1;
          if (rotateCircle > 359) rotateCircle = 0;
          setSvgAttribute(svgEle, 't', 'rotate(' + rotateCircle + ',32,32)');

          if (v >= 1) {
            rIndex++;
            if (rIndex > 7) rIndex = 0;
            startTime = Date.now();
          }

          window.requestAnimationFrame(run);
        }

        return function () {
          startTime = Date.now();
          run();
        };
      }

    };

    function easeInOutCubic(t, c) {
      t /= c / 2;
      if (t < 1) return 1 / 2 * t * t * t;
      t -= 2;
      return 1 / 2 * (t * t * t + 2);
    }

    var iconElement = _reactDom2.default.findDOMNode(this);
    var spinnerName = this.props.icon;

    init();

    function init() {
      // create element to contain SVG
      var svgSpan = document.createElement('span');

      // create the SVG element of type spinnerName
      createSvgElement('svg', {
        viewBox: '0 0 64 64',
        g: [spinners[spinnerName]]
      }, svgSpan, spinnerName);

      // add the SVG to the element
      // for some reason React doesn't like dynamic addtion in this context, so it's done with textual HTML
      iconElement.innerHTML = svgSpan.innerHTML;

      // Specifically for animations to work,
      // Android 4.3 and below requires the element to be
      // added as an html string, rather than dynmically
      // building up the svg element and appending it.
      start(spinnerName, iconElement);
    };

    function start(spinnerName, ele) {
      animations[spinnerName] && animations[spinnerName](ele)();
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)('spinner', 'spinner-' + this.props.icon, this.props.customClasses);
    return _react2.default.createElement('i', { className: classes });
  }
});

exports.default = IonSpinner;