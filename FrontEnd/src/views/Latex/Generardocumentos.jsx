import React, { useState } from 'react';
import '../css/GenerarDoc.css';
import { saveAs } from 'file-saver'; 

const datos = [
  { nombre: 'Juan', 
  codigoCuenta: '12345', 
  fecha: '3-11-2023', 
  peticion:'1',
  Nombre:"test",
  Fecha:"02/01/2003",
  ValorUF:"64.000",
  Total:"X",
  Nro:"123",
  Interes:'23'
} // se crea un dato x 
];

export default function GenerarDoc() {
  const [estadoGeneracion, setEstadoGeneracion] = useState('');

  const generarDocumentosLaTeX = async () => {
    setEstadoGeneracion('Generando documentos...');

    datos.forEach((data, index) => {
      // Leer la plantilla LaTeX base
      const template = `
      \
      \\Title{Informe de financiera}
      \\author{Nro de peticion: %peticion%}
      
      \\section{Informacion del informe }
      \\Nombre de la persona:%NOMBRE%
      \\Numero de cuenta:%Numero%
      \\Fecha de la persona:%FECHA%
      \\Valor de uf:%UF%
      \\Total pedido:%VALOR%
      \\Calculo de cuota:%%
      \\Valor de cada interes:%Interes%

      \\section{Comentarios}
      
      
      
      `
      ;

      // Replace placeholders with data
      const documentoPersonalizado = template
        .replace('%peticion%',data.peticion)
        .replace('%NOMBRE%', data.nombre)
        .replace('%CODIGO%', data.codigoCuenta)
        .replace('%UF%',data.ValorUF)
        .replace('%VALOR%',data.Total)
        .replace('%Numero%',data.Nro)
        .replace('%Interes%',data.Interes)
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


