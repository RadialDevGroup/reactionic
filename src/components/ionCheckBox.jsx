import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonCheckBox = createReactClass({
  propTypes: {
    'checked': PropTypes.bool,
    'handleChange': PropTypes.func,
    'color': PropTypes.string,
    'customClasses': PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      'checked': false,
      'handleChange': () => {},
      'color': 'stable',
      'customClasses': '',
    };
  },
  getInitialState: function () {
    return {
      checked: this.props.checked
    };
  },
  handleChange: function (event) {
    var toggle = this.state.checked ? false : true;
    if (this.props.handleChange)
      this.props.handleChange(toggle);
    this.setState({
      checked: toggle
    });
  },
  render() {
    var classes = classnames(
      {'checkbox': true},
      'checkbox-' + this.props.color,
      this.props.customClasses
    );
    return (
      <div className={classes}>
    	  <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
      </div>
    );
  }
});

export default IonCheckBox;
