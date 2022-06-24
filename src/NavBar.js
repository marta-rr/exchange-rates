import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class NavBar extends React.Component {
    render() { return (
      <header>
        <div className= "nav-bar">
          <nav className="navbar navbar-expand-md navbar-dark bg-none">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <Link style={{textDecoration: 'none'}} to="/"><span className="links">CURRENCY CONVERTER</span></Link>
                </li>
                <li className="nav-item">
                  <Link style={{textDecoration: 'none'}} to="/ExchangeRates"><span className="links">EXCHANGE RATES</span></Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
    }
}

export default NavBar;