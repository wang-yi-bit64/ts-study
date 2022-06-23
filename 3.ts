export {}
class Person1 {
  name:string | undefined
  getName():void {
    console.log(this.name);
  }
}

let p1 = new Person1();
p1.name = 'zhufeng';
p1.getName();

// 定义存取器

class User {
  constructor(public myName:string) {

  }
  get name():string {
    return this.myName;
  }
  set name(val:string) {
    this.myName = val;
  }
}

let user = new User('zhufeng');
user.name = 'jiagou';
console.log(user.name);

class Animal {
  public readonly name:string;
  constructor(name:string) {
    this.name = name;
  }

  changeName(name:string):void {
    this.name = name;
  }
}


