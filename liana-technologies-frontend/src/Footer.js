import React from "react";
import './Styles/Footer.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'



const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-first-row">
            <h4> Liana Technologies</h4>
           <nav className="footer-link-row">
        <Link to="/company">Company</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/news">News</Link>
        <Link to="/intranet">Intranet</Link>
                </nav>
         
            </div>
        <div className="footer-contact-container">
            <div className="footer-details-card">

            <h5>Sales and inquiries</h5>
            <h6>Email: sales@lianatech.com <br />
            Phone: +358 10 387 7053</h6>
            </div>

            <button className="btn-contact-us">Contact us</button>
            <div className="footer-social-logo">
            <SocialIcon url="www.facebook.com" bgColor="#4c8930"/>
            <SocialIcon url="www.twitter.com" bgColor="#4c8930"/>
            <SocialIcon url="www.linkedin.com" bgColor="#4c8930"/>

        </div>
            </div>





         </div>

    )


}

export default Footer;