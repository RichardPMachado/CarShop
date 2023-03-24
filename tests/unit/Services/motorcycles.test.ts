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

  const data = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };

  let service: MotorcyclesService;

  beforeEach(function () {
    service = new MotorcyclesService();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('cadastra uma motorcycle com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(allMotorcycles[0]);

    const newMotor = await service.registerMotorcycles(data);

    expect(newMotor).to.be.deep.equal(allMotorcycles[0]);
  });

  it('Deve cadastrar retornar um erro ao tentar cadastra um motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(undefined);

    const newMotor = await service.registerMotorcycles(data);

    expect(newMotor).to.be.deep.equal(null);
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

  it('Deve fazer o update de um motorcycle pelo o id, com SUCESSO', async function () {
    const motorcycleOutput = new Motorcycle(
      { ...data, id: '634852326b35b59438fbea31' },
    );
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

    // const service = new MotorcyclesService();
    const result = await service.updateMotorcycle('634852326b35b59438fbea31', data);

    expect(result).to.be.deep.equal({ ...data, id: '634852326b35b59438fbea31' });
  });

  it('Deve retornar um erro ao tentar fazer o update', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(undefined);

    // const service = new MotorcyclesService();
    try {
      await service.updateMotorcycle('6', data);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });

  it('Deve retornar um erro ao tentar fazer o update: "Motorcycle not found"', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(undefined);

    // const service = new MotorcyclesService();
    try {
      await service.updateMotorcycle('634852326b35b59438fbea31', data);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Motorcycle not found');
    }
  });
});