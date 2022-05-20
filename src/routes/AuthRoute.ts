import express from 'express';
import { SignInRequest } from '../requests/SignInRequest';
import RequestValidator from '../middlewares/RequestValidator';
import { SignUpRequest } from '../requests/SignUpRequest';
import { Container } from 'typedi';
import AuthController from '../controllers/AuthController';

const router = express.Router();

/**
 * We are using TypeDI to get the UserService instance from our dependency container
 * More info: https://www.mohammadfaisal.dev/blog/dependency-injection-in-nodejs
 */
const authController = Container.get(AuthController);

router.post('/sign-up', RequestValidator.validate(SignUpRequest), authController.signUp);
router.post('/sign-in', RequestValidator.validate(SignInRequest), authController.signIn);
router.get('/users', authController.getAllUsers);

export default router;
