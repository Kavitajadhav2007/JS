// let pattern = /abc/; //regular expression

// console.log(pattern.test("abcdef"))



// let pattern = /^A/

// let pattern = /a$/

// let pattern = /a.c/

// * 0 or More


// let pattern = /ra*/   

// + 1 or More

// let pattern = /a+/   

// colour or color 

// ? optional 

// let pattern = /colou?r/   

// console.log(pattern.test("color"))
// console.log(pattern.test("colour"))
// console.log(pattern.test("roloc"))




// console.log(pattern.test("Atharvac"))

// console.log(pattern.test("Ved"))

// console.log(pattern.test("Asmita"))

// console.log(pattern.test("aryan"))

// console.log(pattern.test("abc"))

// console.log(pattern.test("abbc"))

// console.log(pattern.test("a1c"))





// let isNumber = /[0-9]/

// console.log(isNumber.test("a1"))

let isChar = /[a-zA-Z]/

console.log(isChar.test("A1"))

// {min , max}

let isNumber = /[0-9]{10}/

console.log(isNumber.test("11"))

console.log(isNumber.test("111"))

console.log(isNumber.test("11111"))

console.log(isNumber.test("1111111111e"))