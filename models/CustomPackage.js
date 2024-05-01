const mongoose = require("mongoose");

const CutsomPackageSchema = mongoose.Schema({
  Student_ID: {
    type: mongoose.Types.ObjectId,
    ref: "student",
  },
  Package_ID: {
    type: mongoose.Types.ObjectId,
    ref: "Package",
  },
  Scheduled_Dates: [],
});

const CutsomPackage = mongoose.model("CutsomPackage", CutsomPackageSchema);
module.exports = CutsomPackage;
