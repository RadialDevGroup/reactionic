import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IonTitle from './ionTitle';
import { LeftButtonContainer } from '../helpers/containers';

var IonHeaderBar = createReactClass({
  propTypes: {
    customClasses: PropTypes.string,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    leftButton: PropTypes.element,
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
    ionUpdateHasX: PropTypes.func,
    ionPlatform: PropTypes.object
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
    if (leftButton && platform.isAndroid) {
      // Add a reference to leftButton so we can find it when componentDidMount
      leftButton = React.cloneElement(leftButton, { ref: 'leftButton' });
    }

    var classes = classnames(
      {'bar': true, 'bar-header': true},
      this.props.customClasses || 'bar-stable' // default class
    );
    return (
      <div className={ classes } >
        <LeftButtonContainer setMarginCompensation={this.setMarginCompensation}>{leftButton}</LeftButtonContainer>
        <IonTitle marginCompensation={this.state.marginCompensation}>
          { this.props.title }
        </IonTitle>
        {this.props.rightButton}
      </div>
    );
  }
});

export default IonHeaderBar;
