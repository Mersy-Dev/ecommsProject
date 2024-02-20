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
        saveAddress} = require('../controllers/userController');
const { authMiddleware, isAdmin,  } = require('../middlewares/authMiddleware');



router.post('/register', createUser );
router.post('/forgot-pass-token', forgottenPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.put('/password-update', authMiddleware, updatePassword);
router.post('/login', loginUser );
router.post('/admin-login', loginAdmin)
router.get('/all-users', getAllUsers );
router.get('/wishlist', authMiddleware, getWishlist);

router.get('/refresh', refreshToken );
router.get('/logout', logout);
router.get('/:id', authMiddleware, isAdmin, getUserById );
router.put('/edit-user', authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);

router.delete('/:id', deleteUserById);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUserById );
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUserById );




module.exports = router;