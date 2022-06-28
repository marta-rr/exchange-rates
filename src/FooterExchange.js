import React from 'react';
import './App.css';
import { FaGithub } from 'react-icons/fa'

class FooterExchange extends React.Component {
    render() { return (
        <footer className='footer-exchange'>
            <p>© 2022 Copyright Marta Ríos. All Rights Reserved.
                <span className= "footer-social-network">
                    <button type="button" class="btn btn-light  btn-sm"><a href="https://github.com/marta-rr/" target="_blank" id='github'><FaGithub/>&nbsp;&nbsp;Github
                    </a></button>
                </span>
            </p>
        </footer>
    )
    }
}

export default FooterExchange;