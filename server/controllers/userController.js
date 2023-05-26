import User from "../model/userSchema.js";
export async function userSignUp(req, res) {
  try {
    const exist = await User.findOne({ userName: req.body.userName });
    if (exist) {
      return res.status(401).json({
        message: "Username already exist",
      });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({
      message: user,
    });
    // console.log(req.body);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}
