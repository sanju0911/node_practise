const http = require('http');
const body = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes =  require('./routes/shop');
const ContactUs = require('./routes/contactus');
const path = require('path');
const express = require('express')

const app = express();
app.use(body.urlencoded({extended : true}));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

app.use(ContactUs)
 
app.use('/Sucess',(req,res)=>{

    res.send("submitted successfully");
})
app.use((req,res)=>{

    res.status(404).sendFile(path.join(__dirname,'views','not.html'));
});




app.listen(8001);