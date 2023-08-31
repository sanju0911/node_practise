const http = require('http');
const body = require('body-parser');

const express = require('express')

const app = express();
app.use(body.urlencoded());

 
app.use('/add_product',(req,res,next)=>{

    console.log(res.body)
    res.send('<form action = "/product" method= "POST"><input type = "text" name = "title"><input type = "text" name = "size"><button type = "submit">add product</button></form>')
   
});
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');

})

app.use('/',(req,res,next)=>{

    res.send(`hello from home page order confirmed : ${req.body.title}`);
})



app.listen(8001);