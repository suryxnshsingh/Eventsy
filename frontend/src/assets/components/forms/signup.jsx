import React from "react"
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';


export function Signup(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
            try {
            const response = await axios.post('/users/signup', {
                email,
                username,
                password,
            });
            console.log('Registered successfully:', response.data);
            // Handle successful registration (e.g., redirect to login page, show a success message)
            } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="input-box">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <MdEmail className="icon"/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <FaUser className="icon"/>
            </div>
            <div className="input-box">
                
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <FaKey className="icon"/>
            </div>

            <button type="submit">Create Account</button>

            <div className="register">
                <p>Already have an account? <a href="/signin">Login here!</a></p>
            </div>
        </form>
    </div>
}