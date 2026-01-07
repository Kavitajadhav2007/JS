let fruits = ["Apple" , "Banana" , "Mango"];
// array


console.log(fruits);
console.log(fruits[0]);

console.log("Length of fruits is : " + fruits.length);

for( let i = 0 ; i< fruits.length ; i++)
{
    console.log(fruits[i]);
}


fruits.push("Oraange"); //add alement at end

console.log(fruits);

fruits.pop(); //delete last element

console.log(fruits);

fruits.unshift("Grapes"); //add element at start

console.log(fruits);

fruits.shift(); //delete start element

console.log(fruits);


// Objects


let student =
{
    Name : "Ved",
    age : 22,
    isStudent : true
}

// key : value

console.log(student.age);
console.log(student["Name"]);

student.age = 30;
console.log(student.age);

student.city = "Nashik";

console.log(student);

// array of objects

let students = 
[
    {Name : "A" , rollno : 23},
    {Name : "B" , rollno : 22},
    {Name : "C" , rollno : 21},
    {Name : "D" , rollno : 20}


]

console.log(students[4]);  

for( let i = 0 ; i< students.length ; i++)
{
    console.log(students[i].Name  + "  " + students[i].rollno);
}



// let heading = document.getElementById("title");

// console.log(heading);

// let para = document.getElementsByClassName("text")

// console.log(para[0]);


// DOM html structure js communication with html 

// document.getElementById single value cause id is unique
// document.getElementByClassName collection cause class can me multiple


// studentA
// {
//     name : ;
//     phone : ;
// }


// create a student object

// add name roll marks

// print all values

// arrays 

// create an array of 5 subjects

// prints all using loops 

// add one subject front and back

//  remove 1 subject from middle