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

var _animate = require('../helpers/animate');

var _animate2 = _interopRequireDefault(_animate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonNavView = (0, _createReactClass2.default)({
  displayName: 'IonNavView',

  propTypes: {
    customClasses: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    // no need to set default platform and ionSetTransitionDirection as it is propogated from IonBody
    return {
      customClasses: ''
    };
  },
  contextTypes: {
    ionPlatform: _propTypes2.default.object,
    ionNavDirection: _propTypes2.default.string,
    ionSetTransitionDirection: _propTypes2.default.func
  },
  render: function render() {
    var platform = this.context.ionPlatform;
    var classes = (0, _classnames2.default)({ 'nav-view-transition-android': platform.isAndroid,
      'nav-view-transition-ios': !platform.isAndroid
    }, 'nav-view-direction-' + this.context.ionNavDirection, this.props.customClasses);
    return _react2.default.createElement(
      _animate2.default,
      {
        component: 'div',
        transitionEnterTimeout: platform.transitionTimeOut,
        transitionLeaveTimeout: platform.transitionTimeOut,
        transitionName: {
          enter: 'nav-view-entering',
          enterActive: 'nav-view-active',
          leave: 'nav-view-leaving',
          leaveActive: 'nav-view-active'
        },
        className: classes
      },
      this.props.children
    );
  }
});

exports.default = IonNavView;