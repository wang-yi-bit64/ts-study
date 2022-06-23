"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
        console.log(this.name);
    }
    getAge() {
        return this.age;
        console.log(this.age);
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
class Student extends Person1 {
    constructor(name, age, number, stuNo) {
        super(name, age);
        this.number = number;
        this.stuNo = stuNo;
    }
    getStuNo() {
        return this.stuNo;
    }
}
