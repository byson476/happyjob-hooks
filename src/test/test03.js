let name = 'Alice'
let age = 30

const isAdult = age>=19? 'adult' : 'child'
const conditioningString = `I am ${isAdult}`;
console.log(conditioningString);


const person={
    name1 : 'Alice',
    age1 : 30,
    city : 'New York'
}

const {name1, age1, city} = person;
console.log(name1, age1, city);

const numbers = [1, 2 ,3];
const [first, second, third] = numbers;
console.log(first, second, third)  ;


const user = {
    name : 'Bob',
    address : {
        street : '123 Main St',
        city : ' New York' 
    }
};
const {name : userName, address : {street : userCity, city: userStreet}} = user;
console.log(userName, userCity, userStreet);

const {name1 : personName2, ...rest} = person;
console.log(personName2, rest);


function add(x,y) {
    x = x || 0;
    y = y || 0;
    return x+y;
}
function addrS6(x=0,y=0){
    return x+y;
}

function multiply(x,y=x){
    return x*y;
}
console.log(multiply(2));


function creatreArrayh(length, value){
    const result = [];
    for(let i=0; i<length; i++){
        result.push(value);
    }
    return result;
}

function sum([a=0, b=0] = []) {
    return a+b;
} 
console.log(sum());
function greet({name = 'Guest', age = 0}={}){
   return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet());

const test = (x,y) => x+y;
console.log(test(4,3));