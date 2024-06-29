import React from "react"
import './form.css'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import axios from 'axios';
import { useState } from "react";

export function Signin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
            try {
            const response = await axios.post('/auth/signin', {
                email,
                password,
            });
            console.log('Logged in successfully:', response.data);
            // Handle successful login (e.g., save token, redirect)
            } catch (error) {
            console.error('Error logging in:', error);
        }
    };


    return <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Welcome Back</h1>
            <div className="input-box">
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <MdEmail className="icon"/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <FaKey className="icon"/>
            </div>
            <div className="remember">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password</a>
            </div>

            <button type="submit">Login</button>

            <div className="register">
                <p>Dont't have an account? <a href="/signup">Register here!</a></p>
            </div>
        </form>
    </div>
}

