export {}

class Father {
  public name:string;
  protected age: number
  private money:number;
  constructor(name:string, age:number, money:number) {
    this.name = name;
    this.age = age; 
    this.money = money;
  }
  getName():string {
    return this.name;
  }
}

class Child extends Father {
  constructor(name:string, age:number, money:number) {
    super(name, age, money);
  }
  desc() {
    console.log(`${this.name} is ${this.age} years old, ${this.money}`);
  }
}

let child = new Child('zhufeng', 18, 100);

console.log(child.getName());

console.log(child.age);

