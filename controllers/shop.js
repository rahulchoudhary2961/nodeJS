const Product = require('../models/product')
const { fetchAll } = require('../models/product');

exports.getProducts=(req,res)=>{
    Product.fetchAll((products)=>{
        res.render("shop/product-list",{prods:products , doctype:'shop'});
    });
}

exports.getProduct=(req,res,next)=>{
    const prodId=req.params.productId;
    Product.findById(prodId,(product)=>{
        res.render("shop/product-details", {product:product})
    })  
};

exports.getIndex=(req,res)=>{
    Product.fetchAll()
    .then(([rows,fieldData])=>{
        res.render("shop/index",{prods:rows , doctype:'Index'});
    })
    .catch(err=>{
        console.log(err);
    })
};


exports.getCart=(req,res,next)=>{
    res.render("shop/cart",{doctype:'Cart Page'})
};

exports.postCart=(req,res,next,err)=>{
    console.log(req.body.productId);
    const prodId = req.body.productId;
    console.log(prodId);
    res.render('/cart');
};

exports.getOrders=(req,res,next)=>{
 res.render("shop/checkout",{doctype:"orders page"})
};


exports.getCheckOutPage=(req,res,next)=>{
    res.render("shop/checkout",{doctype:"CheckOut Page"})
}
