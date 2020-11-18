import React from 'react';
import './App.css';

import Main from "./pages/main";
import Benefits from "./pages/benefits";
import Gallery from "./pages/gallery";
import Query from "./pages/query";
import Social from "./pages/social";

function App() {
  return (
    <div>
      <Main />
      <Benefits />
      <Query />
      <Gallery />
      <Social />
    </div>
  );
}

export default App;
