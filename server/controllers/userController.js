const User = require('../models/userModel');
const Product = require('../models/productModel');
const Cart = require('../models/cartModel');
const Coupon = require('../models/couponModel');
const Order = require('../models/orderModel');
const uniqid = require('uniqid');


const asyncHandler = require('express-async-handler');
const generateToken = require('../config/jwtToken');
const validateMongoDBid = require('../utilities/mongoDBidValidate');
const generateRefreshToken = require('../config/refreshToken');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('./emailController');
const crypto = require('crypto');

const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email;
        const findUser = await User.findOne({ email });
        if (!findUser) {
            const newUser = await User.create(req.body);
            res.json(newUser);

        } else {
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
        const findUser = await User.findOne({ email });
        if (findUser && (await findUser.isPasswordMatched(password))) {
            //generate token
            const refreshToken = await generateRefreshToken(findUser._id);
            const updateUser = await User.findByIdAndUpdate(findUser._id, { refreshToken: refreshToken }, { new: true });
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

        } else {
            throw new Error('Invalid email or password');

        }

    }

);

// admin login
const loginAdmin = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        //check if user exists
        const findAdmin = await User.findOne({ email });
        if (findAdmin.role !== 'admin') throw new Error('You are not authorized to access this route');
        if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
            //generate token
            const refreshToken = await generateRefreshToken(findAdmin._id);
            const updateUser = await User.findByIdAndUpdate(findAdmin._id, { refreshToken: refreshToken }, { new: true });
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000, // 3 days 
                // path: '/api/v1/users/refreshToken'
            });

            res.json({
                _id: findAdmin._id,
                firstName: findAdmin.firstName,
                lastName: findAdmin.lastName,
                email: findAdmin.email,
                mobile: findAdmin.mobile,
                token: generateToken(findAdmin._id)
            });

        } else {
            throw new Error('Invalid email or password');

        }

    }

);




//update password
const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const password = req.body.password;
    validateMongoDBid(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        // res.json(updatedPassword).status(200).json({message: 'Password updated successfully'});
        res.json(updatedPassword);
    } else {
        res.json(user);


    }
});

//save user address
const saveAddress = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDBid(_id);

    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            address: req.body.address
        }, { new: true });
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
})



//get all users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find({});
        res.json(getUsers);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);

//get user by id
const getUserById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    validateMongoDBid(id);
    try {
        const getUser = await User.findById(id);
        res.json(getUser);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);

//handle refresh token
const refreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie.refreshToken) {
        res.status(403);
        throw new Error('Not authorized, no token');
    };
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.status(401);
        throw new Error('No refresh token found for this user');
    }
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user._id.toString() !== decoded.id) {
            res.status(403);
            throw new Error('Invalid refresh token');
        }
        const accessToken = generateToken(user._id);
        res.json({ accessToken });
    });

});


//update user by id
const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDBid(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
        }, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//delete user by id
const deleteUserById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    validateMongoDBid(id);
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.json(deleteUser);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);



//block user by id
const blockUserById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    validateMongoDBid(id);
    try {
        const blockUser = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
        res.json({
            message: "User blocked successfully",
            blockUser
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);

//unblock user by id
const unblockUserById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    validateMongoDBid(id);
    try {
        const unblockUser = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true });
        res.json({
            message: "User unblocked successfully",
            unblockUser
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);



//logout user

const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie.refreshToken) {
        throw new Error('No refresh token found for this user');
    };
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true,

        });
        return res.json({ message: 'User not found' });
    }
    await User.findOneAndUpdate({ refreshToken }, { refreshToken: '' });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,

    });
    return res.json({ message: 'Logout successfully' });
});


const forgottenPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found with this email");
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click Here</>`;
        const data = {
            to: email,
            text: "Hey User",
            subject: "Forgot Password Link",
            htm: resetURL,
        };
        sendEmail(data);
        res.json(token);
    } catch (error) {
        throw new Error(error);
    }
});

const resetPassword = asyncHandler(async (req, res) => {

    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) throw new Error("Token is invalid or has expired");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();
    res.json(user);


});

const getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;

    try {
        const findUser = await User.findById(_id).populate('wishlist');
        res.json(findUser);
    } catch (error) {
        throw new Error(error);
    }
});


const userCart = asyncHandler(async (req, res) => {

    const { cart } = req.body;
    const { _id } = req.user;
    validateMongoDBid(_id);

    try {
        let products = [];
        const user = await User.findById(_id);
        //check if user alrdy have products in cart
        const cartExist = await Cart.findOne({ orderby: user._id });
        if (cartExist) {
            cartExist.remove();
        }
        for (let i = 0; i < cart.length; i++) {
            let object = {};
            object.product = cart[i]._id;
            object.count = cart[i].count;
            object.color = cart[i].color;
            let getPrice = await Product.findById(cart[i]._id).select('price').exec();
            object.price = getPrice.price;
            products.push(object);
        }
        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count;
        }
        let newCart = await new Cart({
            products,
            cartTotal,
            orderby: user._id
        }).save();
        res.json(newCart);
    } catch (error) {
        throw new Error(error);
    }

});

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDBid(_id);
    try {
        const cart = await Cart.findOne({ orderby: _id }).populate('products.product');
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDBid(_id);
    try {
        const user = await User.findOne({ _id });
        const cart = await Cart.findOneAndDelete({ orderby: user._id });
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});


const applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body;
    const { _id } = req.user;
    validateMongoDBid(_id);
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (validCoupon === null) {
        throw new Error('Invalid coupon');
    }
    const user = await User.findOne({ _id });
    let { products, cartTotal } = await Cart.findOne({ orderby: user._id }).populate('products.product');
    let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2);
    await Cart.findOneAndUpdate({ orderby: user._id }, { totalAfterDiscount }, { new: true });
    res.json(totalAfterDiscount);
});

const createOrder = asyncHandler(async (req, res) => {
    const { COD, couponApplied } = req.body;
    const { _id } = req.user;
    validateMongoDBid(_id);
    try {
        if (!COD) throw new Error('create order failed');
        const user = await User.findById(_id);
        let userCart = await Cart.findOne({ orderby: user._id });
        let finalAmount = 0;
        if (couponApplied && userCart.totalAfterDiscount) {
            finalAmount = userCart.totalAfterDiscount;
        }
        else {
            finalAmount = userCart.cartTotal;
        }
        let newOrder = await new Order({
            products: userCart.products,
            paymentIntent: {
                id: uniqid(),
                method: "COD",
                amount: finalAmount,
                status: 'Cash On Delivery',
                created: Date.now(),
                currency: 'usd',
            },
            orderStatus: 'Cash on Delivery',
            orderby: user._id
        }).save();
        let update = userCart.products.map((item) => {
            return {
                updateOne: {
                    filter: { _id: item.product._id },
                    update: { $inc: { quantity: -item.count, sold: +item.count } }
                }
            };
        });
        const updated = await Product.bulkWrite(update, {});
        res.json({ message: 'Order created successfully' });
    } catch (error) {
        throw new Error(error);
    }
});


const getOrders = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDBid(_id);
    try {
        const orders = await Order.find({ orderby: _id }).populate('products.product').populate('orderby').exec();
        res.json(orders);
    } catch (error) {
        throw new Error(error);
    }
}
);


const updateOrderStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    validateMongoDBid(id)
    
    try {
        const updateOrderStatus = await Order.findByIdAndUpdate(id,
            {
                orderStatus: status,
                paymentIntent: {
                    status: status,
                },
            },
            {
                new: true
            }
        );
        res.json(updateOrderStatus);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUserById,
    blockUserById,
    unblockUserById,
    refreshToken,
    logout,
    updatePassword,
    forgottenPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus

};