const express = require("express");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv");


const limiter = rateLimit({
    windowMs:1*60*1000,
    max:5,
    message:"Too many requests from this IP, please try again after 1 minutes"
})

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
connectDB();
app.use("/api/auth",limiter,authRoutes);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});