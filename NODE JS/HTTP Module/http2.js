const fs=require('fs')
const http=require('http')
http.createServer((req,res)=>{
    fs.readFile('demo1.txt',(err,data)=>{
        res.write(data)
        res.end()
    })
}).listen(3000,()=>console.log("Server Started...."))