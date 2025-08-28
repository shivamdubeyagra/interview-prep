const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
connectDB();
app.use("/api/auth",authRoutes);
app.listen(PORT, () => {

    console.log(`Server started on port ${PORT}`);
});
    