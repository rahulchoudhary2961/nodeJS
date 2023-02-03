const express = require('express');
const path = require('path')

const rootDir=require('./util/path')

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const errorPage=require('./controllers/404Page')

const db = require('./util/database');

const bodyParser = require('body-parser');

const app = express();



app.set('view engine','ejs');
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}));//this will parse the code which is required to parse ;

app.use(express.static(path.join(__dirname,'public'))) //we are already in public

app.use(adminRoutes);

app.use(shopRoutes);

app.use(errorPage.pageNotFound);

app.listen(9000);