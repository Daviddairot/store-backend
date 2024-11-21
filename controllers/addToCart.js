const addToCarts = require('../models/addToCart');  
const getPrice = require('../Services/getprice');

const addToCart = async (req, res) => {
    try {
        const { user, productId, quantity } = req.body;
        const id = productId
        const product = productId
        console.log(productId);
        price  = await getPrice(id);
        const creatcart = addToCarts.create({user, product, quantity, price});

        res.json(creatcart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}


module.exports = {addToCart};