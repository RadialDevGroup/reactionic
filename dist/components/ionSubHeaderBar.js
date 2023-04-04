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

var IonSubHeaderBar = (0, _createReactClass2.default)({
  displayName: 'IonSubHeaderBar',

  propTypes: {
    customClasses: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: ''
    };
  },
  contextTypes: {
    ionUpdateHasX: _propTypes2.default.func,
    ionHasTabsTop: _propTypes2.default.bool
  },
  componentWillMount: function componentWillMount() {
    this.context.ionUpdateHasX('ionHasSubheader', true);
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'bar': true, 'bar-subheader': true }, this.props.customClasses || 'bar-stable', // default class
    { 'has-tabs-top': this.context.ionHasTabsTop });
    return _react2.default.createElement(
      'div',
      { className: classes },
      this.props.children
    );
  }
});

exports.default = IonSubHeaderBar;