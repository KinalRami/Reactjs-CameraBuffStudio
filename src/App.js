import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallary from './pages/Gallary';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from "react-router-dom";

const App = () =>{
  return(
    <div>
        <Navbar />
        <Switch>  
      
          <Route  exact path="/" component={Home} />
          <Route  exact path="/registration" component={Registration} /> 
          <Route  exact path="/About" component={About} />
          <Route  exact path="/Contact" component={Contact} />
          <Route  exact path="/Service" component={Service} />
          <Route  exact path="/Gallary" component={Gallary} />
         

          <Redirect to="/" />
        </Switch>
    </div>
  );

};

export default App;

