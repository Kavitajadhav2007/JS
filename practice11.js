// Array of student marks
let marks = [35, 78, 42, 90, 28, 60];

let graceMarks = marks.map((mark) => mark + 5);

console.log("After Grace Marks:", graceMarks);

let passStudents = graceMarks.filter((mark) => mark >= 40);

console.log("Pass Students:", passStudents);

let classAverage =
  graceMarks.reduce((total, mark) => total + mark, 0) / graceMarks.length;

console.log("Class Average:", classAverage.toFixed(2));
