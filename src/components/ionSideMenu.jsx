import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonSideMenu = createReactClass({
    propTypes: {
      side: PropTypes.string,
      customClasses: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      side: 'left',
      customClasses: ''
    };
  },
  render() {
    var classes = classnames(
      'snap-drawer',
      'menu-' + this.props.side,
      'snap-drawer-' + this.props.side,
      this.props.customClasses
    );
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
});

export default IonSideMenu;
