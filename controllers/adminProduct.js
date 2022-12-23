const rootDir = require('../util/path');
const path = require('path');
const Product=require('../models/products'); //importing product class from models



exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
}

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    const title=req.body.title;
    const productUrl=req.body.productUrl;
    const productPrice=req.body.productPrice;
    const productDescription=req.body.productDescription;
    Product.create({
        title:title,
        productUrl:productUrl,
        productPrice:productPrice,
        productDescription:productDescription
    })
    .then(()=>{
        // console.log(result);
        res.redirect('/shop/all-Products')

    })
    .catch((err)=>{
        console.log(err);
    })
    
}

//get all products:--->>demo
exports.getAllAdminProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'adminProducts.html'));


}







