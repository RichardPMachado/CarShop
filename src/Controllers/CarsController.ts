import { NextFunction, Request, Response } from 'express';
import { CarsService } from '../Services';

export default class CarsController {
  private _service: CarsService;
  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
  ) {
    this._service = new CarsService();
  }

  public async createCar() {
    const newCar = await this._service.registerCars(this.req.body);
    return this.res.status(201).json(newCar);
  }

  public async findAllCars() {
    try {
      const allCars = await this._service.getAllCars(); 
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }    
  }
  
  public async findCarById() {
    try {
      const car = await this._service.getCarById(this.req.params.id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }    
  }
}