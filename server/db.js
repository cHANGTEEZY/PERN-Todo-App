import pg from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Development config for local PostgreSQL connection
const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

// Production config for Supabase connection
const prodConfig = {
  connectionString: process.env.DATABASE_URL, // Ensure the connection string is in your .env
  ssl: {
    rejectUnauthorized: false, // Required for most cloud-hosted databases
  },
};

// Choose config based on environment
export const pool = new pg.Pool(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log(result.rows);
  });
});
