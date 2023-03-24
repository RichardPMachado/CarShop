import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';
import ErrorMap from '../utils/ErrorMap';

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
    const cars = await carsODM.findAllVehicles();
    const carsMaping = cars.map((car) => this.createCarDomain(car));
    return carsMaping;
  }

  public async getCarById(id: string) {
    const carsODM = new CarsODM();
    const car = await carsODM.findVehicleById(id);
    if (!car) throw new ErrorMap(404, 'Car not found');
    return this.createCarDomain(car);
  }

  public async updateCar(id: string, obj: ICar) {
    const carsODM = new CarsODM();
    const newCar = await carsODM.update(id, obj);
    if (!newCar) throw new ErrorMap(404, 'Car not found');
    return this.createCarDomain(newCar);
  }
}