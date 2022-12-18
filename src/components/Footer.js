import React from 'react';
import './styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Button from '../components/Button';

function Footer() {
  return (
    <React.Fragment>
        <footer className='footer'>
            <div className='footer-container'>
                    <div className='footer-left-menu'>
                        <h2 className='footer-header'>Social Media Accounts</h2>
                        <div className='footer-accounts'>
                            <a href='https://www.facebook.com/ricowskidudel' className='footer-link'>
                                <FaFacebook className='footer-item'></FaFacebook>
                            </a>
                            <a href='https://twitter.com/ricowskidudel' className='footer-link'>
                                <FaTwitter className='footer-item'></FaTwitter>
                            </a>
                            <a href='https://www.instagram.com/ricowskidudel/' className='footer-link'>
                                <FaInstagram className='footer-item'></FaInstagram>
                            </a>
                            <a href='https://www.linkedin.com/in/jerico-james-ramos-900283215/' className='footer-link'>
                                <FaLinkedin className='footer-item'></FaLinkedin>
                            </a>
                            <a href='https://github.com/RamosJerico' className='footer-link'>
                                <FaGithub className='footer-item'></FaGithub>
                            </a>
                        </div>
                        <div className='footer-logo'>
                            <img src='/JRLogowhitemobile.png' alt='' />
                            <p>© 2022 Rico Ramos</p>
                        </div>
                    </div>
                <div className='footer-menu'>
                    <div className="form">
                        <div className="title">Welcome,</div>
                        <div className="subtitle">Contact me!</div>
                        <div className="input-container ic1">
                            <input name="name" className="input" type="text" placeholder=" " required />
                            <div className="cut"></div>
                            <label htmlfor="name" className="placeholder">Name</label>
                        </div>
                        <div className="input-container ic2">
                            <input id="email" className="input" type="email" placeholder=" " required />
                            <div className="cut"></div>
                            <label for="email" className="placeholder">Email</label>
                        </div>
                        <div className="input-container ic2">
                            <textarea cols='30' rows='10' id="email" className="input" type="text" placeholder=" " required></textarea>
                            <div className="cut cut-short"></div>
                            <label for="email" className="placeholder">Message</label>
                        </div>
                        <div className='footer-btn'>
                            <Button  buttonColor='primary' buttonSize='btn--medium' buttonStyle='btn--primary'>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </React.Fragment>
  )
}
export default Footer;