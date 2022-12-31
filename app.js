const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Product=require('./models/products');
const User=require('./models/user');

const app = express();


// routes:-->
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');

const errController = require('./controllers/err404');


const sequelize=require('./util/database');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    User.findByPk(1)
    .then(user=>{
        req.user=user;
        next();
    })
    .catch(err=>{
        console.log(err);
    })
})
app.use('/admin', adminRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use(shopRoutes);

//for error encounter:
app.use(errController.error404);

//associations:
Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'});//uSER CAN CREATE AND DELETE THE PRODUCT
User.hasMany(Product);


sequelize
// .sync({force:true})
.sync()
.then(result=>{
    return User.findByPk(1);
})
.then((user)=>{
    if(!user){
       return User.create({name:'Abhishek',email:'abhi.123@gmail.com'})
    }
    return user;
})
.then((user)=>{
    console.log(user);
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
});




