import runMigrations from './database/migrations';
import SQLiteDatabase from './database/SQLiteDatabase';
import UserHandler from './handlers/UserHandler';

export default async function startup() {
  const database = new SQLiteDatabase();

  database.connect();

  await runMigrations(database);

  new UserHandler().run(database);

  return function exit() {
    database.close();
  };
}
