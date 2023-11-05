import React, { useState } from 'react';
import './GenerarDoc.css';
import { saveAs } from 'file-saver'; 

const datos = [
  { nombre: 'Juan', codigoCuenta: '12345', fecha: '3-11-2023' } // se crea un dato x 
];

export default function GenerarDoc() {
  const [estadoGeneracion, setEstadoGeneracion] = useState('');

  const generarDocumentosLaTeX = async () => {
    setEstadoGeneracion('Generando documentos...');

    datos.forEach((data, index) => {
      // Leer la plantilla LaTeX base
      const template = `Your LaTeX template here, with %NOMBRE%, %CODIGO%, %FECHA% placeholders`;

      // Replace placeholders with data
      const documentoPersonalizado = template
        .replace('%NOMBRE%', data.nombre)
        .replace('%CODIGO%', data.codigoCuenta)
        .replace('%FECHA%', data.fecha);

      // Create a Blob from the LaTeX content
      const blob = new Blob([documentoPersonalizado], { type: 'application/x-latex' });

      // Save the file using FileSaver.js
      saveAs(blob, `documento_${index}.tex`);
    });
    setEstadoGeneracion('Documentos generados y guardados.');
  }

  return (
    <div className="GenerarDoc">
      <h1>Generador de Documentos LaTeX</h1>
      <button onClick={generarDocumentosLaTeX}>Generar Documentos</button>
      <p>{estadoGeneracion}</p>
    </div>
  );
}


