import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Apply from './pages/Apply/Apply';
import Finalcheck from './pages/Finalcheck/Finalcheck';
import Thanks from './pages/Thanks/Thanks';
import Verification from './pages/Verification/Verification';
import Creditscore from './pages/Creditscore/Creditscore';
import Carloan from './pages/Carloan/Carloan';
import Mortgage from './pages/Mortgage/Mortgage';
import Loantypes from './pages/Loantypes/Loantypes';
import Yourgoals from './pages/Yourgoals/Yourgoals';
import Dependents from './pages/Dependents/Dependents';
import Aboutyou from './pages/Aboutyou/Aboutyou';
import Application from './pages/Application/Application';
import Navbar from './Components/Navbar/Navbar';
import Coborrower from './pages/Coborrower/Coborrower';


const App = () => {
  return (
    
   <Router>
    <Navbar/>
      <Switch>
      <Route path="/Thanks" exact>
          <Thanks />
        </Route>
      <Route path="/Finalcheck" exact>
          <Finalcheck />
        </Route>
      <Route path="/Verification" exact>
          <Verification />
        </Route>
      <Route path="/Creditscore" exact>
          <Creditscore />
        </Route>
      <Route path="/Mortgage" exact>
          <Mortgage />
        </Route>
      <Route path="/Carloan" exact>
          <Carloan />
        </Route>
        <Route path="/Yourgoals" exact>
          <Yourgoals />
        </Route>
      <Route path="/loantypes" exact>
          <Loantypes />
        </Route>
      <Route path="/dependents" exact>
          <Dependents />
        </Route>

        <Route path="/Coborrower" exact>
          <Coborrower/>
        </Route>  
      <Route path="/aboutyou" exact>
          <Aboutyou/>
        </Route>
      <Route path="/application" exact>
          <Application/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/Apply" exact> 
          <Apply/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
    
   </Router>
   
  );
}

export default App;
