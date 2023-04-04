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

var IonFooterBar = (0, _createReactClass2.default)({
  displayName: 'IonFooterBar',

  propTypes: {
    customClasses: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      ionHasTabs: false
    };
  },
  contextTypes: {
    ionUpdateHasX: _propTypes2.default.func.isRequired,
    ionHasTabs: _propTypes2.default.bool
  },
  componentWillMount: function componentWillMount() {
    this.context.ionUpdateHasX('ionHasFooter', true);
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'bar': true, 'bar-footer': true }, this.props.customClasses || 'bar-stable', // default class
    { 'has-tabs': this.context.ionHasTabs });
    return _react2.default.createElement(
      'div',
      { className: classes },
      this.props.children
    );
  }
});

exports.default = IonFooterBar;