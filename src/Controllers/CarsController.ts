import { NextFunction, Request, Response } from 'express';

export default class CarsController {
  private _servise: CarsServise;
  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
  ) {
    this._servise = new CarsServise();
  }

  public async create() {
    try {
      const newCar = await this._service.create(this.req.body);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCars() {
    await this._servise.findAllCars();    
  }
  
  public async findCarById() {
    await this._servise.findCarById();
  }
}