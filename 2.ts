
function hello(name:string):void {
  console.log(`hello ${name}`);
}

hello("zhufeng");

type GetName = (fist_name:string, last_name:string) => string;

let getName:GetName = (fist_name, last_name) => {
  return fist_name + last_name;
}

function print(name:string, age?:number):void {
  console.log(name, age);
}

function ajax(url:string,method:string = "GET") {
  console.log(url, method);
}
ajax("/user/list");

let obj:any = {}

function attr(val:string):void
function attr(val:number):void

function attr(val:any):void {
  if(typeof val === 'string') {
    obj.name = val
  } else if(typeof val === 'number') {
    obj.age = val
  }
}

