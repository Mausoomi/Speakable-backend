const mongoose = require('mongoose');

const enquiryStudentSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone_Number: {
    type: Number,
    // required: true,
  },
  Who_Will_Study: {
    type: String,
    // required: true,
  },
  What_Is_Your_Learning_Experience: {
    type: String,
    // required: true,
  },
  Who_Do_You_Want_To_Study_With: {
    type: String,
    // required: true,
  },
  Message:{
    type: String,
    // required: true,
  },
  Student_ID:[{
    type:mongoose.Types.ObjectId,
    ref:"student"
  }]
});

const Enquiry_Student = mongoose.model('Enquiry_Student', enquiryStudentSchema);
module.exports = Enquiry_Student;
