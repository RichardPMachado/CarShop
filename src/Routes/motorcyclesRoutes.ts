import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const routes = Router();

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcyclesController(req, res, next).findAllMotorcycles(),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).findMotorcycleById(),
);

routes.post('/motorcycles', (req, res, next) => new MotorcyclesController(req, res, next)
  .createMotorcycle());

routes.put('/motorcycles/:id', (req, res, next) => new MotorcyclesController(req, res, next)
  .updateMotorcycle());

export default routes;