const rootDir = require('../util/path');
const path = require('path');

const Product=require('../models/products');
const Cart=require('../models/cart');

exports.getProduct = (req, res, next) => {
    // Product.findAll()
    req.user.getProducts()
    .then((products)=>{
        res.json(products);
    })
    .catch((err)=>console.log(err))
   
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
    req.user.getProducts({where:{id:prodId}})
    .then((product)=>{
        res.json(product[0]);
    })
    .catch(err=>{
        console.log(err);
    })

    // another method:(product Array form)
    //  Product.findAll({where:{id:prodId}})
    // .then((product)=>{
    //     res.json(product[0]);
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
    
}

exports.deleteProduct=(req,res,next)=>{
    const productId=req.params.prodId;
    Product.findByPk(productId)
    .then((product)=>{//step to delete single product
        product.destroy(); 
    })
    .then(
        (products)=>{ // step to fetch all-products after deletion 
            res.json(products);
        }
    )
    .catch(err=>{
        console.log(err)
    });
    

}




