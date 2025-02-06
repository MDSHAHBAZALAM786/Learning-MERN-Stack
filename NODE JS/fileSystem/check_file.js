const fs=require('fs')
let file="check_file.txt"
fs.stat(file,(err, stats)=>{
    if(stats){
        console.log("File already exist")
    }else{
        fs.writeFile(file,'Welcome to Node','utf-8',(err,data)=>{
            console.log("File is Created")
        })
    }
})