const rootDir = require('../util/path');
const path=require('path');
const Contacts=require('../models/contact');



exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
}

exports.postContact=(req,res)=>{
    const contact=new Contacts(req.body.fName,req.body.lName,req.body.email,req.body.mobileNo)
    contact.save();
    res.redirect('/success');

}