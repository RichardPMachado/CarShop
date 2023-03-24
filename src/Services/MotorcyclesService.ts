import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import ErrorMap from '../utils/ErrorMap';

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

  public async getAllMotorcycles() {
    const motorcyclesODM = new MotorcyclesODM();
    const motorcycles = await motorcyclesODM.findAllMotorcycles();
    const motorcyclesMaping = motorcycles.map((motorcycle) => this
      .createMotorcycleDomain(motorcycle));
    return motorcyclesMaping;
  }

  public async getMotorcycleById(id: string) {
    const motorcyclesODM = new MotorcyclesODM();
    const motorcycle = await motorcyclesODM.findMotorcycleById(id);
 
    if (!Motorcycle) throw new ErrorMap(404, 'Motorcycle not found');
    return this.createMotorcycleDomain(motorcycle);
  }
}