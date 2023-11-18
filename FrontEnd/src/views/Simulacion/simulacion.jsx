import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { getUf } from "../../repositories/user";

export default function Simulacion() {
	const history = useNavigate ();

	const [state, setstate] = useState({});

	const submitForm = async (e) => {
		e.preventDefault();
		alert(state.fecha)
		const selectedDate = new Date(state.fecha);
		const year = selectedDate.getFullYear();
		const month = selectedDate.getMonth() + 1; // Month is zero-based
		const day = selectedDate.getDate() + 1;
		try {
			const response = getUf({
				valor: state.valor,
				plazo: state.plazo,
				taza: state.taza,
				year,
				month,
				day,
			});
	
			// Handle the response as needed
			return (
				<div className="container mt-4">
					<p>{response}</p>
				</div>
			);
		} catch (error) {
			alert("Ha ocurrido un error al actualizar");
		}
	};

	return (
		<div className="container mt-4">
			<form onSubmit={submitForm}>
				<div className="form-group">
					<label htmlFor="valor">valor prestamo en UF</label>
					<input
						className="form-control"
						id="valor"
						type="number"
						value={state.valor}
						onChange={(e) => {
							setstate({ ...state, valor: e.target.value });
						}}
						placeholder="Ingrese valor del prestamo"
						required
					/>
				</div>
                <div className="form-group">
					<label htmlFor="plazo">plazo de cuotas totales</label>
					<input
						className="form-control"
						id="plazo"
						type="number"
						value={state.plazo}
						onChange={(e) => {
							setstate({ ...state, plazo: e.target.value });
						}}
						placeholder="Ingrese plazo del interes"
						required
					/>
				</div>
                <div className="form-group">
					<label htmlFor="taza">Taza de interes</label>
					<input
						className="form-control"
						id="taza"
						type="number"
						value={state.taza}
						onChange={(e) => {
							setstate({ ...state, taza: e.target.value });
						}}
						placeholder="Ingrese Taza"
						required
					/>
					<label htmlFor="taza">Fecha de prestamo:</label>
					
				</div>
				<div className="form-group">
					<input 
						type="date"
						value={state.fecha}
						onChange={(e) => {
							setstate({ ...state, fecha: e.target.value });
						}}
						placeholder="Ingrese fecha"
						/>
				</div>
				<div className="float-right">
					<button type="submit" className="btn btn-primary">
						Guardar
					</button>
				</div>
			</form>
		</div>
	);
}
