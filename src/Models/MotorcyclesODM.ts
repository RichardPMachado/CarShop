import {
  // Model,
  Schema,
  // model,
  // models,
  // isValidObjectId,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
// import ErrorMap from '../utils/ErrorMap';
import AbstractODM from './AbstractODM';

export default class MotorcyclesODM extends AbstractODM<IMotorcycle> {
  // private schema: Schema;
  // private _model: Model<IMotorcycle>;

  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }
}
