const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const teacherSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Phone_Number: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Short_Title: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Profile_Image: [],
  Availability: [],
  SocialLinks: [
    {
      platform: {
        type: String,
        enum: ["facebook", "twitter", "instagram"], // Define the allowed social media platforms
      },
      link: {
        type: String,
      },
    },
  ],
  Courses_assign: [
    {
      type: mongoose.Types.ObjectId,
      ref: "courses",
    },
  ],
  Meetings: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Meeting",
    },
  ],
  Purchase_Price: {
    type: Number,
    required: true,
  },
  UserType: {
    type: String,
    default: "teacher",
  },
});

teacherSchema.pre("save", async function (next) {
  try {
    // Check if the password has changed
    if (!this.isModified("Password")) {
      return next(); // Skip hashing if the password hasn't changed
    }
    // Generate a salt using the specified cost factor
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND, 10));
    const hashedPassword = await bcrypt.hash(this.Password, salt);
    this.Password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Static method to compare passwords
teacherSchema.statics.comparePassword = async function (
  enteredPassword,
  storedPassword
) {
  try {
    return await bcrypt.compare(enteredPassword, storedPassword);
  } catch (error) {
    throw error;
  }
};

teacherSchema.methods.jwttoken = function () {
  try {
    const data = {
      UserType: "teacher",
    };

    const token = jwt.sign(
      { id: this._id, ...data },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    // console.log("Generated Token:", token);

    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const teacher = mongoose.model("teacher", teacherSchema);

module.exports = teacher;
