import { Router } from 'express';
import { CarsController } from '../Controllers';

const routes = Router();

routes.get('/cars', (req, res, next) => new CarsController(req, res, next).findAllCars());

routes.get('/cars/:id', (req, res, next) => new CarsController(req, res, next).findCarById());

routes.post('/cars', (req, res, next) => new CarsController(req, res, next).create());

export default routes;