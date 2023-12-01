import React, { useState } from 'react';
import '../css/GenerarDoc.css';
import { saveAs } from 'file-saver'; 
import Row from 'react-bootstrap/esm/Row';

const datos = [
  {
    nombre: 'Id',
    codigoCuenta: '----',
    fecha: '9-12-2023',
    peticion: '0',
    Nombre: "nada",
    Fecha: "06/05/2007",
    ValorUF: "90.000",
    Total: "b",
    Nro: "12",
    Interes: '6'
  },



  {
    nombre: 'Juan',
    codigoCuenta: '12345',
    fecha: '3-11-2023',
    peticion: '1',
    Nombre: "test",
    Fecha: "02/01/2003",
    ValorUF: "64.000",
    Total: "X",
    Nro: "123",
    Interes: '23'
  },
  {
    nombre: 'Ana',
    codigoCuenta: '54321',
    fecha: '5-12-2023',
    peticion: '3',
    Nombre: "caso dos",
    Fecha: "04/03/2005",
    ValorUF: "70.000",
    Total: "Z",
    Nro: "789",
    Interes: '40'
  },
  {
    nombre: 'Pedro',
    codigoCuenta: '98765',
    fecha: '7-12-2023',
    peticion: '4',
    Nombre: "caso tres",
    Fecha: "05/04/2006",
    ValorUF: "80.000",
    Total: "W",
    Nro: "1011",
    Interes: '50'
  },
  {
    nombre: 'Luis',
    codigoCuenta: '13579',
    fecha: '9-12-2023',
    peticion: '5',
    Nombre: "caso cuatro",
    Fecha: "06/05/2007",
    ValorUF: "90.000",
    Total: "V",
    Nro: "1213",
    Interes: '60'
  }
];

export default function GenerarDoc() {
  const [estadoGeneracion, setEstadoGeneracion] = useState('');
  const [peticion1,setpeticion1] = useState('0');
  const [peticion2,setpeticion2] = useState('0');
  const [peticion3,setpeticion3] = useState('0');

  const generarDocumentosLaTeX = async () => {
    setEstadoGeneracion('Generando documentos...');
    

    const data = datos[(peticion1)];

      // Leer la plantilla LaTeX base
    const template = 
      `
      
      \\documentclass{article}
      
      % Language setting
      % Replace \`english' with e.g. \`spanish' to change the document language
      \\usepackage[english]{babel}
      
      % Set page size and margins
      % Replace \`letterpaper' with \`a4paper' for UK/EU standard size
      \\usepackage[letterpaper,top=2cm,bottom=2cm,left=3cm,right=3cm,marginparwidth=1.75cm]{geometry}
      
      % Useful packages
      \\usepackage{amsmath}
      \\usepackage{graphicx}
      \\usepackage[colorlinks=true, allcolors=blue]{hyperref}
      
      \\title{Informe de financiera}
      \\author{Nro de peticion: ${data.peticion}}
      
      \\begin{document}
      \\maketitle
      
      \\section{Informacion del informe }
      Nombre de la persona: ${data.nombre}\\\\
      Numero de cuenta: ${data.codigoCuenta}\\\\
      Fecha de la persona: ${data.fecha}
      Informacion sensible: no\\\\
      Valor de uf: ${data.ValorUF}\\\\
      Total pedido: ${data.Total}\\\\
      Calculo de cuota: \\\\
      Numero de cuotas: \\\\
      Valor de cada interes: ${data.Interes}\\\\
      
      \\section{Comentarios}
      
      \\subsection{Comentarios de venta}
      
      aqui se va añadir informacion 
      
      \\subsection{Comentarios de analistas }
      
      aqui se va añadir informacion que corresponde alguna informacion que quiera dejar costancia al momento de enviar este informe y quede guardado en ese momento 
      
      \\end{document}
      `
      ;

      // Replace placeholders with data
      const documentoPersonalizado = template
        .replace('%peticion%',data.peticion)
        .replace('%NOMBRE%',data.Nombre)
        .replace('%CODIGO%', data.codigoCuenta)
        .replace('%UF%',data.ValorUF)
        .replace('%VALOR%',data.Total)
        .replace('%Numero%',data.Nro)
        .replace('%Interes%',data.Interes)
        .replace('%FECHA%', data.fecha)
        .replace('%P1%', peticion1)
        .replace('%P2%', peticion2)
        .replace('%P3%', peticion3);
      // Create a Blob from the LaTeX content
      const blob = new Blob([documentoPersonalizado], { type: 'application/x-latex' });

      // Save the file using FileSaver.js
      saveAs(blob, `Informe_Financira_`+peticion3+`.tex`);
    
    setEstadoGeneracion('Documentos generados y guardados.');
 
    alert('Se ha enviado el informa a:' + peticion2);
  
  }

  return (
    <>
      <Row className="no-gutters" style= {{
            minHeight: '100vh',
            width: '100%',
            paddingLeft: '5%',
            height: '100%',
            backgroundColor: 'aliceblue',
            }}>  
          <form action=""
          style= {{
            width: '80%',
            
            }}
            >
            <h1  
            style={{color: 'darkslategrey', 
            paddingLeft: '20%', 
            paddingBottom: '5%', 
            }}
            >Generador de documentos LaTeX</h1>
            <label htmlFor="peticion1" style={{fontWeight: 'bold', color: 'darkslategrey', }}>Numero de Id del usuario:</label>
            <br></br>
            <select name="peticion1" id="peticion1" value={peticion1} onChange={(e) => setpeticion1(e.target.value)}>
                <option value="0">Ingrese Id</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
          </form>
            
          <form action="" 
          style= {{
            width: '80%',
            }}>
              <label htmlFor="peticion2" style={{fontWeight: 'bold', color: 'darkslategrey'}}>Ingrese el correo del supervisor</label>
              <br></br>
              <select name="peticion2" id="peticion2" value={peticion2} onChange={(e) => setpeticion2(e.target.value)}>
                <option value="0">Ingrese Correo</option>
                  <option value="CMF1@ingresa.com">CMF1@ingresa.com</option>
                  <option value="CMF2@ingresa.com">CMF2@ingresa.com</option>
                  <option value="CMF3@ingresa.com">CMF3@ingresa.com</option>
                  <option value="CMF4@ingresa.com">CMF4@ingresa.com</option>
            </select>
          </form>

          <form action="" style= {{
            width: '80%',
            marginBottom: '1%',
            }}>
            <label htmlFor="peticion3" style={{fontWeight: 'bold', color: 'darkslategrey'}}>Indique motivo de derivacion de solicitud :</label>
            <br></br>
            <select name="peticion3" id="peticion3" value={peticion3} onChange={(e) => setpeticion3(e.target.value)}>  
                <option value="0">Identifique motivo</option>
                <option value="Antecedentes">1.Antecedentes</option>
                <option value="Motivos Externos">2.Motivos Externos</option>
                <option value="Problema">3.Problema de comprobacion</option>
                <option value="Error indeseado">4.Error indeseado</option>

            </select>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <button onClick={generarDocumentosLaTeX} >Generar Documentos</button></form>
          
          <p>{estadoGeneracion}</p>

      </Row>
    </>
  );
}


