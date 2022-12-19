
const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');


const getProductsFromfile = (cb) => {
    const p = path.join(rootDir, 'data', 'products.json');
    fs.readFile(p, (err, contents) => {
        if (err) {
          cb([]);
        }
        else {
            cb(JSON.parse(contents));
        }
    });

}



module.exports = class Product {
    constructor(title, productUrl, productPrice, productDescription) {
        this.title = title;
        this.productUrl = productUrl;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
    }

    save() {
    const p = path.join(rootDir, 'data', 'products.json');
    this.id=Math.random().toString();

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
    //delete product:-->
    static deleteById(id,cb){
        const p = path.join(rootDir, 'data', 'products.json');

        getProductsFromfile(products=>{

            const prodTobeDel=products.find(prod=>prod.id===id);
            const indexNo=products.indexOf(prodTobeDel);
            products.splice(indexNo,1);
            fs.writeFile(p, JSON.stringify(products), err => {
                // console.log(err);
            cb(products);
            });
            

        })
    }
}