const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  Note_for_teacher: {
    type: String,
    // required: true,
  },
  Student_ID: {
    type: mongoose.Types.ObjectId,
    ref: "student",
  },
  Package_ID: {
    type: mongoose.Types.ObjectId,
    ref: "Package",
  },
  Teacher_ID: [{
    type: mongoose.Types.ObjectId,
    ref: "teacher",
  }],
  Status: {
    type: String,
    require: true,
  },
  Scheduled_Dates: [],
  Time_Slot:[]
});

const bookings = mongoose.model("bookings", bookingSchema);
module.exports = bookings;
