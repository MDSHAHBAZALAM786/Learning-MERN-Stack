const fs=require('fs')
fs.mkdir('TestingDir',(err)=>{
    if(!err){
        console.log("Directory has been created")
    }
})