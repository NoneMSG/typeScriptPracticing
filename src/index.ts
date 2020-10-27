class Human{
    public name:string;
    private age :number;
    public gender:string;
    /*
    constructor(name:string, age:number, gender?:string){
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }*/
    getAge(){
        return this.age;
    }
    setAge(age:number){
        this.age = age;
    }
}

const moon = new Human();
moon.name="moon";
moon.gender="male";
moon.setAge(18);
const sayHi = (person : Human):string =>{
    return `Hello ${person.name}. you are ${person.getAge()}, you are a ${person.gender}!!`;
};
    
console.log(sayHi(moon));
 
export {};

