import React from 'react';
import {Route, Switch, Link} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom" /* as router  just lets us rename browser router to something nicely */
import Homepage from "./Pages/Homepage";
import Dietpage from "./Pages/Dietpage";
import Mappage from "./Pages/Mappage";
import Profilepage from "./Pages/Profilepage";
import Socialpage from "./Pages/Socialpage";
import './App.css'
import Header from './Components/Header'

function App() {
  return(
    <Router>
    <Header />
    <Switch>
      <Route path='/profile' exact component={Profilepage} /> 
      <Route path='/' exact component={Homepage} />
      <Route path='/diet' exact component={Dietpage} /> 
      <Route path='/social' exact component={Socialpage} /> 
      <Route path='/map' exact component={Mappage} /> 

      </Switch>
    </Router>
  );
  }
  export default App
  /* app.js is our base, so only has components on every page like the nav */
  /* browser router for different routes for pages, switch ensures no double mapping for routes with the same name eg / and /profile match first char */