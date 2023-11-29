import { Simulaciones } from '../models/Simulacion.js';
import axios from "axios";
export default class SimController {
	async getAllSims(req, res) {
		try {
            const simulaciones = await Simulaciones.findAll();
            res.send(simulaciones);
          } catch (error) {
            console.error("Error fetching simulations:", error);
            res.status(500).send("Internal Server Error");
          }
	}

    async createSims(req, res) {
        const year =  req.body.year;              // Replace with the desired year
        const month = req.body.month;               // Replace with the desired month (1-12)
        const day = req.body.day; 

        const tasa = req.body.taza;
        const plazo = req.body.plazo;
        const valorcredito = req.body.valorcredito
        const apiUrl = `https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/${year}/${month}/dias/${day}?apikey=6b1ec4648c7284775f574ec2cd76aef10e557997&formato=JSON`

        try {
            const response = await axios.get(apiUrl);
            const ufstring = response.data;
            const valorUF=parseFloat(ufstring.UFs[0].Valor.replace(",", "."));
            
            const CuotaENUF = valorcredito / ((1 - Math.pow(tasa + 1, -plazo)) / tasa);
            const valortotal = valorcredito*valorUF + CuotaENUF*plazo ;

            const simulacion = await Simulaciones.create({
                dia: day,
                mes: month,
                año: year,
                taza: tasa,
                plazo: plazo,
                valorcredito: valortotal,
                valorUF: valorUF,
            });
            
            res.send(simulacion.data);
            } catch (error) {   
            console.log(error);
            res.status(500).send({ error: "Internal Server Error" });
        }
    }
	async deleteSims(req, res) {
		await Simulaciones.destroy({where: {id: req.params.simID}});
		res.send({status: "ok"});
	}
};
