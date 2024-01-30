const express = require('express');
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog, likeBlog, dislikeBlog } = require('../controllers/blogController');
const router = express.Router();
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware');




router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/like", authMiddleware, isAdmin, likeBlog);
router.put("/dislike", authMiddleware, isAdmin, dislikeBlog);
router.get("/getAllBlog", authMiddleware, isAdmin, getAllBlogs);
router.get("/get/:id", authMiddleware, isAdmin, getBlogById);
router.put("/update/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlog);








module.exports = router;