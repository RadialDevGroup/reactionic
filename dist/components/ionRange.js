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

var IonRange = (0, _createReactClass2.default)({
  displayName: 'IonRange',

  propTypes: {
    customClasses: _propTypes2.default.string,
    defaultValue: _propTypes2.default.number,
    handleChange: _propTypes2.default.func,
    iconBeforeInput: _propTypes2.default.element,
    iconAfterInput: _propTypes2.default.element,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number
  },
  contextTypes: {
    ionGetSnapper: _propTypes2.default.func
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.defaultValue > this.props.max ? this.props.max : this.props.defaultValue
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      defaultValue: 0,
      handleChange: function handleChange() {},
      iconBeforeInput: null,
      iconAfterInput: null,
      min: 0,
      max: 100
    };
  },
  handleChange: function handleChange(event) {
    if (this.props.handleChange) this.props.handleChange(event.target.value);

    this.setState({
      value: event.target.value
    });
  },
  disableSnap: function disableSnap() {
    this.context.ionGetSnapper().disable();
  },
  enableSnap: function enableSnap() {
    this.context.ionGetSnapper().enable();
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'item': true }, { 'range': true }, this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: classes },
      this.props.iconBeforeInput,
      _react2.default.createElement('input', { type: 'range', min: this.props.min, max: this.props.max,
        value: this.state.value,
        onChange: this.handleChange,
        onMouseEnter: this.disableSnap,
        onMouseLeave: this.enableSnap,
        onTouchStart: this.disableSnap,
        onTouchEnd: this.enableSnap }),
      this.props.iconAfterInput,
      this.props.children
    );
  }
});

exports.default = IonRange;