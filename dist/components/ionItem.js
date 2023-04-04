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

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonItem = (0, _createReactClass2.default)({
  displayName: 'IonItem',

  propTypes: {
    'link': _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    href: _propTypes2.default.string,
    target: _propTypes2.default.string,
    'wrap': _propTypes2.default.bool,
    'divider': _propTypes2.default.bool,
    'iconLeft': _propTypes2.default.bool,
    'iconRight': _propTypes2.default.bool,
    'avatar': _propTypes2.default.bool,
    'image': _propTypes2.default.bool,
    'body': _propTypes2.default.bool,
    'input': _propTypes2.default.bool,
    'buttonRight': _propTypes2.default.bool,
    'buttonLeft': _propTypes2.default.bool,
    'thumbnailLeft': _propTypes2.default.bool,
    'thumbnailRight': _propTypes2.default.bool,
    'checkboxLeft': _propTypes2.default.bool,
    'checkboxRight': _propTypes2.default.bool,
    'customClasses': _propTypes2.default.string,
    'onClick': _propTypes2.default.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      'link': null,
      href: null,
      target: null,
      'wrap': false,
      'divider': false,
      'iconLeft': false,
      'iconRight': false,
      'avatar': false,
      'image': false,
      'body': false,
      'input': false,
      'buttonRight': false,
      'buttonLeft': false,
      'thumbnailLeft': false,
      'thumbnailRight': false,
      'checkboxLeft': false,
      'checkboxRight': false,
      'customClasses': '',
      'onClick': null
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'item': true,
      'item-text-wrap': this.props.wrap,
      'item-divider': this.props.divider,
      'item-icon-left': this.props.iconLeft,
      'item-icon-right': this.props.iconRight,
      'item-avatar': this.props.avatar,
      'item-image': this.props.image,
      'item-body': this.props.body,
      'item-input': this.props.input,
      'item-button-right': this.props.buttonRight,
      'item-button-left': this.props.buttonLeft,
      'item-thumbnail-left': this.props.thumbnailLeft,
      'item-thumbnail-right': this.props.thumbnailRight,
      'item-checkbox': this.props.checkboxLeft || this.props.checkboxRight,
      'item-checkbox-right': this.props.checkboxRight
    }, this.props.customClasses);
    var item;
    if (this.props.link) {
      item = _react2.default.createElement(
        _reactRouter.Link,
        { className: classes, to: this.props.link, onClick: this.props.onClick },
        this.props.children
      );
    } else if (this.props.href) {
      item = _react2.default.createElement(
        'a',
        { className: classes, href: this.props.href, target: this.props.target, onClick: this.props.onClick },
        this.props.children
      );
    } else {
      item = _react2.default.createElement(
        'div',
        { className: classes, onClick: this.props.onClick },
        this.props.children
      );
    }
    return item;
  }
});

exports.default = IonItem;