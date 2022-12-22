
const path = require('path');
// const fs = require('fs');
const rootDir = require('../util/path');
const db=require('../util/database');


module.exports = class Product {
    constructor(id,title, productUrl, productPrice, productDescription) {
        this.id=id;
        this.title = title;
        this.productPrice = productPrice;
        this.productUrl = productUrl;
        this.productDescription = productDescription;
    }

    save() {
       return db.execute('INSERT INTO products (title,productPrice,productUrl,productDescription) VALUES (?,?,?,?)',[this.title,this.productPrice,this.productUrl,this.productDescription])
    
    }

    static fetchAll() {
       return  db.execute('SELECT * FROM products');
        
    }

    static findById(id){
        return db.execute('SELECT * FROM products WHERE products.id=?',[id]);
        


    }
   
    static deleteById(id){
        return db.execute('DELETE FROM products WHERE products.id=?',[id])


    }
       
}