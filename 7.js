"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var a;
(function (a) {
    let Person = class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    };
    Person = __decorate([
        addNameEatFarcory('zhufeng')
    ], Person);
})(a || (a = {}));
function addNameEatFarcory(name) {
    return function addNameEar(x) {
        x.prototype.name = name;
        x.prototype.eat = function () {
            console.log(`${this.name} is eating`);
        };
    };
}
function addNameEat(constructor) {
    constructor.prototype.name = 'zhufeng';
    constructor.prototype.eat = function () {
        console.log(this.name);
    };
}
var b;
(function (b) {
    function addNameEat(constructor) {
        constructor.prototype.name = 'zhufeng';
        constructor.prototype.eat = function () {
            console.log(this.name);
        };
    }
    let Person = class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.age = age;
            this.name = name;
        }
    };
    Person = __decorate([
        addNameEat()
    ], Person);
    let p = new Person("zhufeng", 18);
    console.log(p.name);
    p.eat('zhufeng');
})(b || (b = {}));
var c;
(function (c) {
    // 可以多不可以少
    // 保证类型安全
    function replaceClass(x) {
        return class {
            constructor() { }
        };
    }
    let Person = class Person {
        constructor() { }
    };
    Person = __decorate([
        replaceClass
    ], Person);
    let p = new Person();
    console.log(p.name);
    p.eat();
})(c || (c = {}));
