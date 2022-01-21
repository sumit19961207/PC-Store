var UserModel = require("../models/user");
const hashPassword = require("../utils/user")




let registerUser = async(req, res) => {
   try {
      console.log("Hello world")
      const { name, email, password } = req.body;

      if (!name) {
         return res.status(400).send("Name is required");
      }
      if (!password || password.length > 6) {
         return res.status(400).send("Password should be required and should be min 6 character long");
      }
      let userExit = await User.findOne({ email }).exec();
      if (userExit) {
         return res.status(400).send("Email has taken")
      }
      const hashedPassword = await hashPassword(password);
      const user = new UserModel({
         name,
         email,
         password: hashedPassword
      });
      await user.save();
      return res.json({ ok: true });
   } catch(err){
      console.log(err);
      return res.status(400).send("error, try again");
   }
}

module.exports = { registerUser };