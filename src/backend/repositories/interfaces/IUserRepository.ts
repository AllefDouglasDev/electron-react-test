import { User } from '../../models/User';

export default interface IUserRepository {
  create(user: User): Promise<User>;
  findOne(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
}
