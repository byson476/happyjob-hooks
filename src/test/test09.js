const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

const value1 = [...myMap].map((value, key)=>{
    return `${key}:${value}`;
});
console.log(value1);