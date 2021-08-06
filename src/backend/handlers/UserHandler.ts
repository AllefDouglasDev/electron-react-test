import Handler from './Handler';
import UserController from '../controllers/UserController';
import UserRepository from '../repositories/UserRepository';
import IDatabase from '../database/IDatabase';

export default class UserHandler extends Handler {
  constructor() {
    super('user');
  }

  run = (database: IDatabase) => {
    const userRepository = new UserRepository(database);
    const userController = new UserController(userRepository);

    this.on('create', userController.create);
    this.on('findOne', userController.findOne);
    this.on('findAll', userController.findAll);
  };
}
