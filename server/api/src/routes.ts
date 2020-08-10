import express from 'express'
import { connection } from './database/connection'
import converterHourToMinutes from './utils/ConverterTime'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

export const routes = express.Router();
const classesController = new ClassesController();
const connectionController = new ConnectionsController();

routes.post('/class', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connection', connectionController.create);
routes.get('/connections', connectionController.index);




