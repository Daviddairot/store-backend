const authScheme = require('../models/auth');
const bcrypt = require('bcrypt');
const emailVerify = require('../controllers/authEmail');
const User = require('../models/auth');

const createUser = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    const saltRounds = 12;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Check if the email already exists using the email verification function
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user instance
    const user = new User({ username, password: hashedPassword, email, role });

    // Save the user to the database
    await user.save();

    // Send a success response
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { createUser };
