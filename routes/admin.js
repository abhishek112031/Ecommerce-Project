const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const AdminProductController=require('../controllers/adminProduct');



router.get('/add-product',AdminProductController.getAddProduct);
router.post('/add-product', AdminProductController.postAddProduct);
router.get('/all-Admin-Products',AdminProductController.getAllAdminProduct);





module.exports = router;
