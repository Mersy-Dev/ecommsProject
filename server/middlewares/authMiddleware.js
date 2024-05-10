const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');



// const authMiddleware = asyncHandler(async (req, res, next) => {
//     let token;
//     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
//         try{
//             token = req.headers.authorization.split(" ")[1];
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             const user = await User.findById(decoded.id).select('-password');
//             req.user = user;
//             next();
//         }catch(error){
//             console.error(error);
//             res.status(401);
//             throw new Error('Not authorized, token failed');
//         }
//     }
//     if(!token){
//         res.status(401);
//         throw new Error('Not authorized, no token');
//     }
// });

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1];
            console.log('Received Token:', token); // Log the received token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Decoded Token:', decoded); // Log the decoded token
            const user = await User.findById(decoded.id).select('-password');
            if (!user) {
                throw new Error('User not found');
            }
            req.user = user;
            next();
        } catch (error) {
            console.error(error);
            res.status(401).send('Not authorized, token failed');
        }
    } else {
        res.status(401).send('Not authorized, no token');
    }
});


//is admin
const isAdmin = asyncHandler(async (req, res, next) => {
    const {email} = req.user;
    const adminUser = await User.findOne({email});
    if(adminUser.role !== 'admin'){
        res.status(401);
        throw new Error('Not authorized as an admin');
    }else{
        next();
    }
});




module.exports = { authMiddleware, isAdmin } ;

