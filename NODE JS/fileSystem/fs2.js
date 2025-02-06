const fs=require('fs')
fs.writeFile('fs2.txt','Welcome to Node',(err,data)=>{
    if(!err){
        console.log("File is Created")
    }else{
        console.log(err, "Some Error")
    }
})