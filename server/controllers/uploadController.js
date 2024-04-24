const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utilities/mongoDBidValidate');
const { cloudinaryUploadImg, cloudinaryDeleteImg } = require('../utilities/cloudinary');
const fs = require('fs');


const uploadImages = asyncHandler(async (req, res) => {
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
        const images = urls.map(file => {
            return file;

        });
        res.json(images);
    } catch (error) {
        throw new Error(error)
    }
});

const deleteImages = asyncHandler(async (req, res) => {
    try {
        const { id } = req.body;
        const deleteImg = await cloudinaryDeleteImg(id, "images");
        res.json({ message: "Image deleted successfully" });
    } catch (error) {
        throw new Error(error)
    }
});



module.exports = {
    uploadImages, deleteImages
 };