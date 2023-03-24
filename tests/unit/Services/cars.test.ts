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

  const data = {
    model: 'Tempra',
    year: 1995,
    color: 'Blue',
    buyValue: 39,
    status: true,
    doorsQty: 2,
    seatsQty: 5,
  };

  let service: CarsService;

  beforeEach(function () {
    service = new CarsService();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Deve cadastrar um car com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(allCars[0]);

    const newMotor = await service.registerCars(data);

    expect(newMotor).to.be.deep.equal(allCars[0]);
  });

  it('Deve cadastrar retornar um erro ao tentar cadastra um car', async function () {
    sinon.stub(Model, 'create').resolves(undefined);

    const newMotor = await service.registerCars(data);

    expect(newMotor).to.be.deep.equal(null);
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
      sinon.stub(Model, 'findById').resolves(undefined);
      try {
        await service.getCarById('634852326b35b59438fbea2f');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    },
  );

  it('Deve fazer o update de um car pelo o id, com SUCESSO', async function () {
    const carOutput: Car = new Car({ ...data, id: '634852326b35b59438fbea31' });
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    // const service = new CarsService();
    const result = await service.updateCar('634852326b35b59438fbea31', data);

    expect(result).to.be.deep.equal({ ...data, id: '634852326b35b59438fbea31' });
  });

  it('Deve retornar um erro ao tentar fazer o update', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(undefined);

    // const service = new MotorcyclesService();
    try {
      await service.updateCar('6', data);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });

  it('Deve retornar um erro ao tentar fazer o update: "Motorcycle not found"', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(undefined);

    // const service = new MotorcyclesService();
    try {
      await service.updateCar('634852326b35b59438fbea31', data);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Car not found');
    }
  });
});