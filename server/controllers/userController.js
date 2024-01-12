const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../config/jwtToken');


const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email;
        const findUser = await User.findOne({email});
        if(!findUser){
            const newUser = await User.create(req.body);
            res.json(newUser);
           
        }else{
            res.status(400);
            throw new Error('User already exists');
        }
        
    }
);


//login user 
const loginUser = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        

        //check if user exists
        const findUser = await User.findOne({email});
        if(findUser && (await findUser.isPasswordMatched(password))){
            res.json({
                _id: findUser._id,
                firstName: findUser.firstName,
                lastName: findUser.lastName,
                email: findUser.email,
                mobile: findUser.mobile,
                token: generateToken(findUser._id)
            });

        }else{
            throw new Error('Invalid email or password');
            
        }

    }

);

//get all users
const getAllUsers = asyncHandler(async (req, res) => {
        try{
            const getUsers = await User.find({});
            res.json(getUsers);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
);

//get user by id
const getUserById = asyncHandler(async (req, res) => {
        try{
            const getUser = await User.findById(req.params.id);
            res.json(getUser);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
);

//update user by id
const updateUser = asyncHandler(async (req, res) => {
    const {_id} = req.user;
    try{
        const updatedUser = await User.findByIdAndUpdate(_id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
        }, {new: true});
        res.json(updatedUser);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});




//delete user by id
const deleteUserById = asyncHandler(async (req, res) => {
        try{
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            res.json(deleteUser);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
);

//block user by id
const blockUserById = asyncHandler(async (req, res) => {
        try{
            const blockUser = await User.findByIdAndUpdate(req.params.id, {isBlocked: true}, {new: true});
            res.json({
                message: "User blocked successfully",
                blockUser
            });
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
);

//unblock user by id
const unblockUserById = asyncHandler(async (req, res) => {
        try{
            const unblockUser = await User.findByIdAndUpdate(req.params.id, {isBlocked: false}, {new: true});
            res.json({
                message: "User unblocked successfully",
                unblockUser
            });
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
);








module.exports = { createUser, loginUser, getAllUsers, getUserById, updateUser, deleteUserById, blockUserById, unblockUserById};