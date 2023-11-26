import "../views/css/Footer.css"

const Footer =() => {

    return(
        <div className="container mt-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{position: 'absolute', bottom: '20%', width: '100%'}} >
                <div className="background">
                        <div className="row">
                        <div className="col-lg-4">
                            <h3>Enlaces</h3>
                            <ul>
                            <li><a href="">Inicio</a></li>
                            <li><a href="#">Acerca de</a></li>
                            <li><a href="#">Contacto</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h3>Contacto</h3>
                            <p>Correo electrónico:</p>
                        </div>
                        <div className="col-lg-4">
                            <h3>Derechos de autor</h3>
                            <p>(c) 2023 Mi Sitio Web. Todos los derechos reservados.</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
    


}

export default Footer;