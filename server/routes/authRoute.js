const express = require('express');
const router = express.Router();

const { createUser, loginUser, getAllUsers, getUserById, deleteUserById, updateUser, blockUserById, unblockUserById } = require('../controllers/userController');
const { authMiddleware, isAdmin,  } = require('../middlewares/authMiddleware');



router.post('/register', createUser );
router.post('/login', loginUser );
router.get('/all-users', getAllUsers );
router.get('/:id', authMiddleware, isAdmin, getUserById );
router.put('/edit-user', authMiddleware, updateUser);
router.delete('/:id', deleteUserById);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUserById );
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUserById );


module.exports = router;