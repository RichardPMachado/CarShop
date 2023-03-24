import {
  // Model,
  Schema,
  // model,
  // models,
  // isValidObjectId,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
// import ErrorMap from '../utils/ErrorMap';
import AbstractODM from './AbstractODM';

export default class CarsODM extends AbstractODM<ICar> {
  // private schema: Schema;
  // private _model: Model<ICar>;

  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }
}
