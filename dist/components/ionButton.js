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

var IonButton = (0, _createReactClass2.default)({
  displayName: 'IonButton',

  propTypes: {
    link: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    href: _propTypes2.default.string,
    target: _propTypes2.default.string,
    customClasses: _propTypes2.default.string,
    expand: _propTypes2.default.oneOf(['full', 'block']),
    size: _propTypes2.default.oneOf(['small', 'large']),
    type: _propTypes2.default.oneOf(['outline', 'clear', 'icon-clear']),
    icon: _propTypes2.default.string,
    iconPosition: _propTypes2.default.oneOf(['left', 'right']),
    color: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    backButton: _propTypes2.default.bool,
    htmlType: _propTypes2.default.oneOf(['submit', 'button', 'reset']) // the value to put in <button type="???">
  },
  getDefaultProps: function getDefaultProps() {
    return {
      link: null,
      href: null,
      target: null,
      customClasses: '',
      expand: null,
      size: null,
      type: null,
      icon: null,
      iconPosition: null,
      color: '',
      onClick: null,
      backButton: false,
      htmlType: null // by default HTML will use 'submit' as the default when nothing is set.
    };
  },
  contextTypes: {
    ionSetTransitionDirection: _propTypes2.default.func,
    router: _propTypes2.default.object
  },
  onClick: function onClick(e) {
    if (this.props.backButton) {
      // set the transitionDirection for backward animation
      this.context.ionSetTransitionDirection('back');

      // execute possible other onclick function
      if (this.props.onClick) {
        this.props.onClick(e);
      }

      // if history is set, go to previous location
      if (!this.props.link && this.context.router) {
        this.context.router.goBack();
      }
      // return false to prevent defaults
      return false;
    } else if (this.props.onClick) {
      this.props.onClick(e);
    }
  },
  render: function render() {
    var colorClass = this.props.color ? 'button-' + this.props.color : null;
    var classes = (0, _classnames2.default)({ 'button': true,
      'button-block': this.props.expand === 'block',
      'button-full': this.props.expand === 'full',
      'button-small': this.props.size === 'small',
      'button-large': this.props.size === 'large',
      'button-outline': this.props.type === 'outline',
      'button-clear': this.props.type === 'clear',
      'icon-left': this.props.iconPosition === 'left',
      'icon-right': this.props.iconPosition === 'right',
      'icon': !this.props.iconPosition && this.props.icon,
      'button-icon': !this.props.children && this.props.icon && this.props.type === 'icon-clear'
    }, this.props.icon, colorClass, this.props.customClasses);
    var button;
    if (this.props.link) {
      button = _react2.default.createElement(
        _reactRouter.Link,
        { className: classes, to: this.props.link, onClick: this.onClick },
        this.props.children
      );
    } else if (this.props.href) {
      button = _react2.default.createElement(
        'a',
        { className: classes, href: this.props.href, target: this.props.target, onClick: this.onClick },
        this.props.children
      );
    } else {
      button = _react2.default.createElement(
        'button',
        { type: this.props.htmlType, className: classes, onClick: this.onClick },
        this.props.children
      );
    }
    return button;
  }
});

exports.default = IonButton;