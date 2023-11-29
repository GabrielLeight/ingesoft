import React, { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import DeleteFormSym from "../../components/DeleteFormSim";
import { deleteSym, getAllSims } from "../../repositories/user";
import Table from "react-bootstrap/Table";


export default function ShowSimulation() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sims`);
        setData(response.data);
		console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);

      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts
  console.log(data)
  return (
    <div className="container mt-4" style= {{
      border: '15% ',
      width: '90%',
      }}>
      <Table striped='columns' bordered> 
      <thead>
      <tr>
      <th >ID Simulacion:</th>
              <th>Dia:</th><th>Mes:</th><th>Año:</th><th>Tasa:</th><th>ValorUF:</th><th>Valor Total Credito:</th> </tr></thead>
          {error && <tr><td>Error loading data</td></tr>}
          {!error && !data && <tr><td>Loading...</td></tr>}
          {data && data.map((item) => (
  			<React.Fragment key={item.id}>
            
            <tbody striped='columns'>  
            <tr>
            
            <td>{item.id}</td>
            
            <td>{item.dia}</td>
            
            <td>{item.mes}</td>
            
            <td>{item.año}</td>
            
            <td>{item.taza}</td>
            
            <td>{item.valorUF}</td>
            
            <td>{item.valorcredito}</td>
            <td><DeleteFormSym id={item.id} callback={deleteSym} /></td>
          </tr>
          </tbody>
          
			</React.Fragment>
			))}
      </Table>


    </div>
  );
}