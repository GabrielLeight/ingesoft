import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
    const nombre = useSelector((store => store.username));

    return (
       <Navbar style={{backgroundColor: "#87ceeb"}} className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#home">
            <div>La clave</div>
        
            </Navbar.Brand>
            <div className="text-white"> Bienvenido!!</div>
        </Navbar>
    )
}

