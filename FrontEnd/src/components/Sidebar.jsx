import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  Link,
} from "react-router-dom";

export default function Sidebar() {
    return (
        <Navbar className="bg-light" style= {{height: 'auto', alignItems:'start', }}>
            <Nav defaultActiveKey="/" className="flex-column sidebar-sticky">
                <Link to="/"><Nav.Link href="/">Inicio</Nav.Link></Link>
                <Link to="/users"><Nav.Link href="/users">Usuarios</Nav.Link></Link>
                <Link to="/simulacion"><Nav.Link href="/simulacion">Simulacion</Nav.Link></Link>
                <Link to="/Generador"><Nav.Link href="/Generador">Generar informe</Nav.Link></Link>
                <Link to="/sims"><Nav.Link href="/sims">Mostrar simulaciones</Nav.Link></Link>
            </Nav>
        </Navbar>
        )
}
