const fs=require('fs')
const chalk=require('chalk')

const { title } = require('process')

const addNote=(title,body)=>{

    const notes=loadNotes()

    // const duplicates=notes.filter((note)=> note.title===title)
    const duplicateNote=notes.find((note)=>note.title===title)//this will return the first duplicate it finds and stops
    
    debugger


    if(!duplicateNote)
    {

        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('Note Added')
    }
    else
    console.log('Duplicate found ---Note not added ')


}
const removeNote=(title)=>{
    const notes=loadNotes()
    const newNotes=notes.filter((note)=>{
        return note.title!==title
        
    })
    
    if(notes.length === newNotes.length){
        console.log(chalk.bgRed.black('Not Found'))
        return
    }
    else
    console.log(chalk.bgGreen.black('Removed'))
    saveNotes(newNotes)
}
const saveNotes=(notes)=>{

    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const loadNotes=()=>{
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }
    catch(er){
    return []
    }
}
const Listnotes=()=>{
    console.log(chalk.yellow.inverse('YOUR NOTES'))
    const notes=loadNotes()
    notes.forEach((note)=>{
        console.log(note.title+"----"+note.body)
    })
}
const readNote=(title)=>{
    const notes=loadNotes()
    const FoundNote=notes.find((note)=>note.title===title)
    if(FoundNote){
        console.log(chalk.green.inverse(title)+" --- "+ FoundNote.body)
    }
    else
    console.log(chalk.red.inverse('NOT FOUND'))
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    Listnotes:Listnotes,
    readNote:readNote
}