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

var IonContent = (0, _createReactClass2.default)({
  displayName: 'IonContent',

  propTypes: {
    customClasses: _propTypes2.default.string,
    scroll: _propTypes2.default.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      scroll: true
    };
  },
  contextTypes: {
    ionHasHeader: _propTypes2.default.bool,
    ionHasSubheader: _propTypes2.default.bool,
    ionHasTabs: _propTypes2.default.bool,
    ionHasTabsTop: _propTypes2.default.bool,
    ionHasFooter: _propTypes2.default.bool,
    ionHasSubfooter: _propTypes2.default.bool,
    ionKeyboardHeight: _propTypes2.default.number
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'content': true }, this.props.customClasses, {
      'overflow-scroll': this.props.scroll !== false,
      'has-header': this.context.ionHasHeader,
      'has-subheader': this.context.ionHasSubheader,
      'has-tabs': this.context.ionHasTabs,
      'has-tabs-top': this.context.ionHasTabsTop,
      'has-footer': this.context.ionHasFooter,
      'has-subfooter': this.context.ionHasSubfooter
    });
    var divStyle = {};
    if (this.context.ionKeyboardHeight > 0) {
      divStyle = { bottom: this.context.ionKeyboardHeight };
    }

    var outerClasses = (0, _classnames2.default)('scroll-content ionic-scroll', { 'ios-top-margin': !this.context.ionHasHeader });

    return _react2.default.createElement(
      'div',
      { className: outerClasses, style: divStyle },
      _react2.default.createElement(
        'div',
        { className: classes },
        this.props.children
      )
    );
  }
});

exports.default = IonContent;