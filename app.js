const write = require('./write')
const read = require('./read')

const cmd = process.argv

// write(cmd)
// console.log(read())

if(cmd[2] == 'read') {
    
    const present = require('./present')
    present(read())
}

if(cmd[2] == 'add') {

    let note = {
        id: cmd[3],
        name: cmd[4],
        age: cmd[5]
    }
    let oldNote = read()
    const add = require('./add')
    add(note, oldNote)

    const present = require('./present')
    present(read())
}