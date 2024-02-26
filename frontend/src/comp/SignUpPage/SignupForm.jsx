import React from 'react';
import './SignupForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const SignupForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder='First Name' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Last Name' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email' required />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <button type="submit">Sign Up</button>

                <div className="register-link">
                    <p>Already have an account? <a href="/">Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
