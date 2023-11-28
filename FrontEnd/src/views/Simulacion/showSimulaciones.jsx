import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShowSimulation() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/GetAllSims`);
        setData(response.data);
		console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts
  console.log(data)
  return (
    <div className="container mt-4">
      <table className="table">
        <tbody>
          {error && <tr><td>Error loading data</td></tr>}
          {!error && !data && <tr><td>Loading...</td></tr>}
          {data && data.map((item) => (
  			<React.Fragment key={item.id}>
            <>
              <tr>
                <th>ID:</th>
                <td>{item.id}</td>
              </tr>
              <tr>
                <th>Dia</th>
                <td>{item.dia}</td>
              </tr>
              <tr>
                <th>Mes</th>
                <td>{item.mes}</td>
              </tr>
              <tr>
                <th>Año</th>
                <td>{item.año}</td>
              </tr>
              <tr>
                <th>taza</th>
                <td>{item.taza}</td>
              </tr>
              <tr>
                <th>ValorUF</th>
                <td>{item.valorUF}</td>
              </tr>
            </>
			</React.Fragment>
			))}
        </tbody>
      </table>
    </div>
  );
}