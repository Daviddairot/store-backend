const mongoose = require('mongoose');

const addToCartSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: 'User',
        required: true,
    },  
    product: {
        type: String,
        required: true,
    },
    size: {
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('AddToCart', addToCartSchema);