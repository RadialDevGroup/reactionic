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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IonCard = (0, _createReactClass2.default)({
  displayName: 'IonCard',

  propTypes: {
    customClasses: _propTypes2.default.string,
    list: _propTypes2.default.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      list: false
    };
  },
  render: function render() {
    // extract props used here, pass on the rest
    var _props = this.props,
        list = _props.list,
        customClasses = _props.customClasses,
        other = _objectWithoutProperties(_props, ['list', 'customClasses']);

    var classes = (0, _classnames2.default)({ 'card': true,
      'list': list }, customClasses);
    return _react2.default.createElement(
      'div',
      _extends({ className: classes }, other),
      this.props.children
    );
  }
});

exports.default = IonCard;