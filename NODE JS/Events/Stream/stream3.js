const fs=require('fs')
const file=fs.createWriteStream('data1.txt','utf8')
file.write('Hello Stream')
file.end()
