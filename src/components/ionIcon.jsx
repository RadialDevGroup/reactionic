import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonIcon = React.createClass({
  propTypes: {
    customClasses: PropTypes.string,
    icon: PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      customClasses: ''
    };
  },
  render() {
    var classes = classnames(
      {'icon': true},
      'ion-' + this.props.icon,
      this.props.customClasses
    );
    return (
      <i className={classes}></i>
    );
  }
});

export default IonIcon;

