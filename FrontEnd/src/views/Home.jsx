import React, {Fragment}  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './users/login';


export default function Home() {
    return (
            <div>
                Bienvenido a INF236
                < >
                <Routes>
                    <Route path="/login" element={<Login />} />
                    {/* Other routes specific to the Home component */}
                </Routes>
                </>
            </div>
        )
}