// const fs = require('fs')
// const input = fs.readFileSync('shayn.txt' , 'utf-8' , (err, data)=>{
//     console.log(data);
    
// })
// console.log('reading file')

const http =require('http')
const url =require('url')

const server= http.createServer((req,res)=>{
    console.log(req.url ,"==req");
    
    if(req.url == "/cholay"){
        res.end("ya lee ap ka choley masala mar ka.")
    }else if(req.url == "/aloochat"){
        res.end("ya lo ap ki aloo chat")
    }else if (req.url == "/panipuri"){
        res.end("ya lee ap ki pani puri ki pelat")
    }else{
        res.end("sorry bhai.ap dusari shop la le loo ")
    }
   
})
server.listen(8000, '127.0.0.1',()=>{
    console.log('===> shop open ho gayi hain ==> mubarak hoo');
})
