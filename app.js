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

//dataBase:db is basically the pool that allows us connections init
// const db=require('./util/database');

// db.execute('SELECT * FROM products')
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);
app.use(contactRoutes);
app.use(successRoutes);


app.use(shopRoutes);

//for error encounter:
app.use(errController.error404);




app.listen(3000);

