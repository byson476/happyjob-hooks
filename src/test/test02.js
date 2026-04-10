//const
console.log(add(12,13));
function add(x,y){
    return x+y;
}
console.log(add(2,3));

//console.log(subtract(12,13)); 이건 안됨
const subtract = function(x,y){
        return x-y;
}
console.log(subtract(2,3));

const multiply = (x,y) =>  x*y;
console.log(multiply(2,3));

const divide = (x,y) => x/y;
console.log(divide(2,3));
/*
const obj2 = {
    name : 'My Object 2',
    arrowFunction : ()=>{
        console.log("undefined날껄?", this.name);
    
    }
};
obj2.arrowFunction();
*/
const numbers = [1,2,3,4,5] ;                                                   
const squares = numbers.map(x => x*x);
console.log(squares);

const addOne = n=>n+1;
console.log(addOne(2));
/*
setTimneout(()=>{
    console.log('this is a callback function');
},1000);
*/
const obj4 = {
    name : 'My Object 4', 
    regularMethod(){
        console.log(this.name);
    }
};
obj4.regularMethod();

console.log("#1.", score);
var score = 10;
console.log("#2.", score); 
var score;
console.log("#3.", score); 

