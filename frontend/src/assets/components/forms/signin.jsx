import React from "react"
import './form.css'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DNA } from "react-loader-spinner";

export function Signin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
            try {
                setLoading(true);
            const response = await axios.post('https://eventsy.onrender.com/auth/signin', {
                email,
                password,
            });
            console.log('Logged in successfully:', response.data);
            const token = response.data.token;
            const uname = response.data.uname;
            const mail = response.data.mail;
            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('uname', uname);
                localStorage.setItem('mail', mail);
                setLoading(false);
                navigate('/events');
            }
            } catch (error) {
            console.error('Error logging in:', error);
        }
    };


    return <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Welcome <a className='eventsyLandingH'>Back</a></h1>
            <div className="input-box">
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <MdEmail className="icon"/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <FaKey className="icon"/>
            </div>
            <br></br>
            <div className="remember">
                <label><input type="checkbox" />Remember me</label>
                <a href="https://media1.tenor.com/m/e-un8UrwpfwAAAAd/bakchodi-mat-kar-laude-cid-meme.gif" target="_blank">Forgot Password</a>
            </div>

            <button type="submit">{loading ? <DNA
                                                visible={true}
                                                height="45"
                                                width="50%"
                                                ariaLabel="dna-loading"
                                                wrapperStyle={{}}
                                                wrapperClass="dna-wrapper"
                                                /> : 'Login'}</button>

            <div className="register">
                <p>Dont't have an account? <a onClick={()=>{navigate('/signup')}} className="link"><u>Register here!</u></a></p>
            </div>
        </form>
    </div>
}

