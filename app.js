//const write = require('./write')
const read = require('./read')
const add = require('./add')
const present = require('./present')
const del = require('./del')
const update = require('./update')


const cmd = process.argv

// write(cmd)
// console.log(read())

var note = {}

if(cmd[2] == 'read') {

    present(read())
}

if(cmd[2] == 'add') {

    note = {
        id: cmd[3],
        name: cmd[4],
        age: cmd[5]
    }
    let oldNote = read()
    add(note, oldNote)
    present(read())
}
if(cmd[2] === 'delete') {
    
    note = cmd[3]

    let oldNote = read()
    del(note, oldNote)
    present(read())
}
if(cmd[2] == 'update') {

    note = {
        id: cmd[3],
        name: cmd[4],
        age: cmd[5]
    }
    let oldNote = read()
    update(note, oldNote)
    present(read())
}