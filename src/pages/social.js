import React from 'react';

import fbicon from "../img/icofacebook.png";
import twittericon from "../img/icotwitter.png";

function Social() {
  return (
    <div className="custInfo">
        <p className="info">“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries”.</p>
        <h3 className="custName">Rohit Chattopadhyay</h3>
        <img src={fbicon} width="12" height="22" alt="facebook" /> 
        <img src={twittericon} width="24" height="22" alt="twitter" /> 
    </div>
  );
}

export default Social;