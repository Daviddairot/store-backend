const Product = require('../models/Products');

const getPrice = async (id) => {
    try {
        // console.log(id);
        const product = await Product.findById({ _id:id });
        return product.price || product
    } catch (err) {}
};


module.exports = getPrice