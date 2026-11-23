declare module "pg" {
  export interface PoolConfig {
    connectionString?: string;
    ssl?: boolean | { rejectUnauthorized?: boolean };
    max?: number;
    idleTimeoutMillis?: number;
    connectionTimeoutMillis?: number;
  }

  export interface QueryResult<T = any> {
    rows: T[];
    rowCount?: number;
    command: string;
  }

  export class Pool {
    constructor(config?: PoolConfig);
    query<T = any>(queryText: string, values?: any[]): Promise<QueryResult<T>>;
    end(): Promise<void>;
  }
}
