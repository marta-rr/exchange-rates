import React from "react"
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import './App.css'

class NavBar extends React.Component {
    render() { return (
    <Router>
      <header>
        <div class= "nav-bar">
          <nav class="navbar navbar-expand-md navbar-dark bg-none">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NavLink exact activeClassName='converter' to='/'>Currency Converter</NavLink>
                    {/* <Link to="/">Currency Converter</Link> */}
                </li>
                <li class="nav-item">
                  <NavLink exact activeClassName='converter' to='/'>Exchange Rates</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Router>
    )
    }
}

export default NavBar