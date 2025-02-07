var fs=require('fs')
var myReadStream=fs.createReadStream(__dirname+'/data.txt',{
    encoding:'utf8',
    highWaterMark:50,
    start:1,
    end:250
})
var myWriteStream=fs.createWriteStream(__dirname+'/data3.txt')
myReadStream.on('data',function(chunk){
    console.log("New chunk recieved")
    myWriteStream.write(chunk)
})