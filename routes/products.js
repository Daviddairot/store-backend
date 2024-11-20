const express = require('express');
const router = express.Router();

const { getAllProductStatic, getAllProducts } = require('../controllers/products');
const { createUser } = require('../controllers/auth');
const {loginUser} = require('../controllers/login');

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductStatic)
router.route('/signup').post(createUser)
router.route('/login').post(loginUser)


module.exports = router;