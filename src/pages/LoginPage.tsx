import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsLoading(true);
        console.log({email, password});
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
                <button type="submit" disabled={isLoading}>Se connecter</button>
            </form>
            <Link to='/register'>Register</Link>
        </div>
    )
}

export default LoginPage;