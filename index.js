const http = require('http');
const body = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes =  require('./routes/shop');
const express = require('express')

const app = express();
app.use(body.urlencoded({extended : true}));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);
 
app.use((req,res)=>{

    res.status(404).send('<html><h1>page not found</h1></html>');
});




app.listen(8001);