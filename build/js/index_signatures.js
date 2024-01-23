"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//todaysTransactions.Pizza = 40
console.log(todaysTransactions["Dave"]); //it should return number // undefined
let student = {
    name: "John",
    GPA: 3.5,
    classes: [101, 102, 201],
};
for (let key in student) {
    console.log(`${key} :  ${student[key]}`);
}
// console.log(Object.keys(student));
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: "250",
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
