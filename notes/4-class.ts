class Person {
    name: string;
    private type!: string; // Can be fixed with `type!:` or `string | udnefined` (@see [TypeScript 2.7](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html))
    protected age: number = 27;

    // `public username` is a TypeScript shortcut to create
    // a new property in the class and initialized it
    // (no need for this.username = username)
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Old Guy")
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Max", "max"); 
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // Won't work with private method

// Inheritance
class Max extends Person {
    // name = "Max"
    constructor(username: string) {
        super("Max", username);
        this.age = 31;
    }
}
const max = new Max("max");
console.log(max);

// Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this.species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// Satic Properties & Methods
class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    } 
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract CLasses
abstract class Project {
    projectName: string = "Default";
    budget: number = 100;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// Private Constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = "Something else";