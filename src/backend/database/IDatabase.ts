export default interface IDatabase {
  connect(): void;
  close(): void;
  exec<T>(sql: string, ...args: any): Promise<T>;
  select<T>(sql: string, ...args: any): Promise<T>;
  // exec<T>(sql: string, ...args: any): Promise<T>;
}
