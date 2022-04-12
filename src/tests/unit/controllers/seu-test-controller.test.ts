// import * as sinon from 'sinon';
// import chai from 'chai';
// import chaiHttp = require('chai-http');

// import CarController from '../../../controllers/CarsController'
// // import CarModel from '../../../models/CarModel'
// import { carRes, carReq } from '../Mocks/CarMocks'
// import { Car } from '../../../interfaces/CarInterface';

// chai.use(chaiHttp);

// const { expect } = chai;

// interface RequestWithBody<Car> extends Request {
//   body: Car,
// }

// export type ResponseError = {
//   error: unknown;
// };

// describe('CarModel', () => {
//   let carController = new CarController();
//   describe('#Create', () => {
//     before(async () => {
//       sinon
//         .stub(carController.service, 'create')
//         .resolves(carRes);
//     });
  
//     after(()=>{
//       sinon.restore();
//     })
  
//     it('retorna o carro criado', async () => {
//       const req: RequestWithBody<Car> = carReq
//       const carCreated = await carController.create(req, res);
//       expect(carCreated).to.be.deep.equal(carRes);
//     });
//   })
// });

// fazendo testes

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