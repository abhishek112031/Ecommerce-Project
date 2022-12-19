
const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'cart.json');

const getProductsFromfile = (cb) => {
    const p = path.join(rootDir, 'data', 'cart.json');
    fs.readFile(p, (err, contents) => {
        if (err) {
          cb([]);
        }
        else {
            cb(JSON.parse(contents));
        }
    });

}


module.exports= class Cart{
    static addProductToCart(id,productPrice){
        //purpose:
        
        fs.readFile(p,(err,contents)=>{
            //1.fetch the previous cart;
            let cart={products:[],totalPrice:0}//at the innitial stage
            if(!err){
                cart=JSON.parse(contents);
            }
            //2.analyze the cart =>find the existing product
            const existingProductsIndex=cart.products.findIndex(prod=>prod.id===id);
            const existingProducts=cart.products[existingProductsIndex];
            let updatedProducts;

            //3.add ne product and increase the quantity
            if(existingProducts){
                updatedProducts={...existingProducts};
                updatedProducts.qty += 1;
                cart.products=[...cart.products];
                cart.products[existingProductsIndex]=updatedProducts;

            }
            else{
                updatedProducts={id:id,qty:1}//if not the same product
                cart.products=[...cart.products,updatedProducts]
            }
            cart.totalPrice=cart.totalPrice+ +productPrice;
            fs.writeFile(p,JSON.stringify(cart),(err)=>{
                console.log(err);
            });

            
        })
    }

    static fetchAll(cb) {//fetchAll function will work after reading the file
        getProductsFromfile(cb);

    }

}  