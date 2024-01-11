const express = require('express');
const router = express.Router();

const { createUser, loginUser, getAllUsers, getUserById, deleteUserById, updateUser } = require('../controllers/userController');



router.post('/register', createUser );
router.post('/login', loginUser );
router.get('/all-users', getAllUsers );
router.get('/:id', getUserById );
router.put('/:id', updateUser);
router.delete('/:id', deleteUserById);


module.exports = router;