"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    /*
    constructor(name:string, age:number, gender?:string){
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }*/
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
const moon = new Human();
moon.name = "moon";
moon.gender = "male";
moon.setAge(18);
const sayHi = (person) => {
    return `Hello ${person.name}. you are ${person.getAge()}, you are a ${person.gender}!!`;
};
console.log(sayHi(moon));
//# sourceMappingURL=index.js.map