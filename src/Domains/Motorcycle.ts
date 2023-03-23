import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  private id?: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean;
  private buyValue: number;
  private category: string;
  private engineCapacity: number;
  constructor(motorcycles: IMotorcycle) {
    this.id = motorcycles.id;
    this.model = motorcycles.model;
    this.year = motorcycles.year;
    this.color = motorcycles.color;
    this.status = motorcycles.status;
    this.buyValue = motorcycles.buyValue;
    this.category = motorcycles.category;
    this.engineCapacity = motorcycles.engineCapacity;
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

  public setCategory(category: string) {
    this.category = category;
  }
  
  public getCategoryy() { 
    return this.category;
  }

  public setSeatsQty(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
  
  public getSeatsQty() { 
    return this.engineCapacity;
  }
}

export default Motorcycle;