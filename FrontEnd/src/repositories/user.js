import axios from "axios";

const updateUser = async (id, data) =>
	axios
		.put(`${process.env.REACT_APP_BACKEND_URL}/users/${id}/edit`, data);

const createUser = async (data) =>
	axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/users`, data);

const login = async (data) =>
	axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/login`, data)
		.then((res) => res.data);
const deleteUser = async (id) =>
	axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`).then(res => res.data);

const getAllUsers = () =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
		.then((res) => res.data);

const getUser = (id) =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
		.then((res) => res.data);
const getUf = (fecha)=>{
	dia = fecha.dia 
	mes = fecha.mes
	año = fecha.año
	if (fecha.año){
		let greeting = `${año}/${mes}/${dia}/`;
	}
	if (fecha.mes){
		let greeting = `${año}/${mes}/`;
	}
	if (fecha.dia){
		let greeting = `${año}/${mes}/dias/${dia}/`;
	}
	var txt = "https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=6b1ec4648c7284775f574ec2cd76aef10e557997&formato=JSON"
	axios
	.get(`https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=6b1ec4648c7284775f574ec2cd76aef10e557997&formato=JSON`)
	.then((res) => res.data);
}
// eslint-disable-nextline
export { deleteUser, updateUser, createUser, getAllUsers, getUser, login, getUf };
