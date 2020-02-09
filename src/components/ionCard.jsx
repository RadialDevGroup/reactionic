import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonCard = createReactClass({
  propTypes: {
    customClasses: PropTypes.string,
    list: PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
      list: false
    };
  },
  render() {
    // extract props used here, pass on the rest
    var { list, customClasses, ...other } = this.props;
    var classes = classnames(
      {'card': true,
       'list' : list},
      customClasses
    );
    return (
        <div className={classes} {...other}>
        {this.props.children}
      </div>
    );
  }
});

export default IonCard;

