type useType = {
  name: string;
  age: number;
  isMarried: boolean;
  hobbies: string[];
};

// @ts-ignore
const Person: useType = {
  name: "John",
  age: 30,
  isMarried: false,
  hobbies: ["reading", "swimming", "traveling"],
};

console.log(Person);

const Say = (user: useType): useType => {
  return user;
};

console.log(Say(Person));

type studentType = {
  name: string | number;
  age: number;
  class?: number;
};

const Student: studentType = {
  name: "John",
  age: 18,
};

console.log(Student.class);

type TeacherType = {
  name: string;
  age: number;
  subject: string[];
  // [index: string]: number;
};

const Teacher: TeacherType = {
  name: "John",
  age: 30,
  subject: ["Math", "Science", "English"],
};

console.log(Teacher.subject);

//interface
interface PersonInterface {
  name: string;
  age: number;
  isMarried: boolean;
  hobbies: string[];
}

const John: {
  isMarried: boolean;
  love: string;
  hobbies: string[];
  like: number;
  name: string;
  age: number;
} = {
  name: "john",
  age: 100,
  isMarried: false,
  hobbies: ["as", "cc", "ddd"],
  like: 1000,
  love: "dam",
};

// for (const johnKey in John) {
//   console.log(`${johnKey} : ${John[johnKey as keyof PersonInterface]}`);
// }

console.log(John);

type CodeValue = {
  name: string;
  age: number;
};

enum key {
  "name",
  "age",
}

const Code: Pick<CodeValue, "name"> = {
  name: '{ name: "John", age: 18 }',
};

const Code1: Omit<CodeValue, "name"> = {
  age: 12,
};

const code2: Record<string, string | number | string[]> = {
  name: "John",
  age: 30,
  hobbies: ["reading", "swimming", "traveling"],
};

const code3: Record<string, CodeValue[]> = {
  name: [
    { name: "John", age: 18 },
    { name: "Science", age: 2 },
  ],
};

//泛型
function fnc1<T>(args: T): T {
  return args;
}

fnc1<number>(100);