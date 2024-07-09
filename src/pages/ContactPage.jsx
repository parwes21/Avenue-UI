import React from 'react';
import { useSelector } from 'react-redux';
 
const ContactPage = () => {
    const user = useSelector((state) => state.user.user);
    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);

    return (
        <div>
            <h1>ContactPage  Page</h1>
         
        </div>
    );
};

export default ContactPage;
