const express = require('express')
const path=require('path');

const adminController = require('../controllers/admin');




const router = express.Router();


// getaddproduct
router.use('/product-page', adminController.getAddProductPage);



// postaddproduct
router.post('/product',adminController.postAddProduct);

router.use('/admin-products', adminController.getProducts)




module.exports=router;


