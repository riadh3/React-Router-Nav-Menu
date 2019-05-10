import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import {BrowserRouter, Link, Route} from 'react-router-dom';


const ServicesLink = () => ( 
  <div className="nested-container">
    <Link className="nested-link"  to="/services/for-entrepreneurs">For entrepreneurs </Link><br />
    <Link className="nested-link"  to="/services/for-students">For students</Link><br />
    <Link className="nested-link"  to="/services/for-hobbyists">For hobbyists</Link>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="nav-bar">
          <Link className="parent-link" to="/home">Accueil</Link>
          <Link className="parent-link"  to="/services">Services</Link>
          <Link className="parent-link" to="/contact">Contact</Link>
      </div>
        <Route exact path="/services" component={ServicesLink} />
     </div>
    );
  }
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));