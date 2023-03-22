class Note{
    title :string;
    content :string;
    
    constructor(title :string, content :string ){
        this.title = title;
        this.content = content
    }

    // addNote(title :string, content :string){
    //     this.title = title;
    //     this.content = content
    // }
}

class NoteList{
    notelist: Note[] =[];

    addNoteToList(note: Note){
        this.notelist[this.notelist.length] = note
    }

}

let note1 = new Note('1', 'do smt')
let note2 = new Note('2', 'dont do smt')

// let note1 = new Note()
// note1.addNote('1', 'do smt')

// let note2 = new Note
// note2.addNote('2', 'dont do smt')

let notelist = new NoteList()
notelist.addNoteToList(note1)
notelist.addNoteToList(note2)

console.log(notelist.notelist);
