const http=require('http')
http.createServer((req,res)=>{
    res.write("NodeJs is server side coding ")
    res.end()
}).listen(3000,()=>{
    console.log("Server Started")
})