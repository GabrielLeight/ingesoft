import UserController from './UserController.js';
import SimController from './SimController.js';
export default (app) => {
	const userController = new UserController();
	const simController = new SimController();
	app.get('/users', userController.getAll);
	app.post('/users', userController.create);
	app.get('/users/:userId', userController.get);
	app.put('/users/:userId', userController.update);
	app.delete('/users/:userId', userController.delete);
	app.post('/login', userController.login);
	app.get('/sims', simController.getAllSims);
	app.delete('/sims/:simId', simController.deleteSims);
	app.post('/CreateSims', simController.createSims);
};