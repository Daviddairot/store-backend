const fs = require('fs').promises;
const path = require('path');
const Product = require('../models/Products');
const mediaurl = require('../Services/mediauri');

const createProduct = async (req, res) => {
    const { name, price, feature, rating, image, description } = req.body;

    // Assuming `image` contains the relative file path in `req.body`
    const sourcePath = path.resolve(image); // Resolve the image path

    try {
        const relativePath = await mediaurl.mfile(sourcePath)

        // Create the product record in the database with the relative path
        const product = await Product.create({
            name,
            price,
            feature,
            rating,
            image: relativePath, // Save the relative path in the database
            description
        });

        // Respond with the created product
        res.json({ product });
    } catch (err) {
        console.error('Error copying file:', err);
        res.status(500).json({ message: 'Error creating product' });
    }
};

module.exports = { createProduct };
