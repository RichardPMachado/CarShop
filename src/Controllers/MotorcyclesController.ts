import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcyclesService';

export default class MotorcyclesController {
  private _service: MotorcyclesService;
  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
  ) {
    this._service = new MotorcyclesService();
  }

  public async createMotorcycle() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      buyValue: this.req.body.buyValue,
      color: this.req.body.color,
      status: this.req.body.status || false,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMotorcycle = await this._service.registerMotorcycles(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllMotorcycles() {
    try {
      const allMotorcycles = await this._service.getAllMotorcycles(); 
      return this.res.status(200).json(allMotorcycles);
    } catch (error) {
      this.next(error);
    }    
  }

  public async findMotorcycleById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this._service.getMotorcycleById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }    
  }
  
  public async updateMotorcycle() {
    const obj: IMotorcycle = { ...this.req.body };
    const { id } = this.req.params;
    try {
      const motorcycle = await this._service.updateMotorcycle(id, obj);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }    
  }
}