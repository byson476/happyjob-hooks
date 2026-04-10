/*
const person = {
    firstName : "ungmo",
    lastName : "Lee",

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.firstName + "" + person.lastName);
console.log(person.fullName)
person.fullName = "Haegun Lee";
console.log(person);
console.log(person.fullName);


let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);

function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
}

const circle = new Circle(5);
console.log(circle.getDiameter());
console.log(circle);
*/
function Circle(radius){
    this.radius = radius;

    this.getDiameter = function(){
        return 2*this.radius;
    };
    return 100;
}
const circle = new Circle(1);
console.log(circle);