"use strict";
function hello(name) {
    console.log(`hello ${name}`);
}
hello("zhufeng");
let getName = (fist_name, last_name) => {
    return fist_name + last_name;
};
function print(name, age) {
    console.log(name, age);
}
function ajax(url, method = "GET") {
    console.log(url, method);
}
ajax("/user/list");
let obj = {};
function attr(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else if (typeof val === 'number') {
        obj.age = val;
    }
}
