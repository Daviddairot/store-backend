const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating tokens
const User = require('../models/auth'); // Adjust the path to your User model

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a token (you should replace 'your-secret-key' with a proper secret key)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your-secret-key', {
      expiresIn: '1h', // Token expiration time
    });

    // Return the user and token
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred during login" });
  }
};

module.exports = { loginUser };
