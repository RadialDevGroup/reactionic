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

var _ionTitle = require('./ionTitle');

var _ionTitle2 = _interopRequireDefault(_ionTitle);

var _animate = require('../helpers/animate');

var _animate2 = _interopRequireDefault(_animate);

var _containers = require('../helpers/containers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonNavBar = (0, _createReactClass2.default)({
  displayName: 'IonNavBar',

  propTypes: {
    customClasses: _propTypes2.default.string,
    title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    leftButton: _propTypes2.default.element,
    leftButtonColor: _propTypes2.default.string,
    rightButton: _propTypes2.default.element
  },
  getDefaultProps: function getDefaultProps() {
    // no need to set default platform; is propogated from IonBody
    return {
      customClasses: '',
      title: '',
      leftButton: null,
      rightButton: null
    };
  },
  getInitialState: function getInitialState() {
    return {
      marginCompensation: 0
    };
  },

  contextTypes: {
    ionPlatform: _propTypes2.default.object,
    ionUpdateHasX: _propTypes2.default.func,
    ionSetTransitionDirection: _propTypes2.default.func,
    ionNavDirection: _propTypes2.default.string
  },
  setMarginCompensation: function setMarginCompensation(width) {
    if (this.context.ionPlatform.isAndroid) {
      this.setState({ 'marginCompensation': Math.ceil(width) + 10 });
    }
  },
  componentWillMount: function componentWillMount() {
    this.context.ionUpdateHasX('ionHasHeader', true);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.context.ionUpdateHasX('ionHasHeader', false);
  },
  render: function render() {
    var platform = this.context.ionPlatform;
    var leftButton = this.props.leftButton;
    var classes = (0, _classnames2.default)({ 'bar': true, 'bar-header': true }, this.props.customClasses || 'bar-stable', // default class
    'nav-bar-block', { 'nav-bar-transition-android': platform.isAndroid,
      'nav-bar-transition-ios': !platform.isAndroid
    }, 'nav-bar-direction-' + this.context.ionNavDirection);
    return _react2.default.createElement(
      'div',
      { className: classes },
      _react2.default.createElement(
        _animate2.default,
        {
          transitionEnterTimeout: platform.transitionTimeOut,
          transitionName: {
            enter: 'button-entering',
            enterActive: 'button-active',
            leave: 'button-leaving',
            leaveActive: 'button-active'
          },
          transitionLeave: false
        },
        _react2.default.createElement(
          _containers.LeftButtonContainer,
          { setMarginCompensation: this.setMarginCompensation },
          leftButton
        )
      ),
      _react2.default.createElement(
        _animate2.default,
        {
          transitionEnterTimeout: platform.transitionTimeOut,
          transitionLeaveTimeout: platform.transitionTimeOut,
          transitionName: {
            enter: 'title-entering',
            enterActive: 'title-active',
            leave: 'title-leaving',
            leaveActive: 'title-active'
          }
        },
        _react2.default.createElement(
          _ionTitle2.default,
          { marginCompensation: this.state.marginCompensation, customClasses: 'title-stage' },
          this.props.title
        )
      ),
      _react2.default.createElement(
        _animate2.default,
        {
          transitionEnterTimeout: platform.transitionTimeOut,
          component: 'div',
          transitionName: {
            enter: 'button-entering',
            enterActive: 'button-active',
            leave: 'button-leaving',
            leaveActive: 'button-active'
          },
          transitionLeave: false,
          className: 'buttons pull-right'
        },
        this.props.rightButton
      )
    );
  }
});

exports.default = IonNavBar;