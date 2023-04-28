
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Ecommerce');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in conecting mongodb'));
db.once('open',function(){
    console.log('***connected to mongodb****');
})
module.exports=db;