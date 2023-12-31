import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';

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
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      buyValue: this.req.body.buyValue,
      color: this.req.body.color,
      status: this.req.body.status || false,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    const newCar = await this._service.registerCars(car);
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
    const { id } = this.req.params;
    try {
      const car = await this._service.getCarById(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }    
  }

  public async updateCar() {
    const obj: ICar = { ...this.req.body };
    const { id } = this.req.params;
    try {
      const car = await this._service.updateCar(id, obj);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }    
  }
}  