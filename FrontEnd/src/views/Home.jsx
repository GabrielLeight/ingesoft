import React, {Fragment}  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './users/login';
import GenerarDoc from './Latex/Generardocumentos';


export default function Home() {
    const isAuthenticated = localStorage.getItem('authToken') !== null;
    return (
            <div>
                
                < >
                {isAuthenticated ? (
                        // User is logged in, display other content
                        <div>
                        <p>Welcome, you are logged in.</p>
                        {/* Place other components or content here */}
                        </div>
                    ) : (
                        // User is not logged in, show the Login component
                        <Login />
                    )}

                </>
            </div>
        )
}