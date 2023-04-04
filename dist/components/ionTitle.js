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

var IonTitle = (0, _createReactClass2.default)({
  displayName: 'IonTitle',

  propTypes: {
    customClasses: _propTypes2.default.string,
    marginCompensation: _propTypes2.default.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      marginCompensation: 0
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'title': true }, this.props.customClasses, { 'title-left': this.props.marginCompensation > 0 });
    var styles = this.props.marginCompensation ? { "marginLeft": this.props.marginCompensation } : {};
    return _react2.default.createElement(
      'h1',
      { className: classes, style: styles },
      this.props.children
    );
  }
});

exports.default = IonTitle;