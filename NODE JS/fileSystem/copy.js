const fs=require('fs')
fs.copyFile('append.txt','copy.txt',(err)=>{
    if(!err){
        console.log("File is copied")
    }else{
        console.log("Some error")
    }
})