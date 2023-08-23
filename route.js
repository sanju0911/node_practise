
const fs = require('fs');

const reqhandler = (req,res)=>{

    const method = req.method;
    if (req.url === '/') {
        const messages = fs.readFileSync('message.txt', 'utf-8');
        res.write('<html><body>');
      
       
        messages.split('\n').forEach(message => {
          if (message.trim() !== '') {
            res.write(message);
          }
        });
      
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form>');
        res.write('</body></html>');
        return res.end();
      }
    
    if(req.url ==="/message" && method === "POST")
    {
    const body = [];
    req.on('data',(chunk)=>{
        console.log(chunk);
          body.push(chunk);
    });
    req.on('end', ()=>{
        const parsedbody = Buffer.concat(body).toString();
        const message = parsedbody.split("=")[1];
        fs.writeFileSync('message.txt' , message);
    
    });
    
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
    }
    
    res.end();


};

module.exports = reqhandler;
