const fs = require('fs')

fs.readFile('./file.txt','utf8',function(err,res) {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
})

console.log('读取完毕')