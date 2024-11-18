const express = require('express');
const router = express.Router();

const { getAllProductStatic, getAllProducts } = require('../controllers/products');
const { createUser } = require('../controllers/auth');

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductStatic)
router.route('/signup').post(createUser)


module.exports = router;