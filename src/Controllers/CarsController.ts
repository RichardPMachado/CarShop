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
    await this._servise.create();
  }

  public async findAllCars() {
    await this._servise.findAllCars();    
  }
  
  public async findCarById() {
    await this._servise.findCarById();
  }
}