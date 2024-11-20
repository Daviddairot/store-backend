const jwt = require('jsonwebtoken');

// Function to generate a token
export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION || '1h', // Token expires in 1 hour by default
  });
};

