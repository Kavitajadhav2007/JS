let age = 17;

if(age >= 18)
{
    console.log("Eligible to Vote");
}
else
{
    console.log("Not Eligible to vote")
}

let score = 80;
// A > 90 B > 70 C < 70

if( score >= 90)
{
    console.log("Grade A");
}
else if ( score >= 70)
{
    console.log("Grade B");
}
else
{
    console.log("Grade C")
}


let day = 7

switch(day)
{
    case 1 : console.log("Monday")
    break;
    case 2 : console.log("Tuesday")
    break;
    case 3 : console.log("Wednesday")
    break;
    case 4 : console.log("Friday")
    break;
    default: console.log("Invalid Day")
}

// if else -> true false 

// switch -> any value 

if (day == 1)
{
    console.log("Monday")
}
else if (day == 2)
{
    console.log("Tuesday")
}
else if (day == 3)
{
    console.log("Wednesday")
}
else if (day == 4)
{
    console.log("Friday")
}
else{
    console.log("Invalid Day")
}



for( let i = 1 ; i < 5 ; ++i)
{
    console.log(i);
}



    // let i =1;
    // while (i <= 5)
    // {
    //     console.log(i);
    //     i++;
    // }


    // for while -> entry control 

    // do while -> exit control executes at least 1 

    let num = 1;
    do{
        console.log(num);
        num++;
    }while(num==0)

     
// num = 1;

// // console.log(num++);

// // console.log(num);

// console.log(++num);

// // i++  print then increment 

// // ++i  increment then print 



function sayHello()
{
    console.log("Hello There Welcome to js")
}


function greet(name)
{
    console.log("hello " + name)
}

// function grading
// {
    
// }

// sayHello()
// greet("Ved")
// grading (marks)

// tasks 


// write a function that 

// takes age 
// prints "minor" or "Adult"

// grading system



// print numbers from 1 to 10 

// print table of 1 to 5