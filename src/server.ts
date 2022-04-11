import carRouter from './routes/CarRouter';
import App from './app';

const server = new App();

server.addRouter(carRouter);

export default server;
