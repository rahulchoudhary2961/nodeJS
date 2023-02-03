const db =require('../util/database');

module.exports = class Product {
    constructor(name,imageUrl,description,price){
        this.title = name,
        this.imageUrl=imageUrl,
        this.description=description,
        this.price=price
    }
    save(){ //we are saving the data in the file in the format of string
        
    };
    static fetchAll(){
       return db.execute('SELECT * FROM products')
    };
    static findById(id,cb) {
        
        };
};