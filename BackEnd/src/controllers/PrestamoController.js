import { Prestamo } from '../models/prestamo.js';
import axios from "axios";
export default class PrestamoController {
    async mostrarPrestamos(req,res){
        try {
            const ejec = req.body.ejecutivo;

            const whereClause = ejec ? { where: { ejecutivo: ejec } } : {};

            const Prestamos = await Prestamo.findAll(whereClause);
            const seen = {};
            const uniqueUsers = [];
        
            for (const prestamo of Prestamos) {
                if (!seen[prestamo.ejecutivo]) {
                    seen[prestamo.ejecutivo] = true;
                    uniqueUsers.push(prestamo);
                }
            }
        
            console.log(uniqueUsers);
            res.send(uniqueUsers);
          } catch (error) {
            console.error("Error fetching simulations:", error);
            res.status(500).send("Internal Server Error");
          }
    }
    async getPrestamo(req,res){
        try {
            const correo = req.body.correo;
            console.log("correo")
            console.log(correo)
            const Prestamos = await Prestamo.findAll({
                where: {
                    correo: correo
                }
            });
            console.log(Prestamos[0])
            res.send(Prestamos);
          } catch (error) {
            console.error("Error fetching simulations:", error);
            res.status(500).send("Internal Server Error");
          }
    }
    async createPrestamos(req, res) {
        const year =  req.body.año;              // Replace with the desired year
        const month = req.body.mes;               // Replace with the desired month (1-12)
        const day = req.body.dia; 
        const numMes = req.body.numMes;
        const razon = req.body.razon;
        const valor = req.body.valor;
        const correo = req.body.correo;
        const nombre = req.body.nombre;
        const rut = req.body.rut;
        const ejec = req.body.ejecutivo;

        try {
            
            const prestamodata = await Prestamo.create({
                dia: day,
                mes: month,
                año: year,
                numMes: numMes,
                razon: razon,
                valor: valor,
                correo: correo,
                nombre: nombre,
                rut: rut,
                ejecutivo: ejec

            });

            res.send(prestamodata);
            } catch (error) {   
            console.log(error);
            res.status(500).send({ error: "Internal Server Error" });
        }
    }
	async deletePrestamos(req, res) {
		await Prestamo.destroy({where: {id: req.params.prestId}});
		res.send({status: "ok"});
	}
};
