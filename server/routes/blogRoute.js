const express = require('express');

const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog, likeBlog, dislikeBlog, uploadImages } = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadImages');
const router = express.Router();


router.post("/", authMiddleware, isAdmin, createBlog);
router.put('/upload/:id', authMiddleware, isAdmin, uploadPhoto.array("images", 2), blogImgResize, uploadImages)

router.put("/like", authMiddleware, isAdmin, likeBlog);
router.put("/dislike", authMiddleware, isAdmin, dislikeBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.put("/update/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlog);





    


module.exports = router;