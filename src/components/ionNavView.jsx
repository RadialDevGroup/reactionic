import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RouteCSSTransitionGroup from '../helpers/animate';

var IonNavView = createReactClass({
  propTypes: {
    customClasses: PropTypes.string
  },
  getDefaultProps: function() {
    // no need to set default platform and ionSetTransitionDirection as it is propogated from IonBody
    return {
      customClasses: ''
    };
  },
  contextTypes: {
    ionPlatform: PropTypes.object,
    ionNavDirection: PropTypes.string,
    ionSetTransitionDirection: PropTypes.func
  },
  render() {
    var platform = this.context.ionPlatform;
    var classes = classnames(
      {'nav-view-transition-android': platform.isAndroid,
       'nav-view-transition-ios': !platform.isAndroid
      },
      'nav-view-direction-' + this.context.ionNavDirection,
      this.props.customClasses
    );
    return (
      <RouteCSSTransitionGroup
      component="div"
      transitionEnterTimeout={platform.transitionTimeOut}
      transitionLeaveTimeout={platform.transitionTimeOut}
      transitionName= { {
                       enter: 'nav-view-entering',
                       enterActive: 'nav-view-active',
                       leave: 'nav-view-leaving',
                       leaveActive: 'nav-view-active'
                       } }
      className={classes}
      >
        { this.props.children }
      </RouteCSSTransitionGroup>
    );
  }
});

export default IonNavView;
