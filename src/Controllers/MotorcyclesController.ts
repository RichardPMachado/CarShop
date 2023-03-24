import { NextFunction, Request, Response } from 'express';
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
    try {
      const newMotorcycle = await this._service.registerMotorcycles(this.req.body);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  // public async findAllmotorcycles() {
  //   try {
  //     const allMotorcycles = await this._service.getAllMotorcycles(); 
  //     return this.res.status(200).json(allMotorcycles);
  //   } catch (error) {
  //     this.next(error);
  //   }    
  // }
  
  // public async findmotorcycleById() {
  //   try {
  //     const motorcycle = await this._service.getMotorcycleById(this.req.params.id);
  //     return this.res.status(200).json(motorcycle);
  //   } catch (error) {
  //     this.next(error);
  //   }    
  // }
}