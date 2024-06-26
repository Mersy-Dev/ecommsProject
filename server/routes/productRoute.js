const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, addToWishlist, rating,  } = require('../controllers/productControlller');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.get('/:id', getProduct)
router.put('/wishlist', authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put('/:id',  authMiddleware, isAdmin, updateProduct);
router.get('/', getAllProducts);
router.delete('/:id', authMiddleware, isAdmin,   deleteProduct)





module.exports = router;