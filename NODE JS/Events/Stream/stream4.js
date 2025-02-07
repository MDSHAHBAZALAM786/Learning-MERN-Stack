var fs=require('fs')
var myReadStream=fs.createReadStream(__dirname+'/data.txt','utf8')
var myWriteStream=fs.createWriteStream(__dirname+'/data2.txt')
myReadStream.on('data',function(chunk){
    console.log("New chunk recieved")
    myWriteStream.write(chunk)
})