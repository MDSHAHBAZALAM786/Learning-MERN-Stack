const http=require('http')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("Home Page")
        res.end()
    }else if(req.url=='/about'){
        res.write("About us page")
        res.end()
    }else if(req.url=='/service'){
        res.write("Services")
        res.end()
    }else if(req.url=='/contact'){
        res.write("Contact us") 
        res.end()
    }else{
        res.write("Unknown Page")
        res.end()
    }
}).listen(3000,()=>console.log("Server Started...."))