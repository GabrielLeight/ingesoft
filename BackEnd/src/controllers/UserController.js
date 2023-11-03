import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';


export default class UserController {
	 async getAll(req, res) {
		const users = await User.findAll();
		res.send(users);
	}

	async getBynombre(req, res) {
		const users = await User.findAll({
			where: {
				nombre: req.params.nombre
			}
		});
		res.send(users);
	}

	async get(req, res) {
		const user = await User.findByPk(req.params.userId);
		res.send(user);
	}

	async create(req, res) {
		const user = await User.create({
			nombre: req.body.nombre,
			email: req.body.email,
		});
		res.send(user);
	}

	async update(req, res) {
		const user = await User.findByPk(req.params.userId);
		user.update({nombre: req.body.nombre, email: req.body.email});
		res.send(user);
	}

	async delete(req, res) {
		await User.destroy({where: {id: req.params.userId}});
		res.send({status: "ok"});
	}
	async login(req, res) {
		const { email, password } = req.body;
	
		// Check if the user with the provided email exists
		const user = await User.findOne({ where: { email } });
	
		if (!user) {
		  return res.status(401).json({ message: 'Invalid email or password' });
		}
	
		// Check if the provided password matches the user's password
		if (user.password !== password) {
		  return res.status(401).json({ message: 'Invalid email or password' });
		}
	
		// If email and password are valid, generate a JWT token
		const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
	
		res.json({ token });
	  }
	
};


