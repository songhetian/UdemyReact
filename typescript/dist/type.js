"use strict";
// @ts-ignore
const Person = {
    name: "John",
    age: 30,
    isMarried: false,
    hobbies: ["reading", "swimming", "traveling"],
};
console.log(Person);
const Say = (user) => {
    return user;
};
console.log(Say(Person));
const Student = {
    name: "John",
    age: 18,
};
console.log(Student.class);
const Teacher = {
    name: "John",
    age: 30,
    subject: ["Math", "Science", "English"],
};
console.log(Teacher.subject);
const John = {
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
var key;
(function (key) {
    key[key["name"] = 0] = "name";
    key[key["age"] = 1] = "age";
})(key || (key = {}));
const Code = {
    name: '{ name: "John", age: 18 }',
};
const Code1 = {
    age: 12,
};
const code2 = {
    name: "John",
    age: 30,
    hobbies: ["reading", "swimming", "traveling"],
};
const code3 = {
    name: [
        { name: "John", age: 18 },
        { name: "Science", age: 2 },
    ],
};
//泛型
function fnc1(args) {
    return args;
}
fnc1(100);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQSxhQUFhO0FBQ2IsTUFBTSxNQUFNLEdBQVk7SUFDdEIsSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsRUFBRTtJQUNQLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO0NBQzlDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXBCLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBYSxFQUFXLEVBQUU7SUFDckMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBUXpCLE1BQU0sT0FBTyxHQUFnQjtJQUMzQixJQUFJLEVBQUUsTUFBTTtJQUNaLEdBQUcsRUFBRSxFQUFFO0NBQ1IsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBUzNCLE1BQU0sT0FBTyxHQUFnQjtJQUMzQixJQUFJLEVBQUUsTUFBTTtJQUNaLEdBQUcsRUFBRSxFQUFFO0lBQ1AsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Q0FDeEMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBVTdCLE1BQU0sSUFBSSxHQU9OO0lBQ0YsSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsR0FBRztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQzVCLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLEtBQUs7Q0FDWixDQUFDO0FBRUYsZ0NBQWdDO0FBQ2hDLDJFQUEyRTtBQUMzRSxJQUFJO0FBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQU9sQixJQUFLLEdBR0o7QUFIRCxXQUFLLEdBQUc7SUFDTiw2QkFBTSxDQUFBO0lBQ04sMkJBQUssQ0FBQTtBQUNQLENBQUMsRUFISSxHQUFHLEtBQUgsR0FBRyxRQUdQO0FBRUQsTUFBTSxJQUFJLEdBQTRCO0lBQ3BDLElBQUksRUFBRSwyQkFBMkI7Q0FDbEMsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUE0QjtJQUNyQyxHQUFHLEVBQUUsRUFBRTtDQUNSLENBQUM7QUFFRixNQUFNLEtBQUssR0FBK0M7SUFDeEQsSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsRUFBRTtJQUNQLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO0NBQzlDLENBQUM7QUFFRixNQUFNLEtBQUssR0FBZ0M7SUFDekMsSUFBSSxFQUFFO1FBQ0osRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7UUFDekIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7S0FDNUI7Q0FDRixDQUFDO0FBRUYsSUFBSTtBQUNKLFNBQVMsSUFBSSxDQUFJLElBQU87SUFDdEIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsSUFBSSxDQUFTLEdBQUcsQ0FBQyxDQUFDIn0=