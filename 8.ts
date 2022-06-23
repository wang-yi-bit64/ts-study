// 抽象类
// 抽象类不能被实例化，只能被继承
// 抽象类中的抽象方法必须被子类实现 
// 抽象类中的抽象方法不能有具体的实现
abstract class Animal {
  name!:string;
  abstract speak():void;
}

class cat extends Animal {
  speak():void {
    console.log('miao miao');
  }
} 

class Dog extends Animal {
  speak():void {
    console.log('wang wang');
  }
}

/**
 * 重写(override)
 * 子类重写父类的方法，必须先用super调用父类的方法，再实现子类的方法
 * 重载(overload)
 * 同一个类中，方法的名称相同，参数不同，可以重载 
 */

function double(val:any) {
  if(typeof val === 'number') {
    return val * 2;
  } else if(typeof val === 'string') {
    return val + val;
  }
}
double(1);
double('1');