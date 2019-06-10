import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Work from './Work'

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/work/" component={Work} />
    </Router>
  );
}

export default AppRouter;
