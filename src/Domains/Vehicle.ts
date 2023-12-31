import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  constructor(car: IVehicle) {
    this.id = car.id || undefined;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() { 
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }
  
  public getYear() { 
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }
  
  public getColor() { 
    return this.color;
  }
 
  public setStatus(status: boolean) {
    this.status = status;
  }
  
  public getStatus() { 
    return this.status;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }
  
  public getBuyValue() { 
    return this.buyValue;
  }
}
