import React, { useState } from 'react';
import './App.css';
import * as fs from 'node:fs';
import * as latex from 'node:node-latex';


const datos = [
  { nombre: 'Juan', codigoCuenta: '12345', fecha: '3-11-2023' } // se crea un dato x 
];

export default function GenerarDoc() {
  const [estadoGeneracion, setEstadoGeneracion] = useState('');

  const generarDocumentosLaTeX = async () => {
    setEstadoGeneracion('Generando documentos...');

    datos.forEach((data, index) => {
      // Leer la plantilla LaTeX base
      const template = fs.readFileSync('plantilla.tex', 'utf8');

      // Reemplazar marcadores con contenido específico
      const documentoPersonalizado = template
        .replace('%NOMBRE%', data.nombre)
        .replace('%CODIGO%', data.codigoCuenta)
        .replace('%FECHA%', data.fecha);

      // Guardar el documento personalizado en un archivo
      const outputFilename = `documento_${index}.tex`;
      fs.writeFileSync(outputFilename, documentoPersonalizado);

  
      pdfStream.pipe(fs.createWriteStream(`documento_${index}.pdf`));
    });

    setEstadoGeneracion('Documentos generados y guardados.');
  }

  return (
    <div className="App">
      <h1>Generador de Documentos LaTeX</h1>
      <button onClick={generarDocumentosLaTeX}>Generar Documentos</button>
      <p>{estadoGeneracion}</p>
    </div>
  );
}


