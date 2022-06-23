"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person1 {
    getName() {
        console.log(this.name);
    }
}
let p1 = new Person1();
p1.name = 'zhufeng';
p1.getName();
// 定义存取器
class User {
    constructor(myName) {
        this.myName = myName;
    }
    get name() {
        return this.myName;
    }
    set name(val) {
        this.myName = val;
    }
}
let user = new User('zhufeng');
user.name = 'jiagou';
console.log(user.name);
class Animal {
    constructor(name) {
        this.name = name;
    }
    changeName(name) {
        this.name = name;
    }
}
