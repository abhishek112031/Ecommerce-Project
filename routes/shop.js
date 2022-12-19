const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const getShopProductController=require('../controllers/shopProduct.js')

const router = express.Router();

router.get('/',getShopProductController.getProduct);
router.get('/shop',getShopProductController.getProductView)

//for cart:
router.post('/cart',getShopProductController.postcart);
router.get('/shop/cart',getShopProductController.getcartPage);
router.get('/cart',getShopProductController.getCartItem);//cart back-end

router.get('/:productId',getShopProductController.getProductById);


module.exports = router;
