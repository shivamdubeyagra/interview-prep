const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw error;
    }
};

const comparePassword = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        throw error;
    }
};

const jwtSign = async (user) => {
    try {
        return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "1d" });
    } catch (error) {
        throw error;
    }
};

const jwtVerify = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    hashPassword,
    comparePassword,
    jwtSign,
    jwtVerify,
};
