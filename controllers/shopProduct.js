const rootDir = require('../util/path');
const path = require('path');

const Product=require('../models/products');
const Cart=require('../models/cart');

exports.getProduct = (req, res, next) => {
    Product.fetchAll((products)=>{
        //passing parameters in anonymous function;
        //console.log('fetch-all',products);
          res.json(products);
    });
    
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
}
exports.getAllProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views','products-list.html'));

}
//for cart
exports.postcart=(req,res,next)=>{
    Cart.addProductToCart(req.body.id,req.body.productPrice)
     res.redirect('/shop/cart');
 }
 exports.getCartItem=(req,res,next)=>{
     Cart.fetchAll((products)=>{
         res.json(products);
     });
 
 }
 exports.getcartPage=(req,res,next)=>{
     res.sendFile(path.join(rootDir, 'views', 'yourCart.html'));
 }

//for shop:-->
exports.getProductView=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));

}




//for id:
exports.getProductById=(req,res,next)=>{
    const prodId=req.params.productId;
    Product.findById(prodId,product=>{
        console.log(product);
        res.json(product);
    // res.sendFile(path.join(rootDir, 'views', 'product-details.html'));
        
        
    })
    

}

exports.deleteProduct=(req,res,next)=>{
    const productId=req.params.prodId;
    Product.deleteById(productId,products=>{
        res.json(products);
    })

}




