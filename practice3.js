let student = {
  Name: "Riya",
  rollno: 22,
  marks: 92,
};
console.log(student);

let subject = [
  "science",
  "mathematics",
  "geography",
  "history",
  "physics",
  "chemistry",
];

console.log(subject[6]);

for (let i = 0; i < subject.length; i++) {
  console.log(subject[i]);
}

subject.push("java"); //add alement at end

console.log(subject);

subject.unshift("python"); //add element at start

console.log(subject);

// subject.pop();
// console.log(subject);
