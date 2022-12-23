const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

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


app.use('/admin', adminRoutes);
app.use(contactRoutes);
app.use(successRoutes);


app.use(shopRoutes);

//for error encounter:
app.use(errController.error404);


sequelize.sync()
.then((result)=>{
    // console.log(result);
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
});




