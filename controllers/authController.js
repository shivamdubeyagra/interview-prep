const userModel = require("../models/user");
const { hashPassword,comparePassword,jwtSign } = require("../utils/common");

const register = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new userModel({name,email,password:hashedPassword});
        await newUser.save();
        const token = await jwtSign(newUser._id);
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"strict",
            maxAge:24*60*60*1000
        });
        res.status(201).json({message:"User created successfully",user:newUser,token});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const login = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }
        const isPasswordMatched = await comparePassword(password,user.password);
        if(!isPasswordMatched){
            return res.status(400).json({message:"Invalid password"});
        }
        const token = await jwtSign(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"strict",
            maxAge:24*60*60*1000
        });
        res.status(200).json({message:"User logged in successfully",user,token});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports = {
    register,
    login
}