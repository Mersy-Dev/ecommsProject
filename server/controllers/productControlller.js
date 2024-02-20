const { json } = require('body-parser');
const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const User = require('../models/userModel');
const validateMongoDbId = require('../utilities/mongoDBidValidate');
const cloudinaryUploadImg = require('../utilities/cloudinary');
const fs = require('fs');



//create product'
const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title, {
                lower: true,
                strict: true,
            })
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct)
    }
    catch (error) {
        throw new Error(error)
    }
}
);




//get a product
const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
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
            query = query.sort('-createdAt');
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

//add to wishlist
const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
        if (alreadyadded) {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $pull: { wishlist: prodId },
                },
                {
                    new: true,
                }
            );
            res.json(user);
        } else {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $push: { wishlist: prodId },
                },
                {
                    new: true,
                }
            );
            res.json(user);
        }
    } catch (error) {
        throw new Error(error);
    }
});

//rating
const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { star, prodId, comment } = req.body;
    try {
        const product = await Product.findById(prodId);
        let alreadyRated = product.ratings.find(
            (userId) => userId.postedby.toString() === _id.toString()
        );
        if (alreadyRated) {
            const updateRating = await Product.updateOne(
                {
                    ratings: { $elemMatch: alreadyRated },
                },
                {
                    $set: { "ratings.$.star": star, "ratings.$.comment": comment },
                },
                {
                    new: true,
                }
            );
        } else {
            const rateProduct = await Product.findByIdAndUpdate(
                prodId,
                {
                    $push: {
                        ratings: {
                            star: star,
                            comment: comment,
                            postedby: _id,
                        },
                    },
                },
                {
                    new: true,
                }
            );
        }
        const getallratings = await Product.findById(prodId);
        let totalRating = getallratings.ratings.length;
        let ratingsum = getallratings.ratings
            .map((item) => item.star)
            .reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingsum / totalRating);
        let finalproduct = await Product.findByIdAndUpdate(
            prodId,
            {
                totalrating: actualRating,
            },
            { new: true }
        );
        res.json(finalproduct);
    } catch (error) {
        throw new Error(error);
    }
});

const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const uploader = (path) => cloudinaryUploadImg(path, "images");
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            // fs.unlinkSync(path);
        }
        const findProduct = await Product.findByIdAndUpdate(id, {
            images: urls.map(file => {
                return file;

            })
        },
            {
                new: true
            });
        res.json(findProduct)
    } catch (error) {
        throw new Error(error)
    }
});


module.exports = { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, addToWishlist, rating, uploadImages };