const Product = require('../models/Products');

const getAllProductStatic = async (req, res) => {
    const product = await Product.find({})
    res.status(200).json({product})
}

const getAllProducts= async (req, res) => {
    res.status(200).json({msg: 'Product routes'})
}


module.exports = {
    getAllProductStatic, 
    getAllProducts,
}