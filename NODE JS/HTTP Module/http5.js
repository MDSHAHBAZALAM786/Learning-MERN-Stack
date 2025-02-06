const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=='/'){
        fs.readFile('web.html',(err,data)=>{
            res.write(data)
            res.end()
        })
    }else if(req.url=='/about'){
        fs.readFile('about.html',(err,data)=>{
            res.write(data)
            res.end()
        })
    }else if(req.url=='/service'){
        fs.readFile('service.html',(err,data)=>{
            res.write(data)
            res.end()
        })
    }else if(req.url=='/contact'){
        fs.readFile('contact.html',(err,data)=>{
            res.write(data)
            res.end()
        })
    }else{
        res.write("Unknown Page")
        res.end()
    }
}).listen(3000,()=>console.log("Server Started...."))