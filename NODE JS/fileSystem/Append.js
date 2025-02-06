const fs=require('fs')
fs.appendFile("append.txt"," Server side coding",(err)=>{
    if(!err){
        console.log("File is updated...")
    }
})