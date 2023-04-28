
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://shakir973019:fGJLprPlCqEctBQJ@cluster0.rny2pc4.mongodb.net/?retryWrites=true&w=majority');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in conecting mongodb'));
db.once('open',function(){
    console.log('***connected to mongodb****');
})
module.exports=db;