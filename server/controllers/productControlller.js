const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');



//create product'
const createProduct = asyncHandler(async (req, res) => {
    try {
        if(req.body.title) {
            req.body.slug = slugify(req.body.title, {
                lower: true,
                strict: true,
            })
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct )
    }
    catch (error) {
       throw new Error(error)
    }
}
);




//get a product
const getProduct = asyncHandler(async (req, res) => {
    const {id } = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct)
    }
    catch (error) {
        throw new Error(error)
    }
}
);


//get all products
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const getAllproduct = await Product.find();
        res.json(getAllproduct)
    }
    catch (error) {
        throw new Error(error)
    }
}
);

// update a product
const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;  // Extract the 'id' from req.params
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProducts = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.json(updateProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// delete a product
const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;  // Extract the 'id' from req.params
    try {
        const deleteProduct = await Product.findOneAndDelete({ _id: id });
        res.json(deleteProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});









module.exports = { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct };