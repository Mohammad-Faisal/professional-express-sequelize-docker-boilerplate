import { User } from '../models/User';
import { Service } from 'typedi';
@Service()
export default class UserRepository {
  createUser = async (name: string, email: string, password: string): Promise<User> => {
    const user = User.build({ name, email, password });
    return await user.save();
  };

  findByEmail = async (email: string): Promise<User | null> => {
    return await User.findOne({ where: { name: email } });
  };

  getAllUsers = async (): Promise<User[]> => {
    return await User.findAll();
  };
}
