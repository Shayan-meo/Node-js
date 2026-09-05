const express =require ('express')
const jsondemo=express()

jsondemo.get('/',(req,res)=>{
   res.send("wellcome json reply")
})

jsondemo.get('/menu',(req,res)=>{
   res.json({
     stutus : ture,
     data:[
       {
        tital:ChannelMergerNode,
        price:89
       },
       {
        tital:AudioWorkletNode,
        price:90
       }
     ]
   })
})


jsondemo.listen(8080,()=>{
    console.log("ok")
})
