import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

export default class CarsServise {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async registerCars(data: ICar) {
    const carsODM = new CarsODM();
    const newcar = await carsODM.create(data);
    return this.createCarDomain(newcar);
  }

  public async getAllCars() {
    const carsODM = new CarsODM();
    return carsODM.findAllCars();
  }

  public async getCarById(id: string) {
    const carsODM = new CarsODM();
    return carsODM.findCarById(id);
  }
}