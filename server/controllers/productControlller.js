const { json } = require('body-parser');
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
        //filtering
        const queryObj = { ...req.query };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);
        console.log(queryObj);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`);
        let query = Product.find(JSON.parse(queryStr));

        //sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
           query = query.sort(sortBy);
        } else {
           query= query.sort('-createdAt');
        }
        
        //field limiting
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }

        //pagination
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 10;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);

        if (req.query.page) {
            const numProducts = await Product.countDocuments();
            if (skip >= numProducts) throw new Error('This page does not exist');
        }
        


        const products = await query;
        res.json(products)
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