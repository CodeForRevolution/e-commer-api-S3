const express=require('express');
const route=express.Router();
const product_controller=require('../controller/product_controller');


route.post('/create',product_controller.create);
route.delete('/delete/:id',product_controller.delete);
route.patch('/update/',product_controller.update);

module.exports=route;