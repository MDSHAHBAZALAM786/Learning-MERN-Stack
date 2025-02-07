const fs=require('fs')
const myReadStream=fs.createReadStream('data.txt','utf8')
myReadStream.on('data',(chunks)=>{
    console.log("Chunks recieved")
    console.log(chunks)
})