interface IVehicle {
  id?: string,
  model: string,
  year: number,
  color: string,
  status: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number,
  category: string,
  engineCapacity: number,
}

export default IVehicle;
