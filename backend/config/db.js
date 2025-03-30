const mongoose = require('mongoose');

const connectDB = async () => {
  try {
   const conn = await mongoose.connect("mongodb+srv://kishananthwal:blogPassword@blogcluster.e6f2p.mongodb.net/?retryWrites=true&w=majority&appName=blogCluster");
   if(conn){
    console.log('✅ MongoDB Connected...')
   }
  } catch (err) {
    console.error('❌ MongoDB Connection Failed:',err.message);
    process.exit(1);
    
  }
};

module.exports = connectDB;
