// 1. 通过模块名字导入文件模块
const fs = require('fs')
// 2. 通过readFile函数读取文件内容,res是结果
fs.readFile('./hello-china.js','utf8',(err,res) => {
    if (err) console.err(err)
    console.log(res)
    console.log(res.toString())
})