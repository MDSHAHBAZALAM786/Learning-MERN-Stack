const fs=require('fs')
const myReadStream=fs.createReadStream(__dirname+'/data.txt',{
    encoding:'utf8',
    highWaterMark:30,
    start:1,
    end:90

})
myReadStream.on('data',function(chunks){
    console.log("New Chunk "+chunks)
})