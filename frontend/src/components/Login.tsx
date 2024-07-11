import React, { useState, FormEvent } from 'react';

const LoginForm = ({ loginFunc }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Add your login logic here, for example, make an API call
        loginFunc();
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} name='login_form'>
                <input
                    type="text"
                    name='login_form_username'
                    placeholder='username:'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name='login_form_password'
                    placeholder='password:'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default LoginForm;