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

var _ionModal = require('./ionModal');

var _ionActionSheet = require('./ionActionSheet');

var _ionActionSheet2 = _interopRequireDefault(_ionActionSheet);

var _ionPopover = require('./ionPopover');

var _ionPopover2 = _interopRequireDefault(_ionPopover);

var _ionPopup = require('./ionPopup');

var _ionPopup2 = _interopRequireDefault(_ionPopup);

var _ionBackdrop = require('./ionBackdrop');

var _ionBackdrop2 = _interopRequireDefault(_ionBackdrop);

var _ionLoading = require('./ionLoading');

var _ionLoading2 = _interopRequireDefault(_ionLoading);

var _keyboard = require('../helpers/keyboard');

var _keyboard2 = _interopRequireDefault(_keyboard);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IonBody = (0, _createReactClass2.default)({
  displayName: 'IonBody',

  propTypes: {
    platform: _propTypes2.default.object,
    location: _propTypes2.default.object.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      platform: {
        isIOS: false,
        isAndroid: false,
        isCordova: false,
        transitionTimeOut: 450,
        name: 'Web'
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      ionNavDirection: 'forward', // can be either forward or back, only used for IonNav* components
      ionModal: false, // can be either false or contain the modal node
      ionPopover: false, // can be either false or contain the popover
      ionActionSheet: {},
      ionPopup: {},
      ionBackdrop: false,
      ionLoading: false,
      ionKeyboardHeight: 0,
      ionHasTabs: false,
      ionHasTabsTop: false,
      ionHasHeader: false,
      ionHasSubheader: false,
      ionHasFooter: false,
      ionHasSubfooter: false,
      ionSnapper: null,
      ionKeyboard: {}
    };
  },
  childContextTypes: {
    location: _propTypes2.default.object,
    ionPlatform: _propTypes2.default.object,
    ionKeyboard: _propTypes2.default.object,
    ionSetTransitionDirection: _propTypes2.default.func,
    ionNavDirection: _propTypes2.default.string,
    ionModal: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    ionShowModal: _propTypes2.default.func,
    ionUpdateActionSheet: _propTypes2.default.func,
    ionUpdatePopup: _propTypes2.default.func,
    ionShowBackdrop: _propTypes2.default.func,
    ionShowLoading: _propTypes2.default.func,
    ionKeyboardHeight: _propTypes2.default.number,
    ionUpdateHasX: _propTypes2.default.func,
    ionHasTabs: _propTypes2.default.bool,
    ionHasTabsTop: _propTypes2.default.bool,
    ionHasHeader: _propTypes2.default.bool,
    ionHasSubheader: _propTypes2.default.bool,
    ionHasFooter: _propTypes2.default.bool,
    ionHasSubfooter: _propTypes2.default.bool,
    ionSnapper: _propTypes2.default.object,
    ionGetSnapper: _propTypes2.default.func,
    ionSetSnapper: _propTypes2.default.func,
    ionPopover: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    ionShowPopover: _propTypes2.default.func,
    ionActionSheet: _propTypes2.default.object,
    ionPopup: _propTypes2.default.object
  },
  getChildContext: function getChildContext() {
    return {
      location: this.props.location,
      ionPlatform: this.props.platform,
      ionKeyboard: this.state.ionKeyboard,
      ionSetTransitionDirection: this.ionSetTransitionDirection,
      ionNavDirection: this.state.ionNavDirection,
      ionModal: this.state.ionModal,
      ionShowModal: this.ionShowModal,
      ionUpdateActionSheet: this.ionUpdateActionSheet,
      ionUpdatePopup: this.ionUpdatePopup,
      ionShowBackdrop: this.ionShowBackdrop,
      ionShowLoading: this.ionShowLoading,
      ionKeyboardHeight: this.state.ionKeyboardHeight,
      ionUpdateHasX: this.ionUpdateHasX,
      ionHasTabs: this.state.ionHasTabs,
      ionHasTabsTop: this.state.ionHasTabsTop,
      ionHasHeader: this.state.ionHasHeader,
      ionHasSubheader: this.state.ionHasSubheader,
      ionHasFooter: this.state.ionHasFooter,
      ionHasSubfooter: this.state.ionHasSubfooter,
      ionSnapper: this.state.ionSnapper,
      ionGetSnapper: this.ionGetSnapper,
      ionSetSnapper: this.ionSetSnapper,
      ionPopover: this.state.ionPopover,
      ionShowPopover: this.ionShowPopover,
      ionActionSheet: this.state.ionActionSheet,
      ionPopup: this.state.ionPopup
    };
  },
  ionGetSnapper: function ionGetSnapper() {
    return this.state.ionSnapper;
  },
  ionSetSnapper: function ionSetSnapper(snapper) {
    this.setState({ ionSnapper: snapper });
  },

  ionSetTransitionDirection: function ionSetTransitionDirection(direction) {
    // Used for setting the transition direction of the page change animations
    // Only used for IonNav* components, but the state needs to be kept here because the IonNavBar is
    // only encapsulated by IonBody
    if (this.state.ionNavDirection != direction) {
      this.setState({ ionNavDirection: direction });
    }
  },
  ionShowModal: function ionShowModal(modal) {
    this.setState({ ionModal: modal });
  },
  ionShowPopover: function ionShowPopover(popover) {
    this.setState({ ionPopover: popover });
  },
  ionUpdateActionSheet: function ionUpdateActionSheet(actionSheet) {
    this.setState({ ionActionSheet: actionSheet });
  },
  ionUpdatePopup: function ionUpdatePopup(popup) {
    this.setState({ ionPopup: popup });
  },
  ionShowBackdrop: function ionShowBackdrop(show) {
    this.setState({ ionBackdrop: show });
  },
  ionShowLoading: function ionShowLoading(show) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (show) {
      this.setState({
        ionLoading: options
      });
    } else {
      if (this.state.ionLoading !== false) {
        this.setState({
          ionLoading: false
        });
      }
    }
  },

  ionUpdateHasX: function ionUpdateHasX(hasX, value) {
    if (hasX in this.state) {
      this.setState(_defineProperty({}, hasX, value));
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    // close modal etc. when navigating away from page (e.g. with browser back button)
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (this.state.ionModal) {
        this.ionShowModal(false);
      }
      if (this.state.ionPopover) {
        this.ionShowPopover(false);
      }
      if (this.state.ionBackdrop) {
        this.ionShowBackdrop(false);
      }
      if (this.state.ionLoading) {
        this.ionShowLoading(false);
      }
      if (!_lodash2.default.isEmpty(this.state.ionActionSheet)) {
        this.ionUpdateActionSheet({});
      }
      if (!_lodash2.default.isEmpty(this.state.ionPopup)) {
        this.ionUpdatePopup({});
      }
      // reset sub headers/footers
      this.ionUpdateHasX('ionHasSubheader', false);
      this.ionUpdateHasX('ionHasFooter', false);
      this.ionUpdateHasX('ionHasSubfooter', false);
    }
  },

  handleKeyboard: function handleKeyboard(e) {
    var kbHeight = e && e.keyboardHeight;
    this.setState({ ionKeyboardHeight: kbHeight }, function () {
      var currentModal = this.state.ionModal;
      if (currentModal) {
        // re-render modal to include new state
        this.ionShowModal(currentModal);
      }
    });
  },
  componentDidMount: function componentDidMount() {
    window.addEventListener('native.keyboardshow', this.handleKeyboard);
    window.addEventListener('native.keyboardhide', this.handleKeyboard);
    if (this.props.platform.isCordova && !_lodash2.default.isEmpty(this.state.ionKeyboard)) {
      var keyboard = (0, _keyboard2.default)(this.props.platform);
      keyboard.disableScroll();
      this.setState({ ionKeyboard: keyboard });
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('native.keyboardshow', this.handleKeyboard);
    window.removeEventListener('native.keyboardhide', this.handleKeyboard);
  },
  render: function render() {
    var platform = this.props.platform;
    var classes = (0, _classnames2.default)({
      'ionic-body': true,
      'grade-a': true, // needs improvement https://github.com/delta98/ionic-platform-body-classes
      'platform-cordova': platform.isCordova,
      'platform-ios': platform.isIOS,
      'platform-android': platform.isAndroid,
      'modal-open': this.state.ionModal,
      'action-sheet-open': !_lodash2.default.isEmpty(this.state.ionActionSheet),
      'popup-open': !_lodash2.default.isEmpty(this.state.ionPopup),
      'keyboard-open': this.state.ionKeyboardHeight
    });
    return _react2.default.createElement(
      'div',
      { className: classes },
      this.props.children,
      _react2.default.createElement(
        _ionModal.IonModalContainer,
        null,
        this.state.ionModal
      ),
      _react2.default.createElement(_ionBackdrop2.default, { show: this.state.ionBackdrop }),
      _react2.default.createElement(_ionLoading2.default, {
        show: this.state.ionLoading,
        ionShowLoading: this.ionShowLoading,
        ionShowBackdrop: this.ionShowBackdrop }),
      _react2.default.createElement(_ionActionSheet2.default, {
        ionActionSheet: this.state.ionActionSheet,
        ionUpdateActionSheet: this.ionUpdateActionSheet }),
      _react2.default.createElement(_ionPopup2.default, {
        ionPopup: this.state.ionPopup,
        ionUpdatePopup: this.ionUpdatePopup }),
      _react2.default.createElement(
        _ionPopover2.default,
        { ionShowPopover: this.ionShowPopover },
        this.state.ionPopover
      )
    );
  }
});

exports.default = IonBody;