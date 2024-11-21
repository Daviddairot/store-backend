const getCart = require('../models/addToCart');  


const userCart = async (req, res) => {
    try{
        const user = req.body;
        const userCart = await getCart.find(user)
        // console.log(userCart);
        res.status(200).json({userCart});
    } catch(err){ 
        console.error(err);
        res.status(500).json({error: 'Server error' })
    }
}

module.exports = {userCart};