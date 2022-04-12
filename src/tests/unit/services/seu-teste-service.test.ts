import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import CarService from '../../../services/CarService'
// import CarModel from '../../../models/CarModel'
import { carRes, carReq } from '../Mocks/CarMocks'

chai.use(chaiHttp);

const { expect } = chai;

describe('CarModel', () => {
  let carService = new CarService();
  describe('#Create', () => {
    before(async () => {
      sinon
        .stub(carService.model, 'create')
        .resolves(carRes);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('retorna o carro criado', async () => {
      const carCreated = await carService.create(carReq);
      expect(carCreated).to.be.deep.equal(carRes);
    });
  })
});