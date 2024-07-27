import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const devConfig = {
  user: process.env.PG_USER,
  password: String(process.env.PG_PASSWORD), // Explicitly convert to string
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const prodConfig = {
  connectionString: process.env.DATABASE_URL, // Ensure this environment variable is correctly set
};

export const pool = new pg.Pool(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);
