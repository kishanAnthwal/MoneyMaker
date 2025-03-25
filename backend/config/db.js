const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kishananthwal:blogPassword@blogcluster.e6f2p.mongodb.net/blogs?retryWrites=true&w=majority&appName=blogCluster');
    console.log('✅ MongoDB Connected...');
  } catch (err) {
    console.error('❌ MongoDB Connection Failed:',err.message);
    process.exit(1);
    
  }
};

module.exports = connectDB;
