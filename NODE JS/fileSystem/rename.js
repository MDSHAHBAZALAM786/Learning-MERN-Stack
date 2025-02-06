const fs=require('fs')
fs.rename('re.txt','rename.txt',(err)=>{
    if(!err){
        console.log("File renamed")
    }
})