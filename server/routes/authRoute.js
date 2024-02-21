const express = require('express');
const router = express.Router();

const { createUser,
        loginUser,
        getAllUsers, 
        getUserById, 
        deleteUserById, 
        updateUser, 
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
        updateOrderStatus} = require('../controllers/userController');
const { authMiddleware, isAdmin,  } = require('../middlewares/authMiddleware');



router.post('/register', createUser );
router.post('/forgot-pass-token', forgottenPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.put('/order/update-order/:id', authMiddleware, isAdmin, updateOrderStatus);

router.put('/password-update', authMiddleware, updatePassword);
router.post('/login', loginUser );
router.post('/admin-login', loginAdmin);
router.post('/cart', authMiddleware, userCart);
router.post('/cart/apply-coupon', authMiddleware, applyCoupon);
router.post("/cart/order", authMiddleware, createOrder);
router.get('/all-users', getAllUsers );
router.get('/get-order', authMiddleware,  getOrders)
router.get('/refresh', refreshToken );
router.get('/logout', logout);
router.get('/wishlist', authMiddleware, getWishlist);
router.get('/user-cart', authMiddleware, getUserCart); 


router.get('/:id', authMiddleware, isAdmin, getUserById );
router.delete('/empty-cart', authMiddleware, emptyCart);
router.put('/edit-user', authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);

router.delete('/:id', deleteUserById);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUserById );
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUserById );




module.exports = router;