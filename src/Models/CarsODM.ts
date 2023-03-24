import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
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

  public async findAllCars(): Promise<ICar[]> {
    const result = await this._model.find();
    return result;
  }
  
  public async findCarById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new ErrorMap(422, 'Invalid mongo id');
    const result = await this._model.findById(id);
    return result;
  }
}
