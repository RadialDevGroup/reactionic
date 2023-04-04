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

var IonSelect = (0, _createReactClass2.default)({
  displayName: 'IonSelect',

  propTypes: {
    customClasses: _propTypes2.default.string,
    label: _propTypes2.default.string,
    handleChange: _propTypes2.default.func,
    options: _propTypes2.default.array,
    defaultValue: _propTypes2.default.string
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.defaultValue
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      label: '',
      options: [],
      handleChange: function handleChange() {},
      value: ''
    };
  },
  handleChange: function handleChange(event) {
    if (this.props.handleChange) this.props.handleChange(event.target.value);
    this.setState({
      value: event.target.value
    });
  },

  //Render our props `options`
  renderOptions: function renderOptions() {
    var list = this.props.options.map(function (option, index) {
      return _react2.default.createElement(
        'option',
        { key: index, value: option },
        option
      );
    });
    return list;
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'item': true }, { 'item-input': true }, { 'item-select': true }, this.props.customClasses);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { className: classes },
        _react2.default.createElement(
          'div',
          { className: 'input-label' },
          this.props.label
        ),
        _react2.default.createElement(
          'select',
          { value: this.state.value, onChange: this.handleChange },
          this.renderOptions()
        )
      ),
      this.props.children
    );
  }
});

exports.default = IonSelect;