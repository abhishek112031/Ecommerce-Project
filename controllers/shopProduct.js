const rootDir = require('../util/path');
const path = require('path');

const Product=require('../models/products');
const Cart=require('../models/cart');

exports.getProduct = (req, res, next) => {
    Product.fetchAll()
    .then(([rows,fieldData])=>{
        res.json(rows);
    })
    .catch((err)=>{
        console.log(err);
    });
    
    
    
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

 
exports.getProductView=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));

}




//for id:
exports.getProductById=(req,res,next)=>{
    const prodId=req.params.productId;
    Product.findById(prodId)
    .then(([product])=>{
        res.json(product[0]);
    })
    .catch(err=>{
        console.log(err);
    })
    

}

exports.deleteProduct=(req,res,next)=>{
    const productId=req.params.prodId;
    Product.deleteById(productId)
    .then(([products])=>{

        res.json(products);
    })
    .catch(err=>{
        console.log(err)
    });
    

}




