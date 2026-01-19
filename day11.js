let numbers = [1, 2, 3, 4];

let squares = numbers.map((num) => num * 2);

console.log(squares);
console.log(numbers);

let ages = [12, 18, 22, 15, 30];

let adults = ages.filter((age) => age >= 18);

console.log(adults);

let prices = [100, 200, 300];

let total = prices.reduce((sum, price) => sum + price, 0);

// iteration 1 => 0 + 100 = 100

// iteration 2 => 100 + 200 = 300

// iteration 3 => 300 + 300 = 600

console.log(total);

// Student Marks Processor

// array of marks

//  map => add grace marks
//  filter => to find pass students
//  reduce => to calculate  class avg
