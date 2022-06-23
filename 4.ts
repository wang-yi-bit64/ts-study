export {};

class Person1 {
  name:string;
  age:number;
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
  getName():string {
    return this.name;
    console.log(this.name);
  }
  getAge():number {
    return this.age;
    console.log(this.age);
  }
  setName(name:string):void {
    this.name = name;
  }
  setAge(age:number):void {
    this.age = age;
  }
}
class Student extends Person1 {
  stuNo:number; 
  constructor(name:string, age:number, public number:number, stuNo:number) {
    super(name, age);
    this.stuNo = stuNo;
  }
  getStuNo():number {
    return this.stuNo;
  }
}

