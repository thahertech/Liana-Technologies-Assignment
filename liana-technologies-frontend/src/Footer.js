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
           <nav className="footer-link-row">
        <Link to="/company">Company</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/news">News</Link>
        <Link to="/intranet">Intranet</Link>
        </nav>
            </div>

            <h6> Liana Technologies</h6>
            <h5>Sales and inquiries</h5>
            <h6>Email: sales@lianatech.com <br />
            Phone: +358 10 387 7053</h6>
            <button className="btn-contact-us">Contact us</button>
            <div className="footer-social-logo">
            <SocialIcon url="www.facebook.com" bgColor="#4c8930"/>
            <SocialIcon url="www.twitter.com" bgColor="#4c8930"/>
            <SocialIcon url="www.linkedin.com" bgColor="#4c8930"/>
            </div>



          

         </div>
        
    )


}

export default Footer;