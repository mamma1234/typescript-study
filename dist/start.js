"use strict";
const person = {
    name: "dahyun",
    age: 22,
    gender: "female"
};
const sayHi = (person) => {
    const { name, age, gender } = person;
    return `1 hello ${name}, you are ${age}, you are a ${gender}!`;
};
console.log(sayHi(person));
class Human1 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    ;
}
const human1 = new Human1("park", 18, "female");
const sayHi1 = (person) => {
    // person.getAge();
    return `2 hello ${person.name}, , you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi1(person));
//# sourceMappingURL=start.js.map