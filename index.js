const express=require('express');
const port=3000;
const App=express();
const db=require('./config/mongoose');
const bodyparser=require('body-parser');
App.use(bodyparser.urlencoded({extended:true}))
App.use('/',require('./route/index'));


App.listen(port,function(err){
    if(err){
        console.log('error in starting the server');

    }
    console.log('*********server is started **********')
})