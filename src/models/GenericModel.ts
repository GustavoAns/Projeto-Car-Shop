import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';
// import { ServiceError } from '../services/GenericService';

export default abstract class GenericModel<T> implements Model<T> {
  constructor(protected model:M<T & Document>) {}

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> => {
    const objId = { _id: id };
    return this.model.findOne(objId);
  };

  update = async (id: string, obj: T): Promise<T | null> => {
    const objId = { _id: id };
    return this.model.findByIdAndUpdate(objId, obj);
  };

  delete = async (id: string): Promise<T | null> => {
    const objId = { _id: id };
    return this.model.findByIdAndDelete(objId);
  };
}