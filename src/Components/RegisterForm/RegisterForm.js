import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Successfully registered!');
};
return (
    <div className="register-page">
        <div className="register-form-container">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit">Register</button>
        </form>
    </div>
    </div>
);
}

export default RegisterForm;
