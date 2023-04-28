const express = require('express');
const route = express.Router();
const product_controller = require('../controller/product_controller');
const Product = require('../model/product');


route.get('/', function (req, res) {
    res.status(200).send({
        message: 'you lannded on website'
    })})

    route.get('/products', product_controller.list)
    route.use('/product', require('../route/product'));
    module.exports = route;