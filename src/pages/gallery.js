import React from 'react';

import DeliveryGirl from "../img/deliveryGirl.png";
import ellipse from "../img/ellipse9.png";

function Gallery() {
  return (
    <div className="customer">
        <img src={DeliveryGirl} width="150" height="300" alt="Rohit"/>
        <div className="leftArrow">
            <img src={ellipse} width="114" height="114" alt="leftArrow" /> 
        </div>
        <div className="rightArrow">
            <img src={ellipse}  width="114" height="114" alt="RightArrow" />
        </div>
     </div>
  );
}

export default Gallery;