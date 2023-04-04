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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonListButton = (0, _createReactClass2.default)({
  displayName: 'IonListButton',

  propTypes: {
    customClasses: _propTypes2.default.string,
    action: _propTypes2.default.string,
    side: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      action: 'delete',
      side: 'left'
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'enable-pointer-events': true }, 'item-' + this.props.action, 'item-' + this.props.side + '-edit', this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: classes },
      this.props.children
    );
  }
});

exports.default = IonListButton;