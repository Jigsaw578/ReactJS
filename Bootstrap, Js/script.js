import {Animal} from "./index.js"
class cats extends Animal {
    constructor(name, age, whiskercoler){
        super(name, age)
        this.whiskercoler = whiskercoler
    }
    whisker(){
        return `i have ${this.whiskercoler}`
    }
}
console.log(33, new cats("vinh", "4", "black"));