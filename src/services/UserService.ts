import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import UserRepository from '../repositories/UserRepository';
import { LoggerClient } from './LoggerClient';
import { User } from '../models/User';

@Service()
export default class UserService {
  /**
   * @param logger
   * We are injecting the logger here.
   * Use this -> this.logger.info('some log')
   */
  constructor(public userRepository: UserRepository, public logger: LoggerClient) {}

  signUp = async (email: string, name: string, password: string) => {
    const result = this.userRepository.createUser(name, email, password);
    return result;
  };

  signIn = async (email: string, password: string) => {
    this.logger.info(`Email of the registered user is ${email}`);
    const userWithEmail: User | null = await this.userRepository.findByEmail(email);
    if (!userWithEmail) {
      throw new ApplicationError('No User found with this email');
    }
    if (userWithEmail.password.toString() !== password) {
      throw new ApplicationError('Password did not match');
    }
    return 'Successfully Signed IN';
  };

  getAllUsers = async () => {
    return await this.userRepository.getAllUsers();
  };
}
