import React from 'react';
import './footer.css';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import {  FaGithub } from 'react-icons/fa';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="foot">
            <div className='footer'>
                <div className="about">
                    <h3>ABOUT</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                    </ul>
                </div>
                <div className="socials">
                    <h3>CONNECT HERE</h3>
                    <ul>
                        <li><AiFillInstagram />/eventify</li>
                        <li><FaFacebook />/eventify</li>
                        <li><FaYoutube />/eventify</li>
                    </ul>
                </div>
                <div className="official">
                    <h3>OFFICIAL</h3>
                    <ul>
                        <li>+91 987654321</li>
                        <li>eventify@gmail.com</li>
                        <li>MalwaMill, Indore</li>
                    </ul>
                </div>
            </div>
            <div className='suryansh'>
             Made by <a className='sa' onClick={()=>{navigate('/aboutus')}}>  SURYANSH SINGH </a> • Connect with me on <a href="https://x.com/suryxnshsingh" target="_blank"><FaSquareXTwitter className='sit'/></a>
             <a href="https://instagram.com/suryxnshsingh" target="_blank"><AiFillInstagram className='si'/></a>
             <a href="https://linkedin.com/in/suryxnshsingh" target="_blank"><FaLinkedin className='sil'/></a>
             <a href="https://github.com/suryxnshsingh" target="_blank"><FaGithub className='sig'/></a>
            </div>
        </footer>
    );
};

export default Footer;