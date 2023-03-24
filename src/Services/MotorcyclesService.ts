import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

export default class MotorcyclessServise {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async registerMotorcycles(data: IMotorcycle) {
    const motorcyclesODM = new MotorcyclesODM();
    const newMotorcycle = await motorcyclesODM.create(data);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  // public async getAllMotorcycle() {

  // }

  // public async getMotorcycleById(id) {

  // }
}