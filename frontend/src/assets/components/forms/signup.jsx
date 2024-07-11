import React from "react"
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function Signup(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
            try {
            const response = await axios.post('https://eventsy.onrender.com/auth/signup', {
                email,
                username,
                password,
            });
            console.log('Registered successfully:', response.data);
            const token = response.data.token;
            const uname = response.data.username;
            const mail = response.data.email;
            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('uname', uname);
                localStorage.setItem('mail', mail)
                navigate('/events');
            }

            } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Create <a className='eventsyLandingH'>Account</a></h1>
            <div className="input-box">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <MdEmail className="icon"/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <FaUser className="icon"/>
            </div>
            <div className="input-box">
                
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <FaKey className="icon"/>
            </div>
            <br></br>

            <button type="submit">Create Account</button>

            <div className="register">
                <p>Already have an account? <a href="/signin">Login here!</a></p>
            </div>
        </form>
    </div>
}