import { Router } from 'express';

const routes = Router();

routes.get('/motorcycles', (req, res, next) => new MotorcyclesController(req, res, next).findAllMotorcycles());

routes.get('/motorcycles/:id', (req, res, next) => new MotorcyclesController(req, res, next).findMotorcycleById());

routes.post('/motorcycles', (req, res, next) => new MotorcyclesController(req, res, next).create());

export default routes;