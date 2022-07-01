import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    render() { return (
      <header>
        <div className= 'nav-bar'>
          <nav className='navbar navbar-expand-md navbar-dark bg-none'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='collapsibleNavbar'>
              <ul className='navbar-nav'>
                <li className='nav-item active'>
                    <Link style={{textDecoration: 'none'}} to='/'><span className='links' data-toggle='collapse' data-target='.navbar-collapse.show'>CURRENCY CONVERTER</span></Link>
                </li>
                <li className='nav-item'>
                  <Link style={{textDecoration: 'none'}} to='/ExchangeRates'><span className='links' data-toggle='collapse' data-target='.navbar-collapse.show'>EXCHANGE RATES</span></Link>
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
