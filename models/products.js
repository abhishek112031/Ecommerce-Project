const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Product=sequelize.define('product',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title: Sequelize.STRING,

    productPrice: {
        type: Sequelize.DOUBLE,
        allowNull:false
    },
    productUrl:{
        type:Sequelize.STRING,
        allowNull:false
    },
    productDescription:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=Product;
