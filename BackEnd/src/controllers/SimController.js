import { Simulacion } from '../models/Simulacion.js';
import axios from "axios";
export default class SimController {
	 async getAllSims(req, res) {
		const simulaciones = await Simulacion.findAll();
		res.send(simulaciones);
	}

    async createSims(req, res) {
        try {
            const response = await axios.get(
                "https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=6b1ec4648c7284775f574ec2cd76aef10e557997&formato=JSON"
            );

            const ufstring = response.data;
            console.log(ufstring.UFs[0].Valor);
            console.log(req.body.taza);
            const simulacion = await Simulacion.create({
                dia: req.body.day,
                mes: req.body.month,
                año: req.body.year,
                taza: req.body.taza,
                valorUF: parseFloat(ufstring.UFs[0].Valor.replace(",", ".")),
            });
            
            res.send(simulacion);
            } catch (error) {   
            console.log(error);
            res.status(500).send({ error: "Internal Server Error" });
        }
    }
	async deleteSims(req, res) {
		await Simulacion.destroy({where: {id: req.params.simID}});
		res.send({status: "ok"});
	}
};
