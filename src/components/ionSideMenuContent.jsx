import React from 'react';
import createReactClass from 'create-react-class';

var IonSideMenuContent = createReactClass({
  render() {
    return (
      <div className="menu-content snap-content pane" id="IonSideMenuContent">
        {this.props.children}
      </div>
    );
  }
});

export default IonSideMenuContent;
