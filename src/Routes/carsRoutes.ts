import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carsRoutes = Router();

carsRoutes.get('/cars', (req, res, next) => new CarsController(req, res, next).findAllCars());

carsRoutes.get('/cars/:id', (req, res, next) => new CarsController(req, res, next).findCarById());

carsRoutes.post('/cars', (req, res, next) => new CarsController(req, res, next).createCar());

carsRoutes.put('/cars/:id', (req, res, next) => new CarsController(req, res, next).updateCar());

export default carsRoutes;