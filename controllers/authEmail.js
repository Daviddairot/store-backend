
// const User = require('../models/auth');


// export const emailVerification = async (req, res) => {
//     try {
//       const { email } = req.body;
  
//       // Assuming you have a User model
//       const emailVerify = await User.findOne({ email: email });
  
//       if (!emailVerify) {
//         return res.status(404).json({ message: "Email not found" });
//       }
  
//       // Respond with the found email data
//       res.json({ emailVerify: emailVerify });
//     } catch (error) {
//       // Error handling
//       console.error(error);
//       res.status(500).json({ message: "Server error" });
//     }
//   };
// export default emailVerification;