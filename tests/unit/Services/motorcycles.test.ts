import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Deve verificar a camada Services de motorcycle', function () {
  const allMotorcycles = [
    {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    },
    {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.900,
      category: 'Street',
      engineCapacity: 1000,
    },
  ];

  let service: MotorcyclesService;

  beforeEach(function () {
    service = new MotorcyclesService();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Deve buscar todos motorcycles, com SUCESSO', async function () {
    const motorcyclesOutput = await allMotorcycles
      .map((motorcycle) => new Motorcycle(motorcycle as IMotorcycle));

    sinon.stub(Model, 'find').resolves(motorcyclesOutput);

    const result = await service.getAllMotorcycles();

    expect(result).to.be.deep.equal(motorcyclesOutput);
  });

  it('Deve buscar motorcycle pelo o id, com SUCESSO', async function () {
    const motorcyclesOutput: Motorcycle = new Motorcycle(
      {
        id: '634852326b35b59438fbea30',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    );   
    sinon.stub(Model, 'findById').resolves(motorcyclesOutput);

    const result = await service.getMotorcycleById('634852326b35b59438fbea31');

    expect(result).to.be.deep.equal(motorcyclesOutput);
  });

  it(
    'Se o id passado não corresponder a um Motorcycle, retornar um Erro: "Motorcycle not found"',
    async function () {
      sinon.stub(Model, 'findById').resolves([]);
      try {
        await service.getMotorcycleById('634852326b35b59438fbea2f');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    },
  );
});