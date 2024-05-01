const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const adminSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Email:{
    type:String,
    required:true,
  },
  Password: {
    type: String,
    required: true,
  },
  UserType:{
    type:String,
    default:'admin'
  }
});

adminSchema.pre('save', async function (next) {
  try {
    // Check if the password has changed
    if (!this.isModified('Password')) {
      return next(); // Skip hashing if the password hasn't changed
    }
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND, 10));
    const hashedPassword = await bcrypt.hash(this.Password, salt);
    this.Password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

adminSchema.statics.comparePassword = async function (enteredPassword, storedPassword) {
  try {
    return await bcrypt.compare(enteredPassword, storedPassword);
  } catch (error) {
    throw error;
  }
};

adminSchema.methods.jwttoken = function(){
  try {
    const data = {
      UserType: "admin",
    };
    const token = jwt.sign({ id: this._id, ...data }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;
