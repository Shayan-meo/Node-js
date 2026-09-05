const express = require("express")
const app =express()


app.get('/', (req,res )=>{
    console.log("koi aya hain");
    res.send("welcome a website")
})

app.get('/about',(req ,res)=>{
    console.log("aboute mein koi aya hain");
    if (true){
        res.send("welcome aboute ka page mein koi aya hain")
    } else{}
})

app.listen(5000,()=>{
    console.log("ggg hain humari website open hain");
    
})
