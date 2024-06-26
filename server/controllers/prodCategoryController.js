const Category = require("../models/prodCategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utilities/mongoDBidValidate");


// @desc    Create a category
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//update category
const updateCategory = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { title },
            { new: true }
        );
        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//get single category
const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const category = await Category.findById(id);
        res.json(category);
    } catch (error) {
        throw new Error(error);
    }
});

//get all categories
const getAllCategories = asyncHandler(async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//delete category
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        res.json(deletedCategory);
    } catch (error) {
        throw new Error(error);
    }
});














module.exports = { createCategory, updateCategory, getCategory, getAllCategories, deleteCategory };