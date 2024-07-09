import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';

const HomePage = () => {
    const user = useSelector((state) => state.user.user);
    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);

    return (
        <div>
            <h1>Home Page</h1>
            <LoginForm />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {user && <p>Welcome, {user.name}</p>}
        </div>
    );
};

export default HomePage;
