// type AddFm = (a: number, b: number) => void;
interface AddFm {
    (a: number, b: number): number;
}


let addFm: AddFm;

addFm = (a: number, b: number) => {
    return a + b;
}

// Defines the basic structure of object
interface Named {
    readonly name?: string;
    optionalParam?: string;
}
interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {
    name?: string;
    age: number = 30;

    constructor(n?: string) {
        if(n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Ravi'; // Cannot assign to 'name' because it is a read-only property
user1.greet('My name is');