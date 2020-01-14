import React from "react";
import Routes from "./routes/Router";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes />
    </Router>
  );
}

export default App;
