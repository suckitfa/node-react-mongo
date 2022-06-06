const fs = require('fs')

fs.writeFile('./write-file.txt',"hello, I'm using fs", (err) => {
    if (err) console.err(err)
    console.log("写入成功")
})