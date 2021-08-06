import IDatabase from './IDatabase';

function createUserTable(db: IDatabase) {
  return db.exec(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      name varchar(255) NOT NULL
    )`
  );
}

export default async function runMigrations(db: IDatabase) {
  await Promise.all([createUserTable(db)]);
}
