import React from "react"
// import "./Style.css"
// import { link } from 'react-router-dom'

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
                  <a class="nav-link" href="#">Currency converter</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Exchange rates</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
    }
}

export default NavBar