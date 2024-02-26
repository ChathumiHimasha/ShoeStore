import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
    
    const handleLogin = (event) => {
        event.preventDefault();
        
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        if (username === 'user' && password === 'user123') {
            // If correct, navigate to '/shop'
            window.location.href = '/shop';
        } else {
            // If incorrect, you might display an error message
            alert('Invalid username or password');
        }
    };

    return (
        <div className='container'>
            <div className='wrapper'>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" name="username" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    <div className="register-link">
                        <p>Don't have an account? <a href="/signup">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
