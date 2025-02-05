const fs=require('fs')
fs.readFile(__dirname+'/fs1.txt','utf-8',(data,err)=>{
    if(!err){
        console.log(data)
    }else{
        console.log(err)
    }
})