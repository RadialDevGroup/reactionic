import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonFooterBar = createReactClass({
  propTypes: {
    customClasses: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
      ionHasTabs: false
    };
  },
  contextTypes: {
    ionUpdateHasX: PropTypes.func.isRequired,
    ionHasTabs: PropTypes.bool
  },
  componentWillMount: function() {
    this.context.ionUpdateHasX('ionHasFooter', true);
  },
  render() {
    var classes = classnames(
      {'bar': true, 'bar-footer': true},
      this.props.customClasses || 'bar-stable', // default class
      {'has-tabs': this.context.ionHasTabs}
    );
    return (
      <div className={ classes } >
        { this.props.children }
      </div>
    );
  }
});

export default IonFooterBar;
