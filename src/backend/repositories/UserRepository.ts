import IDatabase from '../database/IDatabase';
import { User } from '../models/User';
import IUserRepository from './interfaces/IUserRepository';

export default class UserRepository implements IUserRepository {
  constructor(private database: IDatabase) {}

  create = async (user: User): Promise<User> => {
    await this.database.exec<User>('INSERT INTO users (name) VALUES (?)', [
      user.name,
    ]);

    return user;
  };

  findOne = async (id: number): Promise<User | null> => {
    const result = await this.database.select<User[]>(
      'SELECT * FROM users WHERE id = ?',
      [id]
    );

    return result.length > 0 ? result[0] : null;
  };

  findAll = async (): Promise<User[]> => {
    const result = await this.database.select<User[]>(
      'SELECT * FROM users',
      []
    );

    return result;
  };
}
