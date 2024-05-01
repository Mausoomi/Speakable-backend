const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
  Notification_body: {
    type: String,
    required: true,
  },
  UserType: {
    type: String,
    required: true,
  },
  userid: [{
    type:mongoose.Types.ObjectId,
    ref:["student","admin","user","teacher"],
  }]

});

const notifications = mongoose.model('notifications', notificationSchema);
module.exports = notifications;
