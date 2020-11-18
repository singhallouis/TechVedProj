import React from 'react';

import training from "../img/training.jpg";

function Benefits() {
  return (
<div><img src={training} width="100%" height="100%" alt="training" />
        <h1 className="fitness">FITNESS</h1>
        <h3 className="redeemed">REDEEMED</h3>
        <p className="payPerUse">Now pay per use & gym it anytime, anywhere!</p><hr />
  </div>
  );
}

export default Benefits;