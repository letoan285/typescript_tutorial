import thing = require('./animal');

class Greeter extends thing.Things.Animal {
    greeting: string;
    age: number;
    constructor(message: string) {
        super();
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    add(){
        return this.age * 5;
    }
    doThing(){
        return "i love " + this.move();
    }
}

let greeter = new Greeter("world");
greeter.age = 20;
console.log(greeter.add);
console.log(greeter.doThing());