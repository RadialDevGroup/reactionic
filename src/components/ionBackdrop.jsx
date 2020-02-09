import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

var IonBackdrop = createReactClass({
  propTypes: {
    customClasses: PropTypes.string,
    show: PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
      show: false
    };
  },
  render() {
    var backdrop;
    if (this.props.show) {
      backdrop = <div className="backdrop visible active"></div>;
    } else {
      backdrop = false;
    }
    var classes = classnames(
      {'backdrop': true},
      this.props.customClasses
    );
    return (
      <ReactCSSTransitionGroup
      transitionEnterTimeout={100}
      transitionLeave={false}
      transitionName={ {
                      enter: 'backdrop-invisible',
                      enterActive: 'backdrop-visible'
                      } }
      >
          {backdrop}
      </ReactCSSTransitionGroup>
    );
  }
});

export default IonBackdrop;
