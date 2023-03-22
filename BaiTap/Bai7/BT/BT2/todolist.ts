class ToDo{
    date :number;
    words :string[]=[];
    
    constructor(date :number, words :string[] ){
        this.date = date;
        this.words = words
    }
}

class ToDoList{
    todoList: ToDo[] = [];

    addToDoToList(todo: ToDo){
        
        let check = this.todoList.some((Todo)=>{
            return Todo.date === todo.date
        })
        
        if (check === false) {
            this.todoList[this.todoList.length] = todo
        } else console.log("this ToDo is already on the list");
    }

    deleteTodofromList(todo: ToDo){
        
        this.todoList.map((Todo,index)=>{
            if (Todo.date === todo.date && Todo.words === todo.words){
                return this.todoList.splice(index,1)
            } 
            // return console.log("this ToDo isn't on the list");
        })
        
    }
}

let todo1 = new ToDo(3, ['do1', 'smt1'])
let todo2 = new ToDo(5, ['do2', 'smt2'])
let todo3 = new ToDo(15, ['do3', 'smt3'])
let todo4 = new ToDo(10, ['do4', 'smt4'])
let todo5 = new ToDo(15, ['do5', 'smt5'])

let todolist = new ToDoList()
todolist.addToDoToList(todo1)
todolist.addToDoToList(todo2)
todolist.addToDoToList(todo3)
todolist.addToDoToList(todo4)
todolist.addToDoToList(todo5)

console.log(todolist.todoList);

todolist.deleteTodofromList(todo5)
todolist.deleteTodofromList(todo2)

console.log(todolist.todoList);

