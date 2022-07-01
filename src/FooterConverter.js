import React from 'react';
import { FaGithub } from 'react-icons/fa'


class FooterConverter extends React.Component {
    render() { return (
        <footer className='footer-converter'>
            <p>© 2022 Copyright Marta Ríos. All Rights Reserved.
                <span className= "footer-social-network">
                    <a href="https://github.com/marta-rr/" target="_blank" id='github'><FaGithub/>&nbsp;&nbsp;Github</a>
                </span>
            </p>
        </footer>
    )
    }
}

export default FooterConverter;

