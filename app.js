const { describe } = require('yargs')
const yargs=require('yargs')
const notes=require('./notes.js')
yargs.command({
    command:'add',
    descibe:'Add Note',
    builder:{
        title:{
            type:'string',
            required:'true'

        },
        body:{
            type:'string',
            required:'true'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Remove Node',
    builder:{
        title:{
            type:'string',
            required:'true'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
}
)
yargs.command({
    command:'list',
    describe:'Lists all Notes',
    handler(){
        notes.Listnotes()
    }
})
yargs.command({
    command:'read',
    describe:'Read Note',
    builder:{
        title:{
            describe:'title to read',
            type:'string',
            required:true
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})



yargs.parse()
