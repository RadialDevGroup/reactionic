import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonListButton = createReactClass({
  propTypes: {
    customClasses: PropTypes.string,
    action: PropTypes.string,
    side: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
      action: 'delete',
      side: 'left'
    };
  },
  render() {
    var classes = classnames(
      {'enable-pointer-events': true},
      'item-' + this.props.action,
      'item-' + this.props.side + '-edit',
      this.props.customClasses
    );
    return (
      <div className={classes} >
        {this.props.children}
      </div>
    );
  }
});

export default IonListButton;

