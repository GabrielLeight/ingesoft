import React, {Fragment}  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './users/login';
import GenerarDoc from './Latex/Generardocuemntos';


export default function Home() {
    return (
            <div>
                Bienvenido a INF236
                < >
                <Login></Login>
                <GenerarDoc></GenerarDoc>
                </>
            </div>
        )
}