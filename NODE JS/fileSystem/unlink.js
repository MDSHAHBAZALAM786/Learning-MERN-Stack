const fs=require('fs')
fs.unlink('unlink.txt',(err)=>{
    if(!err){
        console.log("File is deleted...")
    }
})