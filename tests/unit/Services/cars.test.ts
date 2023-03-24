import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

describe('Deve verificar a camada Services de car', function () {
  const allCars = [
    {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    },
    {
      id: '634852326b35b59438fbea31',
      model: 'Tempra',
      year: 1995,
      color: 'Black',
      buyValue: 39,
      doorsQty: 2,
      seatsQty: 5,
    },
  ];

  let service: CarsService;

  beforeEach(function () {
    service = new CarsService();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Deve buscar todos cars, com SUCESSO', async function () {
    const carsOutput = await allCars
      .map((car) => new Car(car as ICar));

    sinon.stub(Model, 'find').resolves(carsOutput);

    // const service = new CarsService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(carsOutput);
  });
  it('Deve buscar car pelo o id, com SUCESSO', async function () {
    const carOutput: Car = new Car(allCars[0]);
    sinon.stub(Model, 'findById').resolves(carOutput);

    // const service = new CarsService();
    const result = await service.getCarById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(carOutput);
  });

  it(
    'Se o id passado não corresponder a um car, retornar um Erro: "Car not found"',
    async function () {
      sinon.stub(Model, 'findById').resolves([]);
      try {
        await service.getCarById('634852326b35b59438fbea2f');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    },
  );
});