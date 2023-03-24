import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;
  constructor(motorcycles: IMotorcycle) {
    super({
      id: motorcycles.id || undefined,
      model: motorcycles.model,
      year: motorcycles.year,
      color: motorcycles.color,
      status: motorcycles.status || false,
      buyValue: motorcycles.buyValue,
    });
    this.category = motorcycles.category;
    this.engineCapacity = motorcycles.engineCapacity;
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