// import * as sinon from 'sinon';
// import chai from 'chai';
// import chaiHttp = require('chai-http');

// import CarsController from '../../../controllers/CarsController'
// import { carRes, carReq } from '../Mocks/CarMocks'

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('CarsController', () => {
//   let carsController = new CarsController();
//   describe('#Create', () => {
//     before(async () => {
//       sinon
//         .stub(carsController, 'create')
//         .resolves(carRes);
//     });
  
//     after(()=>{
//       sinon.restore();
//     })
  
//     it('retorna o carro criado', async () => {
//       const carCreated = await carsController.create(carReq);
//       expect(carCreated).to.be.deep.equal(carRes);
//     });
//   })
// });