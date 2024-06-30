import React from 'react';
import './footer.css';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer" style={{width : '100%', height : '30%' }}>
            <div className="column">
                    <h3>ABOUT</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                        <li>&copy;Copyright</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>CONNECT HERE</h3>
                    <ul>
                        <li><AiFillInstagram />/eventify</li>
                        <li><FaFacebook />/eventify</li>
                        <li><FaYoutube />/eventify</li>
                        <li><FaReddit />/eventify</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>OFFICIAL</h3>
                    <ul>
                        <li>+91 987654321</li>
                        <li>eventify@gmail.com</li>
                        <li>MalwaMill, Indore</li>
                    </ul>
                </div>

        </footer>
    );
};

export default Footer;