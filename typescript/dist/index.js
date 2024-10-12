"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let aaa = "Hello World";
console.log(aaa);
let arr = [1, 2, 3, 4, 5];
console.log(arr);
let arr2 = ["apple", "banana", "orange"];
let arr3 = ["apple", "banana", "orange"];
let tuple = ["apple", 10];
let tuple2 = [
    ["apple", "banana"],
    ["orange", "grape"],
];
let obj = { name: "John", age: 30 };
let obj2 = { apple: 10, banana: 20, orange: 30 };
let union = "Hello";
let person = { name: "John", age: 30 };
let anyVar = "Hello World";
//type和interface的区别：type是类型别名，interface是接口定义。
//type是不可以扩充得 interface可以。
//function
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = (yield res.json());
    });
}
const data1 = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
};
const data2 = data1;
//class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new PersonClass("John", 30);
//泛型
function identity(arg) {
    return arg;
}
const result1 = identity("Hello World");
const result2 = identity(10);
class Animal {
    constructor(name) {
        this.name = name;
    }
}
// Record<K, T> 用来表示一个对象，其中每个属性的类型都是 T，属性的名称是 K。
// Pick<T, K> 用来从 T 中选择属性 K。
// Omit<T, K> 用来从 T 中剔除属性 K。
class PersonClass2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person2 = new PersonClass2("John", 30);
//readonly修饰符使得属性只能在构造函数中被赋值一次。
// 泛型约束
var AnimalType;
(function (AnimalType) {
    AnimalType[AnimalType["DOG"] = 0] = "DOG";
    AnimalType[AnimalType["CAT"] = 1] = "CAT";
    AnimalType[AnimalType["BIRD"] = 2] = "BIRD";
    AnimalType[AnimalType["FISH"] = 3] = "FISH";
})(AnimalType || (AnimalType = {}));
let animals = 1;
console.log(animals);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUksR0FBRyxHQUFXLGFBQWEsQ0FBQztBQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRWpCLElBQUksR0FBRyxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFakIsSUFBSSxJQUFJLEdBQWtCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN4RCxJQUFJLElBQUksR0FBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFbkQsSUFBSSxLQUFLLEdBQXFCLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRTVDLElBQUksTUFBTSxHQUF1QjtJQUMvQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDbkIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO0NBQ3BCLENBQUM7QUFFRixJQUFJLEdBQUcsR0FBa0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUVuRSxJQUFJLElBQUksR0FBOEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBRTVFLElBQUksS0FBSyxHQUFvQixPQUFPLENBQUM7QUFJckMsSUFBSSxNQUFNLEdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUUvQyxJQUFJLE1BQU0sR0FBUSxhQUFhLENBQUM7QUFXaEMsNkNBQTZDO0FBQzdDLDBCQUEwQjtBQUMxQixVQUFVO0FBQ1YsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQztBQUVELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQVdwQixTQUFlLE9BQU87O1FBQ3BCLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDeEUsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBUyxDQUFDO0lBQzFDLENBQUM7Q0FBQTtBQUVELE1BQU0sS0FBSyxHQUFTO0lBQ2xCLE1BQU0sRUFBRSxDQUFDO0lBQ1QsRUFBRSxFQUFFLENBQUM7SUFDTCxLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRyxLQUF3QixDQUFDO0FBRXZDLE9BQU87QUFDUCxNQUFNLFdBQVc7SUFJZixZQUFZLElBQVksRUFBRSxHQUFXO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FDVCxxQkFBcUIsSUFBSSxDQUFDLElBQUksYUFBYSxJQUFJLENBQUMsR0FBRyxhQUFhLENBQ2pFLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFNUMsSUFBSTtBQUNKLFNBQVMsUUFBUSxDQUFJLEdBQU07SUFDekIsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFTLGFBQWEsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBUyxFQUFFLENBQUMsQ0FBQztBQUVyQyxNQUFNLE1BQU07SUFHVixZQUFZLElBQU87UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBRUQsZ0RBQWdEO0FBRWhELDRCQUE0QjtBQUU1Qiw0QkFBNEI7QUFFNUIsTUFBTSxZQUFZO0lBQ2hCLFlBQTRCLElBQVksRUFBUyxHQUFXO1FBQWhDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFRO0lBQUcsQ0FBQztDQUNqRTtBQUVELE1BQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUU3QywrQkFBK0I7QUFFL0IsT0FBTztBQUVQLElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNiLHlDQUFHLENBQUE7SUFDSCx5Q0FBRyxDQUFBO0lBQ0gsMkNBQUksQ0FBQTtJQUNKLDJDQUFJLENBQUE7QUFDTixDQUFDLEVBTEksVUFBVSxLQUFWLFVBQVUsUUFLZDtBQUVELElBQUksT0FBTyxHQUFlLENBQUMsQ0FBQztBQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDIn0=