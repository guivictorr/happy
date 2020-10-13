import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const orphanagesController = new OrphanagesController();

const routes = Router();

routes.post('/orphanages', orphanagesController.create);
routes.get('/orphanages/:id', orphanagesController.show);
routes.get('/orphanages', orphanagesController.index);

export default routes;
