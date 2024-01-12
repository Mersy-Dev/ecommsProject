const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    mobile:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user"
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    cart:{
        type: Array,
        default: [],
    },
    address:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Address"
        }
    ],
    wishlist:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Product"
        }
    ],
    refreshToken: {
        type: String,
    }
},
{
    timestamps: true
});



userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hashSync(this.password, salt);
});

userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compareSync(enteredPassword, this.password);
}

module.exports = mongoose.model('User', userSchema);