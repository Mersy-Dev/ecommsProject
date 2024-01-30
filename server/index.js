const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require("body-parser");
const colors = require('colors')
const mongoose = require('mongoose'); 
const cors = require("cors");
const { errorHandler, notFound } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const connectDB = require('./config/dbConnect');


const authRoute = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const blogRoute = require('./routes/blogRoute');
const categoryRoute = require('./routes/prodCategoryRoute');


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.json({limit: "10mb"}));
app.use(cors({origin: "*"} ));
app.use(cookieParser());




app.use('/api/user', authRoute);
app.use('/api/product', productRoute)
app.use('/api/blog', blogRoute)
app.use('/api/category', categoryRoute);


app.use(notFound);
app.use(errorHandler);

connectDB();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});