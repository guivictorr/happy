import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const orphanagesController = new OrphanagesController();

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), orphanagesController.create);
routes.get('/orphanages/:id', orphanagesController.show);
routes.get('/orphanages', orphanagesController.index);

export default routes;
