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

var IonItemCheckBox = (0, _createReactClass2.default)({
  displayName: 'IonItemCheckBox',

  propTypes: {
    'checked': _propTypes2.default.bool,
    'handleChange': _propTypes2.default.func,
    'color': _propTypes2.default.string,
    'label': _propTypes2.default.string,
    'customClasses': _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      'checked': false,
      'handleChange': function handleChange() {},
      'color': 'stable',
      'label': '',
      'customClasses': ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      checked: this.props.checked
    };
  },
  handleChange: function handleChange(event) {
    var toggle = this.state.checked ? false : true;
    if (this.props.handleChange) this.props.handleChange(toggle);
    this.setState({
      checked: toggle
    });
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'checkbox': true }, 'checkbox-' + this.props.color, this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: 'item item-checkbox' },
      _react2.default.createElement(
        'label',
        { className: classes },
        _react2.default.createElement('input', { type: 'checkbox', checked: this.state.checked, onChange: this.handleChange })
      ),
      this.props.label
    );
  }
});

exports.default = IonItemCheckBox;