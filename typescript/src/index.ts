let aaa: string = "Hello World";

console.log(aaa);

let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

let arr2: Array<string> = ["apple", "banana", "orange"];
let arr3: string[] = ["apple", "banana", "orange"];

let tuple: [string, number] = ["apple", 10];

let tuple2: [string, string][] = [
  ["apple", "banana"],
  ["orange", "grape"],
];

let obj: { name: string; age: number } = { name: "John", age: 30 };

let obj2: { [key: string]: number } = { apple: 10, banana: 20, orange: 30 };

let union: string | number = "Hello";

// @ts-ignore
type Person = { readonly name: string; age: number };
let person: Person = { name: "John", age: 30 };

let anyVar: any = "Hello World";

interface PersonInterface {
  name: string;
  age: number;
}

interface PersonInterface {
  address?: string; //?表示可选属性
}

//type和interface的区别：type是类型别名，interface是接口定义。
//type是不可以扩充得 interface可以。
//function
function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20);
console.log(result);

//断言

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as Data;
}

const data1: Data = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

const data2 = data1 as unknown as Data;

//class
class PersonClass {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new PersonClass("John", 30);

//泛型
function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>("Hello World");
const result2 = identity<number>(10);

class Animal<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}

// Record<K, T> 用来表示一个对象，其中每个属性的类型都是 T，属性的名称是 K。

// Pick<T, K> 用来从 T 中选择属性 K。

// Omit<T, K> 用来从 T 中剔除属性 K。

class PersonClass2 {
  constructor(public readonly name: string, public age: number) {}
}

const person2 = new PersonClass2("John", 30);

//readonly修饰符使得属性只能在构造函数中被赋值一次。

// 泛型约束

enum AnimalType {
  DOG,
  CAT,
  BIRD,
  FISH,
}

let animals: AnimalType = 1;

console.log(animals);