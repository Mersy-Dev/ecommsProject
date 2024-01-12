const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../config/jwtToken');
const validateMongoDBid = require('../utilities/mongoDBidValidate');
const generateRefreshToken = require('../config/refreshToken');
const jwt = require('jsonwebtoken');


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
            //generate token
            const refreshToken = await generateRefreshToken(findUser._id);
            const updateUser = await User.findByIdAndUpdate(findUser._id, {refreshToken: refreshToken}, {new: true});
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000, // 3 days 
                // path: '/api/v1/users/refreshToken'
            });

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
        const id = req.params.id;
        validateMongoDBid(id);
        try{   
            const getUser = await User.findById(id);
            res.json(getUser);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
);

//handle refresh token
const refreshToken = asyncHandler(async (req, res) => {
   const cookie = req.cookies;
   if(!cookie.refreshToken){
       res.status(403);
       throw new Error('Not authorized, no token');
   };
   const refreshToken = cookie.refreshToken;
   const user = await User.findOne({refreshToken});
    if(!user){
        res.status(401);
        throw new Error('No refresh token found for this user');
    }
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if(err || user._id.toString() !== decoded.id){
            res.status(403);
            throw new Error('Invalid refresh token');
        }
        const accessToken = generateToken(user._id);
        res.json({accessToken});
    });

});


//update user by id
const updateUser = asyncHandler(async (req, res) => {
    const {_id} = req.user;
    validateMongoDBid(_id);
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
        const id = req.params.id;
        validateMongoDBid(id);
        try{
            const deleteUser = await User.findByIdAndDelete(id);
            res.json(deleteUser);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    }
);

//block user by id
const blockUserById = asyncHandler(async (req, res) => {
        const id = req.params.id;
        validateMongoDBid(id);
        try{
            const blockUser = await User.findByIdAndUpdate(id, {isBlocked: true}, {new: true});
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
        const id = req.params.id;
        validateMongoDBid(id);
        try{
            const unblockUser = await User.findByIdAndUpdate(id, {isBlocked: false}, {new: true});
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



//logout user

const logout =  asyncHandler(async (req, res) => {
   const cookie = req.cookies;  
   if(!cookie.refreshToken){
       throw new Error('No refresh token found for this user');
   };
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken});
    if(!user){
        res.clearCookie('refreshToken',{
            httpOnly: true,
            secure: true,
        
        });
        return res.json({message: 'User not found'});
    }
    await User.findOneAndUpdate({refreshToken}, {refreshToken: ''});
    res.clearCookie('refreshToken',{
        httpOnly: true,
        secure: true,
    
    });
    return res.json({message: 'Logout successfully'});
});






module.exports = { createUser,
     loginUser,
     getAllUsers,
     getUserById,
     updateUser,
    deleteUserById,
    blockUserById,
    unblockUserById,
    refreshToken,
    logout

};