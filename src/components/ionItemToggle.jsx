import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonItemToggle = createReactClass({
  propTypes: {
    'checked': PropTypes.bool,
    'handleChange': PropTypes.func,
    'color': PropTypes.string,
    'label': PropTypes.node,
    'customClasses': PropTypes.string
  },
  getDefaultProps: function() {
    return {
      'checked': false,
      'handleChange': () => {},
      'color': 'stable',
      'label': '',
      'customClasses': ''
    };
  },
  getInitialState: function () {
    return {
      checked: this.props.checked
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({checked: nextProps.checked});
    }
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
      {'toggle': true},
      'toggle-' + this.props.color,
      this.props.customClasses
    );
    return (
      <div className="item item-toggle">
        {this.props.label}
      	<label className={classes}>
      	  <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
          <div className="track">
      	    <div className="handle"/>
      	  </div>
      	</label>
      </div>
    );
  }
});

export default IonItemToggle;

