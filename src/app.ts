import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import motorcyclesRoutes from './Routes/motorcyclesRoutes';
import carsRoutes from './Routes/carsRoutes';

const app = express();

app.use(express.json());
app.use(carsRoutes);
app.use(motorcyclesRoutes);
app.use(ErrorHandler.handle);

export default app;
