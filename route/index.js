const express = require('express');
const route = express.Router();
const product_controller = require('../controller/product_controller');
const Product = require('../model/product');


route.get('/', function (req, res) {
 res.send('this is it');})
 
route.get('/products', product_controller.list)
route.use('/product', require('../route/product'));
module.exports = route;