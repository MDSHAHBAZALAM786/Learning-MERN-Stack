const fs=require('fs')
console.log("Program Started.....")
fs.readFile("demo.txt",'utf8',(err,data)=>{
    if(!err){
        console.log(data)
    }
})
console.log("Program Ended....")