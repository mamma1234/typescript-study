// index.ts
interface Human {
    name: string,
    age: number,
    gender: string  
}

const person = {
    name: "dahyun",
    age: 22,
    gender: "female"
}

const sayHi = (person: Human): string => {
    const { name, age, gender } = person;
    return `1 hello ${name}, you are ${age}, you are a ${gender}!`;
};
 
console.log(sayHi(person));

class Human1 {
    public name:string;
    public age:number;
    public gender:string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    };
    // getAge(){
    //     return this.age;
    // };
}


const human1 = new Human1("park", 18, "female");

const sayHi1 = (person: Human1): string => {
    // person.getAge();
    return `2 hello ${person.name}, , you are ${person.age}, you are a ${person.gender}!`;
};
 
console.log(sayHi1(person));