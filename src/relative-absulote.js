const path = require('path')
const fs = require('fs')

console.log(__dirname)
console.log(path.join(__dirname,'file.txt'))

fs.readFile(path.join(__dirname,'file.txt'),'utf8',(err,res) => {
    console.log(err)
    console.log(res)
})

