// arrays

const myArr=[1,2,3,4,5]

// console.log(myArr[0]);
//  arrays method

myArr.push(6)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(7)
// console.log(myArr);
console.log(myArr.includes(4));
console.log(myArr.indexOf(4));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);


// slice ,splice 

console.log("A ",myArr)

const myn1=myArr.slice(1,3)

console.log("slice ",myn1)

console.log("B ",myArr)

const myn2=myArr.splice(1,3)
console.log("splice",myn2)
console.log("c ",myArr)