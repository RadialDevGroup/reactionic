import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonRange = createReactClass({
  propTypes: {
    customClasses: PropTypes.string,
    defaultValue: PropTypes.number,
    handleChange: PropTypes.func,
    iconBeforeInput:PropTypes.element,
    iconAfterInput: PropTypes.element,
    min: PropTypes.number,
    max: PropTypes.number
  },
  contextTypes: {
    ionGetSnapper: PropTypes.func
  },
  getInitialState(){
    return {
      value: this.props.defaultValue > this.props.max ? this.props.max : this.props.defaultValue
    };
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
      defaultValue: 0,
      handleChange: () => {},
      iconBeforeInput:null,
      iconAfterInput: null,
      min: 0,
      max: 100
    };
  },
  handleChange(event){
    if(this.props.handleChange)
      this.props.handleChange(event.target.value);

    this.setState({
      value: event.target.value
    });
  },
  disableSnap(){
    this.context.ionGetSnapper().disable();
  },
  enableSnap(){
    this.context.ionGetSnapper().enable();
  },
  render() {
    var classes = classnames(
      {'item':true},
      {'range':true},
      this.props.customClasses
    );
    return (
      <div className={classes}>
          {this.props.iconBeforeInput}
          <input type='range' min={this.props.min} max={this.props.max}
                 value={this.state.value}
                 onChange={this.handleChange}
                 onMouseEnter={this.disableSnap}
                 onMouseLeave={this.enableSnap}
                 onTouchStart={this.disableSnap}
                 onTouchEnd={this.enableSnap}/>
          {this.props.iconAfterInput}
          {this.props.children}
      </div>
    );
  }
});

export default IonRange;
