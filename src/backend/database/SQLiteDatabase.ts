import path from 'path';
import sqlite from 'sqlite3';
import IDatabase from './IDatabase';

export default class SQLiteDatabase implements IDatabase {
  private db: sqlite.Database | null;

  constructor() {
    this.db = null;
  }

  connect = () => {
    const filename = path.join(
      process.cwd(),
      'src',
      'backend',
      'database',
      'database.sqlite'
    );

    this.db = new sqlite.Database(filename);
    sqlite.verbose();
  };

  close = () => {
    this.db?.close();
  };

  exec = <T>(sql: string, args?: any): Promise<T> => {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not found'));
        return;
      }

      this.db.run(sql, args, (error: Error, row: any) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(row);
      });
    });
  };

  select = <T>(sql: string, args?: any): Promise<T> => {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not found'));
        return;
      }

      this.db.all(sql, args, (error: Error, rows: any) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(rows);
      });
    });
  };
}
