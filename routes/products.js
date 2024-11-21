const express = require('express');
const router = express.Router();

const { getAllProductStatic, getAllProducts } = require('../controllers/products');
const { createUser } = require('../controllers/auth');
const { loginUser } = require('../controllers/login');
const { createProduct } = require('../controllers/createProduct');

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductStatic)
router.route('/signup').post(createUser)
router.route('/login').post(loginUser)
router.route('/createproduct').post(createProduct)


module.exports = router;