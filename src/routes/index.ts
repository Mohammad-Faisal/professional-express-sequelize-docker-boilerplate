import express from 'express';
import authRoute from './AuthRoute';

const router = express.Router();

const allRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
