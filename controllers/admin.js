const Products = require('../models/product');

exports.getAddProductPage=(req,res,next)=>{
    res.render('admin/add-product',{pageTitle:'Add Product'})
};
exports.postAddProduct=(req,res,next)=>{
    
    const title = req.body.title;
    const imageUrl = req.body.imgeUrl;
    const price = req.body.price;
    const description = req.body.description;
    let product = new Products(title,imageUrl,price,description);
    
    product.save();
    // console.log(product);
    res.redirect('/');
};
exports.getProducts=(req,res,next)=>{
    Products.fetchAll((products)=>{
        res.render("admin/products",{prods:products , doctype:'Admin Products'});
    });
}

