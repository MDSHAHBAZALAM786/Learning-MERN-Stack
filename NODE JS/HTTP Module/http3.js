const fs=require('fs')
const http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{
        // 'content-type':'text/plain'
        'content-type':'text/html'
    })
    fs.readFile('web.html',(err,data)=>{
        res.write(data)
        res.end()
    })
}).listen(3000,()=>console.log("Server Started...."))