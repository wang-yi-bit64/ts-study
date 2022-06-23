"use strict";
/*
 * @Author: wangyi
 * @Description:
 * @Date: 2022-04-28 20:19:02
 * @LastEditTime: 2022-04-29 20:00:07
 */
let a = 1;
let married = true;
let fist_name = "zhangsan";
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
// 元祖 tuple 数量和类型必须一致
let zhufeng = ['zhufeng', 18];
// 枚举
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender.BOY);
console.log(Gender.GIRL);
let myColor = [0 /* RED */, 1 /* GREEN */, 2 /* BLUE */];
// 任意类型
// any
// 如果变量定义为any类型,就跟JS差不多 不进行类型检查
let root = document.getElementById("root");
root.style.color = "red";
let element = document.getElementById("root");
// 非空断言
element.style.color = "red";
// null 和 undefined是其他类型的子类型
// strictNullChecks 开启严格的空值检查,默认关闭,可以通过--strictNullChecks关闭
// never类型
// never类型表示的是那些永不存在的值的类型
function error(message) {
    throw new Error(message);
    console.log(message);
}
function loop() {
    while (true) {
    }
    console.log("never");
}
function fn(x) {
    if (typeof x === "number") {
        console.log(x);
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log(x); // never
    }
}
// void 类型 和 never类型的区别
// 函数没有返回值,所以类型为void
// strictNullChecks false 时,null和undefined也是其他类型的子类型
function greeting() {
    console.log("hello");
}
// void never
// void 可又被赋值为null undefined,never可以赋值为null undefined,never 不能赋值为其他类型
// 返回值为never的函数必须存在无法达到的终点,切函数无法被执行到终点
const s1 = Symbol("s1");
const s2 = Symbol("s1");
// console.log(s1 === s2);
// BigInt
// 使用BigInt类型表示大数字
const max = Number.MAX_SAFE_INTEGER; // 2^53-1
const max1 = BigInt(max) + BigInt(1);
console.log(max + 1 === max + 2, max1);
// number和 BigInt 的区别
// number 可以表示任意数字,但是不能表示负数
// BigInt 可以表示任意数字,包括负数
// 类型推导
let uname;
uname = "zhufeng";
uname = 1;
uname = true;
uname = null;
uname = undefined;
uname = Symbol("s1");
uname = {};
uname = [];
let uname1 = "zhufeng";
// uname1 = 1;
// uname1 = true;
// 包装对象 wrapper object
// 包装对象是一个对象,它的属性和值都是原始类型的值  
// 包装对象的属性和值都是原始类型的值
// 对象类型
// 对象类型是指那些具有属性的类型,比如数组,对象,函数等
// 对象类型的属性和值都是原始类型的值
console.log(uname1.toLocaleLowerCase()); // 包装对象
let isOk = true;
// let isOk2:boolean = new Boolean(true);
let isOk3 = Boolean(1);
// 联合类型
let name3;
console.log(name3.toString());
name3 = 3;
console.log(name3.toFixed(2));
name3 = "zhufeng";
console.log(name3.length);
// 类型断言
let name4 = "zhufeng";
console.log(name4.toFixed(2));
console.log(name4.toUpperCase());
console.log(name4);
// 字面量类型 和类型字面量
const up = "UPPER";
function move(direction) {
    console.log(direction);
}
move("UP");
// 类型推导
