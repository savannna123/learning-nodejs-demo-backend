import { Pool } from "pg";

export const pool = new Pool({
  host: 'localhost',
  user: 'me',
  password: 'password',
  database: 'demo',
  port: 5432
});

