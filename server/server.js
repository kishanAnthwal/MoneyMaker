const express = require('express');
//const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin:["https://frontend-nu-flame-31.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));

app.get("/", (req, res) => {
    res.send("Welcome to the IPL 2025 Market API!");
});
app.use('/api/auth', require('./routes/auth'));
app.use('/api/clicked-data', require('./routes/clickedData'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
