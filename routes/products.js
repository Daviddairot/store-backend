const express = require('express');
const router = express.Router();

const { getAllProductStatic, getAllProducts } = require('../controllers/products');
const { createUser } = require('../controllers/auth');
const { loginUser } = require('../controllers/login');
const { createProduct } = require('../controllers/createProduct');
const { addToCart } = require('../controllers/addToCart');
const { userCart } = require('../controllers/getCart');

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductStatic)
router.route('/signup').post(createUser)
router.route('/login').post(loginUser)
router.route('/createproduct').post(createProduct)
router.route('/cart').post(addToCart)
router.route('/gcart').post(userCart)


module.exports = router;