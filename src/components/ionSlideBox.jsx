import React from 'react';
import createReactClass from 'create-react-class';

import ReactSlick from 'react-slick';

var IonSlideBox = createReactClass({
  render() {
    var settings = {
      className: 'ion-slide-box',
      infinite: false,
      autoplay: false,
      arrows: false,
      dots: true,
      dotsClass: 'slick-dots slider-pager',
      initialSlide: 0
    };
    return (
        <ReactSlick {...settings}>
          { this.props.children }
        </ReactSlick>
    );
  }
});

export default IonSlideBox;
