const fs = require('fs')
const path = require('path')

function addFile(tragetPath,name){
    // '/' , 'index.ts'
    const location = path.join(tragetPath,name)
    fs.writeFileSync(location,'')
}

