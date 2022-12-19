const rootDir = require('../util/path');
const path = require('path');
const Product=require('../models/products'); //importing product class from models



exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
}

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    const product=new Product(req.body.title,req.body.productUrl,req.body.productPrice,req.body.productDescription);//obj format
    product.save();
    res.redirect('/admin/all-Products');
}

//get all products:--->>demo
exports.getAllProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views','products-list.html'));

}






