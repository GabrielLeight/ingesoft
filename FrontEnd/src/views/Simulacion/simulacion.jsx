
import { getUf } from "../../repositories/user";
APIKEY =  "6b1ec4648c7284775f574ec2cd76aef10e557997"
export default function Simulacion() {
	const history = useNavigate ();

	const [state, setstate] = useState({});

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			const response = getUf(state);

            return(
                <div className="container mt-4">

                </div>
            )
		} catch (error) {
			console.log(error);
			alert("A ocurrido un error al actualizar");
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
