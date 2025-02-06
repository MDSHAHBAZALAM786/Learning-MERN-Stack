const fs=require('fs')
fs.rmdir('TestingDir',(err)=>{
    if(!err){
        console.log("Directory has been deleted...")
    }
})