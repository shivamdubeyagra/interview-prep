const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
connectDB();
app.listen(PORT, () => {

    console.log(`Server started on port ${PORT}`);
});
    