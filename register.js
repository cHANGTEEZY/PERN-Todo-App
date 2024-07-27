import express from "express";
import bcrypt from "bcrypt";
import { pool } from "./db.js";

const router = express.Router();

// Register User
router.post("/", async (req, res) => {
  const { user_name, email, password } = req.body;
  console.log("Received data:", req.body);

  if (!user_name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if user already exists
    const userCheck = await pool.query(
      "SELECT * FROM user_detail WHERE user_name = $1 OR email = $2",
      [user_name, email]
    );

    if (userCheck.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "User with same username or email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const newUser = await pool.query(
      "INSERT INTO user_detail (user_name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [user_name, email, hashedPassword]
    );

    res.status(201).json({ success: true, user: newUser.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
