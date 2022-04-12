import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import CarModel from '../../../models/CarModel'
import { carRes, carReq } from '../Mocks/CarMocks'

chai.use(chaiHttp);

const { expect } = chai;

describe('CarModel', () => {
  let carModel = new CarModel();
  describe('#Create', () => {
    before(async () => {
      sinon
        .stub(carModel.model, 'create')
        .resolves(carRes);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('retorna o carro criado', async () => {
      const carCreated = await carModel.create(carReq);
      expect(carCreated).to.be.deep.equal(carRes);
    });
  })
});