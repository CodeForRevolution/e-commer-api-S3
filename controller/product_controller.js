const Product=require('../model/product');
module.exports.create=async function(req,res){
    console.log('you hit the create function ',req.body);
    Product.create(req.body);

    res.status(200).send(req.body);
}

module.exports.list=async function(req,res){
let product=await Product.find({});
    res.status(200).send(product);
}
module.exports.delete=async function(req,res){
console.log('your params is now',req.params)

try {
 let deleted= await Product.deleteOne({
    _id:req.params.id
})

    res.status(200).send({
        message:'your product is delete',
      
    })
    
} catch (error) {
    console.log(error);
    
}





console.log('you hit the delete');
}

module.exports.update=async function(req,res){
    console.log('you hit the update');
    console.log('your query params for update is',req.query);
    let toupdate=await Product.findById(req.query.id);
    toupdate.quantity=toupdate.quantity+Number(req.query.value);
    toupdate.save()

    res.status(200).send({
        message:'update was done',
        updatedproduct:toupdate
    })
    
}