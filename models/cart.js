
const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');


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



module.exports = class Cart {
    constructor(id,title,productUrl,productPrice,productDescription) {
        this.id=id;
        this.title = title;
        this.productUrl = productUrl;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        
    }

    save() {
    const p = path.join(rootDir, 'data', 'cart.json');
        getProductsFromfile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {//fetchAll function will work after reading the file
        getProductsFromfile(cb);

    }

    static findById(id,cb){
        getProductsFromfile(products=>{
            const eachProduct=products.find(prod=>prod.id===id);
            cb(eachProduct);

        })
    }
}