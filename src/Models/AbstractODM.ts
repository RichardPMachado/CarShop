import {
  isValidObjectId,
  Model,
  models,
  Schema,
  // UpdateQuery,
  model,
} from 'mongoose';
import ErrorMap from '../utils/ErrorMap';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAllVehicles(): Promise<T[]> {
    const result = await this.model.find();
    return result;
  }
  
  public async findVehicleById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new ErrorMap(422, 'Invalid mongo id');
    const result = await this.model.findById(id);
    return result;
  }

  // public async update(_id: string, obj: Partial<T>): Promise<T | null> {
  //   if (!isValidObjectId(_id)) throw Error('Invalid Mongo id');

  //   return this.model.findByIdAndUpdate(
  //     { _id },
  //     { ...obj } as UpdateQuery<T>,
  //     { new: true },
  //   );
  // }
}