const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, addToWishlist, rating, uploadImages, deleteImages } = require('../controllers/productControlller');

const {isAdmin , authMiddleware} = require('../middlewares/authMiddleware');
const { uploadPhoto, productImgResize } = require('../middlewares/uploadImages');

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.put('/upload/', authMiddleware, isAdmin, uploadPhoto.array("images", 10), productImgResize, uploadImages);
router.get('/:id', getProduct)
router.put('/wishlist', authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put('/:id',  authMiddleware, isAdmin, updateProduct);
router.get('/', getAllProducts);
router.delete('/:id', authMiddleware, isAdmin,   deleteProduct)
router.delete('/delete-img/:id', authMiddleware, isAdmin, deleteImages)





module.exports = router;