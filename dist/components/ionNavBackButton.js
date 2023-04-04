'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ionButton = require('./ionButton');

var _ionButton2 = _interopRequireDefault(_ionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonNavBackButton = (0, _createReactClass2.default)({
  displayName: 'IonNavBackButton',

  propTypes: {
    customClasses: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: ''
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)(this.props.customClasses, "buttons back-button pull-left");
    return _react2.default.createElement(
      _ionButton2.default,
      _extends({}, this.props, this.state, { customClasses: classes, backButton: true }),
      this.props.children
    );
  }
});

exports.default = IonNavBackButton;