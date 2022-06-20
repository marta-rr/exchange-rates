import React from "react"
import { Link } from "react-router-dom";
import './App.css'


class NavBar extends React.Component {
    render() { return (
      <header>
        <div class= "nav-bar">
          <nav class="navbar navbar-expand-md navbar-dark bg-none">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                    <Link style={{textDecoration: 'none'}} to="/"><span class="links">CURRENCY CONVERTER</span></Link>
                </li>
                <li class="nav-item">
                  <Link style={{textDecoration: 'none'}} to="/ExchangeRates"><span class="links">EXCHANGE RATES</span></Link>
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