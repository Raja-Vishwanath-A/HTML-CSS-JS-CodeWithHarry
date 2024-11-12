console.log("Hello world!");

function greet(name){
    console.log( name + " is a good man.");   
}

function greetings(naam, bhadhai="JavaScript welcomes you,"){
    console.log(bhadhai + " " + naam)
    console.log( naam + " is a good man.");   
}

function sum(a, b, c) {
    let d = a + b + c ;
    return d;
    console.log("This line of code is not exected. That is why it's dull")
}
let name_1="Vishwa"; 
let name_2="Puli";
let name_3="Arun";
let name_4="Devansh";

// console.log( name_1 + " is a good man.");
// console.log( name_2 + " is a good man.");
// console.log( name_3 + " is a good man.");
// console.log( name_4 + " is a good man.");

// greet(name_1);
// greet(name_2);
// greet(name_3);
// greet(name_4);
// let example = greet(name_1);
// console.log(example);

let bhadhai_ho = "Greetings";

greetings(name_1, bhadhai_ho);
greetings(name_2, bhadhai_ho);
greetings(name_3, bhadhai_ho);
greetings(name_4);

let s = sum(5,6,7);
console.log(s);
