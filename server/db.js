import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

pool = new Pool({
  connectionString:
    "postgres://default:x73lfIXKqAGP@ep-wild-bird-a1u08ugn-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

module.exports = pool;
