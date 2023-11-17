import { Simulacion } from '../models/Simulacion.js';
import axios from "axios";
export default class SimController {
	 async getAllSims(req, res) {
		const simulaciones = await Simulacion.findAll();
		res.send(simulaciones);
	}


	async createSims(req, res) {
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
		const simulacion = await Simulacion.create({
			dia: req.body.dia,
            mes: req.body.mes,
            year: req.body.año,
			taza: req.body.taza,
            uf: req.body.uf
		});
		res.send(simulacion);
	}


	async deleteSims(req, res) {
		await Simulacion.destroy({where: {id: req.params.simID}});
		res.send({status: "ok"});
	}
};
