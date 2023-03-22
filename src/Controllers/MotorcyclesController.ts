import { NextFunction, Request, Response } from 'express';

export default class MotorcyclesController {
  private _servise: MotorcyclesServise;
  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
  ) {
    this._servise = new MotorcyclesServise();
  }

  public async create() {
    await this._servise.create();
  }

  public async findAllMotorcycles() {
    await this._servise.findAllMotorcycles();    
  }
  
  public async findMotorcycleById() {
    await this._servise.findMotorcycleById();
  }
}