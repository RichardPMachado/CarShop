import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ErrorMap from '../utils/ErrorMap';

export default class MotorcyclesODM {
  private schema: Schema;
  private _model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this._model = models.Motorcycle || model('Motorcycle', this.schema);
  }
  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this._model.create({ ...motorcycle });
  }

  public async findAllMotorcycles(): Promise<IMotorcycle[]> {
    const result = await this._model.find();
    return result;
  }

  public async findMotorcycleById(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new ErrorMap(422, 'Invalid mongo id');
    const result = await this._model.findById(id);
    return result;
  }
}
