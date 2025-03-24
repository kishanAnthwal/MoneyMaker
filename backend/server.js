const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');


connectDB();

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.json());

// app.use(cors(
 //   {
    //    origin:["https://frontend-nu-flame-31.vercel.app"],
     //   methods:["POST","GET"],
      //  credentials:true
   // }
//));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

const path = require("path");
app.use(express.static(path.join(__dirname, "client", "dist")));




app.use('/api/auth', require('./routes/auth'));
app.use('/api/clicked-data', require('./routes/clickedData'));



app.get("/", (req, res) => {
    res.send("Welcome to the IPL API!");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT =6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
