import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonSubFooterBar = createReactClass({
  propTypes: {
    customClasses: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      customClasses: ''
    };
  },
  contextTypes: {
    ionUpdateHasX: PropTypes.func
  },
  componentWillMount: function() {
    this.context.ionUpdateHasX('ionHasSubfooter', true);
  },
  render() {
    var classes = classnames(
      {'bar': true, 'bar-subfooter': true},
      this.props.customClasses || 'bar-stable' // default class
    );
    return (
      <div className={ classes } >
        { this.props.children }
      </div>
    );
  }
});

export default IonSubFooterBar;
