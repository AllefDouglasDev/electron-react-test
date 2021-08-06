import { send } from '../request';

interface User {
  id: number;
  name: string;
}

export default {
  create(name: string) {
    return send<User>('user:create', { name });
  },
  findOne(id: number) {
    return send<User>('user:findOne', id);
  },
  findAll() {
    return send<User[]>('user:findAll');
  },
};
