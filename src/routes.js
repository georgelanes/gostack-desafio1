import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';

const routes = new Router();

routes.get('/', async (req, res) => {
  return res.json({ message: 'Ok' });
});

routes.post('/projects', ProjectController.store);

export default routes;
