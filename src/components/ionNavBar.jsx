import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IonTitle from './ionTitle';
import RouteCSSTransitionGroup from '../helpers/animate';
import { LeftButtonContainer } from '../helpers/containers';

var IonNavBar = React.createClass({
  propTypes: {
    customClasses: PropTypes.string,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    leftButton: PropTypes.element,
    leftButtonColor: PropTypes.string,
    rightButton: PropTypes.element
  },
  getDefaultProps: function() {
    // no need to set default platform; is propogated from IonBody
    return {
      customClasses: '',
      title: '',
      leftButton: null,
      rightButton: null
    };
  },
  getInitialState() {
    return {
      marginCompensation: 0
    };
  },
  contextTypes: {
    ionPlatform: PropTypes.object,
    ionUpdateHasX: PropTypes.func,
    ionSetTransitionDirection: PropTypes.func,
    ionNavDirection: PropTypes.string
  },
  setMarginCompensation: function(width) {
    if (this.context.ionPlatform.isAndroid) {
      this.setState({'marginCompensation': Math.ceil(width) + 10 });
    }
  },
  componentWillMount: function() {
    this.context.ionUpdateHasX('ionHasHeader', true);
  },
  componentWillUnmount: function() {
    this.context.ionUpdateHasX('ionHasHeader', false);
  },
  render() {
    var platform = this.context.ionPlatform;
    var leftButton = this.props.leftButton;
    var classes = classnames(
      {'bar': true, 'bar-header': true},
      this.props.customClasses || 'bar-stable', // default class
      'nav-bar-block',
      {'nav-bar-transition-android': platform.isAndroid,
       'nav-bar-transition-ios': !platform.isAndroid
      },
      'nav-bar-direction-' + this.context.ionNavDirection
    );
    return (
      <div className={classes}>

        <RouteCSSTransitionGroup
            transitionEnterTimeout={platform.transitionTimeOut}
            transitionName= { {
                             enter: 'button-entering',
                             enterActive: 'button-active',
                             leave: 'button-leaving',
                             leaveActive: 'button-active'
                             } }
            transitionLeave={false}
        >

        <LeftButtonContainer setMarginCompensation={this.setMarginCompensation}>{leftButton}</LeftButtonContainer>

        </RouteCSSTransitionGroup>

        <RouteCSSTransitionGroup
            transitionEnterTimeout={platform.transitionTimeOut}
            transitionLeaveTimeout={platform.transitionTimeOut}
            transitionName= { {
                             enter: 'title-entering',
                             enterActive: 'title-active',
                             leave: 'title-leaving',
                             leaveActive: 'title-active'
                             } }
        >
          <IonTitle marginCompensation={this.state.marginCompensation} customClasses="title-stage">
            { this.props.title }
        </IonTitle>
        </RouteCSSTransitionGroup>

        <RouteCSSTransitionGroup
            transitionEnterTimeout={platform.transitionTimeOut}
            component="div"
            transitionName= { {
                             enter: 'button-entering',
                             enterActive: 'button-active',
                             leave: 'button-leaving',
                             leaveActive: 'button-active'
                             } }
            transitionLeave={false}
            className="buttons pull-right"
        >
          {this.props.rightButton}

        </RouteCSSTransitionGroup>
      </div>
    );
  }
});

export default IonNavBar;
