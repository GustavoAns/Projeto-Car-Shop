import { Router } from 'express';

import GenericController from '../controllers/GenericController';
import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';

const carService = new CarService();
const genericController = new GenericController<Car>(carService);

const carRouter = Router();

carRouter
  .post('/cars', (req, res) => genericController.create(req, res));

export default carRouter;