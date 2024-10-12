function test(a, b) {
    return a + b;
}

const res = test(22, 2);

res;


const arr = [1, 2, 3, 4];

const newArr = arr.map((v, k) => v + k);

newArr;

const obj = {
    name: 'foo',
    age: 42,
    title: 'bar',
}

const newObj = {...obj};
newObj;

const { name: name1, age, title } = obj;

name1; // 'foo'
age; // 42
title; // 'bar'

const [v1, v2, ...v3] = arr;

v1; // 1
v2; // 2
v3; // 3

const flag = 0 && 1 && false;
const flag1 = false || 0 || true;
flag;
flag1;

const x = 5;
const y = 10;
const result = x ?? y;
result;

const name = newObj?.name;

const r = arr.includes(1);
r;

const m = new Map();
m.set(name,'12334');
m.set(age,'456');
m;
m.has('name');


const objEntries = Object.entries(obj);

objEntries;

const SortArr = [100,200,5,5000,456,123];
const s  = SortArr.sort((a,b) => b - a);
s;

s.splice(0,0,234);
s;//
SortArr;
const s1 = s.slice(0,3);
s1;
s;
SortArr;
const Books = [
    {name: 'book1',page:10},
    {name: 'book2',page:100},
    {name: 'book3',page:130},
    {name: 'book4',page:510},
    {name: 'book5',page:11},
];

const sBook = Books.sort((a,b)=> a.page -  b.page);

sBook;

fetch("url",{
    method : "POST",
    body:"",
    headers : {
        'Content-type':'application/json'
    }
})