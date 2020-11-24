import { Router } from 'express';
import UserController from './app/controllers/UserController';
import PostController from './app/controllers/PostController';
import multer from 'multer';
import multerConfig from './config/multer';
import MidiaController from './app/controllers/MidiaController';
import SessionController from './app/controllers/SessionController';
import auth from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

//user
routes.post('/user', UserController.store);
routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.put('/user/', auth, UserController.update);
routes.delete('/user/:id', UserController.destroy);

//Post
routes.post('/post', PostController.store);
routes.get('/post', PostController.index);
routes.get('/post/:id', PostController.show);
routes.put('/post/:id', PostController.update);
routes.delete('/post/:id', PostController.destroy);

//Midia
routes.post('/midia', upload.single('file'), MidiaController.store);

//Session
routes.post('/session', SessionController.store);

export default routes;