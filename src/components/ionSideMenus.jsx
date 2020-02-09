import React from 'react';
import createReactClass from 'create-react-class';

var IonSideMenus = createReactClass({
  render() {
    return (
      <div className="view snap-drawers">
        {this.props.children}
      </div>
    );
  }
});

export default IonSideMenus;
