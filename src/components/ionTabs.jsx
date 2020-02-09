import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonTabs = createReactClass({
  propTypes: {
    customClasses: PropTypes.string,
    tabsTop: PropTypes.bool
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
    if (this.props.tabsTop) {
      this.context.ionUpdateHasX('ionHasTabsTop', true);
    } else {
      this.context.ionUpdateHasX('ionHasTabs', true);
    }
  },
  componentWillUnmount: function() {
    if (this.props.tabsTop) {
      this.context.ionUpdateHasX('ionHasTabsTop', false);
    } else {
      this.context.ionUpdateHasX('ionHasTabs', false);
    }
  },
  render() {
    var classes = classnames(
      {'tabs-top' : this.props.tabsTop},
      this.props.customClasses
    );
    return (
      <div className={ classes } >
        <div className="tabs">
          { this.props.children }
        </div>
      </div>
    );
  }
});

export default IonTabs;
