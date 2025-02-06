const { error } = require('console')
const fs =require('fs')
fs.readFile(__dirname+'/fs1.txt','utf-8',(err, data)=>{
    fs.stat("fs1.txt", (err,stats)=>{
        if(stats){
            console.log(data)
            console.log("File Exists")
        }else{
            console.log("File does not exist")
            console.log(err)
        }
    })
})