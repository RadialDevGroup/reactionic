'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonSideMenus = (0, _createReactClass2.default)({
  displayName: 'IonSideMenus',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'view snap-drawers' },
      this.props.children
    );
  }
});

exports.default = IonSideMenus;