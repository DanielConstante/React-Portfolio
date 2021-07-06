import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/resume'>Resume</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/"><i className="fa fa-linkedin-square" /></a>{' '}
                        <a class=" btn btn-social-icon btn-github" href="https://github.com/DanielConstante"><i class="fa fa-github-square"/></a>{' '}
                        <a class=" btn btn-social-icon btn-codepen" href="https://codepen.io/dante86c"><i class="fa fa-codepen fa-lg"/></a>{' '}
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+14697035148"><i className="fa fa-phone" /> 1-469-703-5148</a><br />
                        <a role="button" className="btn btn-link" href="mailto:daniel_constante86@hotmail.com"><i className="fa fa-envelope-o" /> daniel_constante86@hotmail.com </a>
                    </div>
                </div>
            </div>
            <div  className="text-center">
            <p>DC Network © 2021</p>
            </div>
        </footer>
    );
}

export default Footer;