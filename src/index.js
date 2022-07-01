import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExchangeRates from './ExchangeRates';
import NavBar from './NavBar';
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavBar />
    <Switch>
      <Route path='/' exact component={ App }/>
      <Route path='/ExchangeRates' component={ ExchangeRates }/>
    </Switch>
  </Router>
);


