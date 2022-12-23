const Sequelize=require('sequelize');

const sequelize=new Sequelize('node_complete','root','mysql@2022',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;