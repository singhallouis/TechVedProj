import React from 'react';

import fitness from "../img/muscle.png";
import navbar from "../img/menu.png";

function Main() {
  return (
    <div className="parent">
        <div className="leftImg"><img src={fitness} width="60%" height="90%" alt="fitness" /></div>
        <div className="rightImg"><img src={navbar} width="100%" height="100%" alt="fitness" /></div><br /><hr />
    </div>
   
  );
}

export default Main;