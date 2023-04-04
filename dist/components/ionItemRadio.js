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

var IonItemRadio = (0, _createReactClass2.default)({
  displayName: 'IonItemRadio',

  propTypes: {
    'checked': _propTypes2.default.bool,
    'name': _propTypes2.default.string,
    'value': _propTypes2.default.string,
    'handleChange': _propTypes2.default.func,
    'icon': _propTypes2.default.string,
    'label': _propTypes2.default.string,
    'customClasses': _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      'checked': false,
      'name': 'radio-group',
      'value': '',
      'handleChange': function handleChange() {},
      'icon': 'checkmark',
      'label': '',
      'customClasses': ''
    };
  },
  handleChange: function handleChange(e, value) {
    // to make this work on iOS devices, the input.onChange event
    // was replaced by an onClick event on the label element.
    e.preventDefault();
    if (this.props.handleChange) this.props.handleChange(this.props.name, value);
  },
  render: function render() {
    var _this = this;

    var classes = (0, _classnames2.default)({ 'item-content': true }, this.props.customClasses);
    var iconClasses = 'radio-icon ion-' + this.props.icon;
    return _react2.default.createElement(
      'label',
      { className: 'item item-radio',
        onClick: function onClick(e) {
          _this.handleChange(e, _this.props.value);
        } },
      _react2.default.createElement('input', { type: 'radio',
        onChange: function onChange() {},
        name: this.props.name,
        checked: this.props.checked }),
      _react2.default.createElement(
        'div',
        { className: 'radio-content' },
        _react2.default.createElement(
          'div',
          { className: classes },
          this.props.label
        ),
        _react2.default.createElement('i', { className: iconClasses })
      )
    );
  }
});

exports.default = IonItemRadio;