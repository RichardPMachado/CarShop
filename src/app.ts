import express from 'express';
import { carsRoutes, motorcyclesRoutes } from './Routes';

const app = express();

app.use(express.json());
app.use(carsRoutes);
app.use(motorcyclesRoutes);

export default app;
