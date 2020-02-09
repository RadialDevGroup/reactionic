import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonView = createReactClass({
  propTypes: {
    customClasses: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      customClasses: ''
    };
  },
  contextTypes: {
    ionSetTransitionDirection: PropTypes.func
  },
  componentWillUnmount: function() {
    if (this.context.ionSetTransitionDirection) {
      this.context.ionSetTransitionDirection('forward');
    }
  },
  render() {
    var classes = classnames(
      {'view': true,
       'nav-view-stage': true},
      this.props.customClasses
    );
    return (
      <div className={ classes } >
        { this.props.children }
      </div>
    );
  }
});

export default IonView;
