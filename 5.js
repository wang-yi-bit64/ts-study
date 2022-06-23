"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Father {
    constructor(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    getName() {
        return this.name;
    }
}
class Child extends Father {
    constructor(name, age, money) {
        super(name, age, money);
    }
    desc() {
        console.log(`${this.name} is ${this.age} years old, ${this.money}`);
    }
}
let child = new Child('zhufeng', 18, 100);
console.log(child.getName());
console.log(child.age);
