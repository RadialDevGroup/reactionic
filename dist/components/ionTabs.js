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

var IonTabs = (0, _createReactClass2.default)({
  displayName: 'IonTabs',

  propTypes: {
    customClasses: _propTypes2.default.string,
    tabsTop: _propTypes2.default.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: ''
    };
  },
  contextTypes: {
    ionUpdateHasX: _propTypes2.default.func
  },
  componentWillMount: function componentWillMount() {
    if (this.props.tabsTop) {
      this.context.ionUpdateHasX('ionHasTabsTop', true);
    } else {
      this.context.ionUpdateHasX('ionHasTabs', true);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.props.tabsTop) {
      this.context.ionUpdateHasX('ionHasTabsTop', false);
    } else {
      this.context.ionUpdateHasX('ionHasTabs', false);
    }
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'tabs-top': this.props.tabsTop }, this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: classes },
      _react2.default.createElement(
        'div',
        { className: 'tabs' },
        this.props.children
      )
    );
  }
});

exports.default = IonTabs;