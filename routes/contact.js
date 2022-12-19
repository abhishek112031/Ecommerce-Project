
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const contactController=require('../controllers/contact')


router.get('/contact',contactController.getContact);

router.post('/contact',contactController.postContact);

module.exports=router;


