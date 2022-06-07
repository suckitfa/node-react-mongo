const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)

async function run() {
    const res1 =  await readFile('file.txt','utf8')
    console.log(res1)
}
run()