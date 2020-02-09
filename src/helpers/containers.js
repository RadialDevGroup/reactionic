import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import SetTimeoutMixin from './timeout.js';

var LeftButtonContainer = createReactClass({
  propTypes: {
    setMarginCompensation: PropTypes.func.isRequired
  },
  mixins: [SetTimeoutMixin],
  componentDidMount: function() {
    var node = ReactDOM.findDOMNode(this);
    var self = this;
    this.setTimeout(function(){
      var width;
      if (node) {
        width = node.getBoundingClientRect().width;
      } else {
        width = 0;
      }
      self.props.setMarginCompensation(width);
    }, 10);
  },
  render() {
    return this.props.children;
  }
});

export {LeftButtonContainer};
