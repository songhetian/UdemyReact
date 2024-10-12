// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], 13, 14];



// const newArr = arr.flat();

// newArr;

// function flatArr(arr) {
//     const newArr = [];
//     for (const el of arr) {
//         if (Array.isArray(el)) {
//             newArr.push(...flatArr(el));
//         } else {
//             newArr.push(el);
//         }
//     }

//     return newArr;
// }

// const a = flatArr(arr);
// a;

// arr;
// function flatArray(arr) {
//     const result = [];
//     arr.reduce((prev, cur) => {
//         if (Array.isArray(cur)) {
//             result.push(...cur);
//         } else {
//             result.push(cur);
//         }
//     }, []);

//     return result;

// }

// const b = flatArray(arr);
// b;

// function flat(arr) {
//     return arr.reduce((acc, val) => {
//         if (Array.isArray(val)) {
//             // 如果当前元素是数组，递归调用 flat 函数
//             acc.push(...flat(val));
//         } else {
//             // 如果当前元素不是数组，直接添加到结果数组中
//             acc.push(val);
//         }
//         return acc;
//     }, []);
// }

// // 使用示例
// const arr1 = [1, [2, [3, [4]], 5]];
// console.log(flat(arr1)); // 输出: [1, 2, 3, 4, 5]

const a = (cb) => {
    setTimeout(() => {
        cb(Math.random());
    }, 1000);
}

const cb = (val) => {
    console.log(val);

    return Promise.resolve(val);
}

const b = () => {
    return Promise.resolve(a(cb));
}

b().then(res => {
    //res为函数a中cb回调的参数值 即 res === Math.random()的值得
    console.log(res);
});

function test() {
    return Promise.resolve(1);
}

test().then(res => {
    console.log(res);
});

async function test2() {
    const res = await test();
    console.log(res);
}

const res1 = test2();

res1;




