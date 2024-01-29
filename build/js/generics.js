"use strict";
function getFirstElememt(array) {
    return array[1];
}
const numbers = [1, 2, 3];
const firstNum = getFirstElememt(numbers);
console.log(firstNum); // 1
const strings = ["sdf", "sdr"];
const firstString = getFirstElememt(strings);
console.log(firstString); // "sdf"
//We use genetic type from beginning
//Example1
const input = document.querySelector(".input");
input === null || input === void 0 ? void 0 : input.value;
//Example2
const a = [1, 2, 3];
a.map(() => { }); //<void>
a.map(() => {
    return "return string";
}); //<string>
//Example3
const map1 = new Map();
map1.set("sfg", 6);
console.log(map1);
//Example3.1
const map1_1 = new Map([["try0", 0]]);
map1_1.set("try1", 1);
console.log(map1_1);
//Example4 Directly Set Array in Parameter.
const map2 = new Map([["try2", 2]]);
map2.set("try3", 3);
console.log(map2);
//Example of Map.set
const myMap = new Map();
// Set key-value
myMap.set("name", "John");
myMap.set("age", 25);
// Set key-value
myMap.set("age", 26);
// Check Value
console.log(myMap.get("name")); // show "John"
console.log(myMap.get("age")); // show 26
const response = {
    data: {
        name: "kyle",
        age: 28,
    },
    isError: false,
};
const response1 = {
    data: {
        name: "kyle",
        age: 28,
    },
    isError: false,
};
const response2 = {
    data: {
        name: "kyle",
        age: 28,
    },
    isError: false,
};
const response3 = {
    data: {
        title: "kyle",
    },
    isError: false,
};
const response4 = {
    data: {
        status: 200,
    },
    isError: true,
};
const response5 = {
    data: {
        name: "200",
    },
    isError: true,
};
const response6 = {
    data: {
        status: 200,
    },
    isError: true,
};
const response7 = {
    data: {
        status: 200,
    },
    isError: true,
};
