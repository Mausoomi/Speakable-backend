const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/Speakable_English");
mongoose.connect("mongodb+srv://SpeakableEnglish:UNU7mle2x5LlDgJg@serverlessinstance0.pgpouhv.mongodb.net/")

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;