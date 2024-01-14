const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        ref: 'Category',
        required: true
    },
    brand: {
        type: String,
        // enum: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS", "DELL", "HP", "Acer", "Toshiba", "Sony", "Nikon", "Panasonic"]
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0,
        //if u want to hide this field from user
         //select: false,

    },
    images: {
        type: Array,
    },
    color: {
        type: String,
        // enum: ["white", "black", "brown", "silver", "blue", "red", "yellow", "green", "purple", "pink", "orange", "gray", "gold", "multi-color"],
        required: true
    },
    ratings: [
        {
            star: Number,
            postedby: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);