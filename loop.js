// Week 2 - Loops Practice

for (let i = 0; i < 5; i++) {
  console.log("For Loop:", i);
}

let count = 0;
while (count < 5) {
  console.log("While Loop:", count);
  count++;
}

const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log(fruit);
}

const person = { name: "Lerato", age: 20, city: "Polokwane" };
for (const key in person) {
  console.log(key, ":", person[key]);
}

for (let i = 1; i <= 10; i++) {
  if (i === 3) continue;
  if (i === 7) break;
  console.log(i);
}
