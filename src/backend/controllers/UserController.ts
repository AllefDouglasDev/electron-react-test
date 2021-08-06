import IUserRepository from '../repositories/interfaces/IUserRepository';

interface User {
  id: number;
  name: string;
}

export default class UserController {
  constructor(private userRepository: IUserRepository) {}

  create = async (user: User) => {
    const newUser = await this.userRepository.create(user);
    return newUser;
  };

  findOne = async (id: number) => {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  };

  findAll = async () => {
    const users = await this.userRepository.findAll();
    return users;
  };
}
