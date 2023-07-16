
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abdul9909:uqt7z3a1TKvwskaC@cluster0.pywsd7r.mongodb.net/assessment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
  });
  
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose connection closed due to application termination');
      process.exit(0);
    });
  });