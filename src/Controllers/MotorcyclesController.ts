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
    try {
      const newMotorcycle = await this._service.create(this.req.body);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllMotorcycles() {
    await this._servise.findAllMotorcycles();    
  }
  
  public async findMotorcycleById() {
    await this._servise.findMotorcycleById();
  }
}