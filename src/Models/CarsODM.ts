import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
import ErrorMap from '../utils/ErrorMap';

export default class CarsODM {
  private schema: Schema;
  private _model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this._model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this._model.create({ ...car });
  }

  public async findAllCars(): Promise<ICar[] | null> {
    const result = await this._model.find();
    return result;
  }
  
  public async findCarById(_id: string): Promise<ICar | null> {
    const result = await this._model.findById(
      { _id },
      { id: 1, model: 1, year: 1, color: 1, status: 1, buyValue: 1, doorsQty: 1, seatsQty: 1 },
    );
    if (!result) throw new ErrorMap(404, 'Car not found');
    return result;
  }
}
