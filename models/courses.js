const mongoose = require('mongoose');

const coursesSchema = mongoose.Schema({
  Course_Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Teachers_Details: [{
    type:mongoose.Types.ObjectId,
    ref:"teacher"
  }],
  Purchase_Price: {
    type: Number,
    required: true,
  },
  Course_Images:[],
});

const courses = mongoose.model('courses', coursesSchema);
module.exports = courses;
