

const { fetchAll } = require('../models/product');
const Products = require('../models/product');



exports.getProducts=(req,res)=>{
    res.render('admin/products',{pageTitle:"Products"})
}

exports.getCartPage=(req,res)=>{
    res.render('shop/cart',{pageTitle:"Cart Page"})
}
exports.getCheckOutPage=(req,res)=>{
    res.render('shop/checkout',{pageTitle:"Check out Page"})
}
exports.getProductDetails=(req,res)=>{
    res.render('shop/product-details',{pageTitle:"Product Details"})
}
