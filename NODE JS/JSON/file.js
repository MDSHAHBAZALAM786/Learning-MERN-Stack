const http=require('http')
const data=require('./data.json')
http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":'application/json'
    })
    res.write(JSON.stringify(data))
    res.end()
}).listen(3000,()=>console.log("Server Started....."))