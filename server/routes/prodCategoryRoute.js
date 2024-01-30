const express = require("express");
const { createCategory, updateCategory, getallCategory, deleteCategory, getCategory } = require("../controllers/prodCategoryController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory    );
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/:id", getCategory);
router.get("/getprodcategory", getallCategory);

module.exports = router;