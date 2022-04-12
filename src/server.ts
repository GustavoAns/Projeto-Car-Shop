import CustomRouter from './routes/Router';
import App from './app';

import CarController from './controllers/CarsController';

import { Car } from './interfaces/CarInterface';

const server = new App();

const carController = new CarController();

const CarRouter = new CustomRouter<Car>();
CarRouter.addRoute(carController);

server.addRouter(CarRouter.router);

export default server;