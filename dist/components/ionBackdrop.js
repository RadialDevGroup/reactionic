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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonBackdrop = (0, _createReactClass2.default)({
  displayName: 'IonBackdrop',

  propTypes: {
    customClasses: _propTypes2.default.string,
    show: _propTypes2.default.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      show: false
    };
  },
  render: function render() {
    var backdrop;
    if (this.props.show) {
      backdrop = _react2.default.createElement('div', { className: 'backdrop visible active' });
    } else {
      backdrop = false;
    }
    var classes = (0, _classnames2.default)({ 'backdrop': true }, this.props.customClasses);
    return _react2.default.createElement(
      _CSSTransitionGroup2.default,
      {
        transitionEnterTimeout: 100,
        transitionLeave: false,
        transitionName: {
          enter: 'backdrop-invisible',
          enterActive: 'backdrop-visible'
        }
      },
      backdrop
    );
  }
});

exports.default = IonBackdrop;