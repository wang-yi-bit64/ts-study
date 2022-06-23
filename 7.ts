export {};
// namespace a{
//   @addNameEatFarcory('zhufeng')
//   class Person {
//     constructor(public name:string, public age:number) {

//     }
//   }
// }

// function addNameEatFarcory(name:string) {
//   return function addNameEar(x:Function) {
//     x.prototype.name = name;
//     x.prototype.eat = function() {
//       console.log(`${this.name} is eating`);
//     }
//   }
// }

// function addNameEat(constructor:Function) {
//   constructor.prototype.name = 'zhufeng';
//   constructor.prototype.eat = function() {
//     console.log(this.name);
//   }
// }

// namespace b {
//   function addNameEat(constructor:Function) {
//     constructor.prototype.name = 'zhufeng';
//     constructor.prototype.eat = function() {
//       console.log(this.name);
//     }
//   }
//   @addNameEat()
//   class Person {
//     constructor(public name:string, public age:number) {
//       this.age = age;
//       this.name = name;
//     }
//   }

//   let p:Person = new Person("zhufeng", 18);

//   console.log(p.name);
//   p.eat('zhufeng');

// }

// namespace c {
//   // 可以多不可以少
//   // 保证类型安全
//   function replaceClass(x: Function) {
//     return class {
//       name!: string;
//       eat!: Function;
//       age!: number;
//       constructor() {}
//     };
//   }
//   class Person {
//     // @replaceClass()
//     name!: string;
//     eat!: Function;
//     constructor() {}
//   }
//   let p: Person = new Person();
//   console.log(p.name);
//   p.eat();
// }

namespace d {
  function upperCase(target: any, propertyKey: string) {
    let val = target[propertyKey];
    const getter = () => val;
    const setter = (newVal: string) => {
      val = newVal.toUpperCase();
    };
    if (delete target[propertyKey]) {
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    }
  }

  function staticPropertyDecorator(target: any, propertyKey: string) {
    console.log(target,propertyKey);
  }
  function noEnumberable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target,propertyKey);
    descriptor.enumerable = false;
  }
  function toNumber(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let oldMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      args = args.map(item => parseFloat(item))
      return oldMethod.apply(this, args);
    }
  }

  class Person {
    @upperCase
    name: string = "zhufeng"; // 实例属性
    @staticPropertyDecorator
    static age: number = 18; // 静态属性
    @noEnumberable
    getName() {
      console.log(this.name);
    } // 实例方法
    @toNumber
    sum(...args:any []) {
      return args.reduce((pre: number, cur: number) => pre + cur, 0);
    }
  }
  let p: Person = new Person();
  console.log(p.name);
  console.log(p.sum("1", "2", "3"));
  
}

// 参数装饰器
namespace e {
  // 手写 IOC
  // 在 IOC容器里边大放异彩 , nest.js 大量使用参数装饰器
  // target: 当前被装饰的类 
  // methodName: 方法名称
  // parameterIndex: 当前被装饰的方法的参数索引
  function addAge(target: any, methodName: any, index: number) {
    console.log(target, methodName, index);
    target.age = 10
  }

  class Person {
    age!:number;
    login(username: string, @addAge pwd:string) {
      console.log(username,pwd, this.age);
    }
  }
  let p = new Person()
  p.login('zhufeng', '123456')
}


// 装饰器执行顺序
namespace f {
  function ClassDecorator1 () {
    return function (target: any) {
      console.log('ClassDecorator1', target);
    }
  }
  function classDecorator2 () {
    return function (target: any) {
      console.log('classDecorator2', target);
    }
  }
  function PropertyDecorator(name:string) {
    return function (target:any, propertyKey:string) {
      console.log("PropertyDecorator",target, propertyKey, name);
    }
  }
  function MehotdDecorator() {
    return function (target:any, propertyKey:string) {
      console.log("MehotdDecorator",target, propertyKey);
    }
  }
  function ParameterDecortor() {
    return function (target:any, propertyKey:string, parameterIndex:number) {
      console.log("ParameterDecortor",target, propertyKey, parameterIndex);
    }
  }



  @ClassDecorator1()
  @classDecorator2()
  class Person {
    @PropertyDecorator("name")
    name!:string;
    @PropertyDecorator("age")
    age!:number;
    @MehotdDecorator()
    hello(@ParameterDecortor() p1:string,@ParameterDecortor() p2:string) {
    }
  }
  let p = new Person()
}

/**
 * 执行的顺序
 * 1.类装饰器最后执行  后写的先执行
 * 2.方法和参数中的装饰器 新执行参数,在执行方法
 * 3.属性装饰器 谁在前面就先执行谁
 * 
 * 一般 从内往外执行, 内部的装饰器执行完后, 再执行外部的装饰器
 * 类组件 componentDidMount() 先下后上 先内后外 
 */