import "../views/css/Footer.css"

const Footer =() => {

    return(
        <div className="container mt-4" style={{  
            alignItems: 'center',
            Top: '100%', }}>
            <div style={{position: 'absolute',
            top: '150%',
            left: '0%',
            bottom: '0%',
            width: '100%', 
            }} >
                <div className="background" style={{ width: '100', color: 'darkslategrey', background: '#87ceeb',height: 'auto' }}>
                        <div className="row" style= {{paddingLeft: '8%', paddingRight: '8%', paddingTop: '2%', paddingBottom: '3%'}}>
                        <div className="col-lg-4" >
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