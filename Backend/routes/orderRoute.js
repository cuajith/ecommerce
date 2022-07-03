const express = require('express');
const addOrderItem = require('../controller/orderController');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');

//Create new order
router.route('/').post(protect, addOrderItem);

module.exports = router;