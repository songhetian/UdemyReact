// let b = "rest" as const;
// b = "123";
// const obj: { readonly name: "rest" } = {
//   name: b,
// } as const;
//
// console.log(obj);

interface Router extends a {
  path: "/system";
  name: "_home";
}

type a = {};

// type ValueOf<T> =

interface Person {
  name: string;
  // age: number;
}

type student = Person[keyof Person];

let stu: student = 123;
console.log(stu);