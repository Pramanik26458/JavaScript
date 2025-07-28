const A=["a","b","c"];
const X=['x','y','z'];

// A.push(X)

// console.log(A)//[ 'a', 'b', 'c', [ 'x', 'y', 'z' ] ]
// console.log(A[3]) //[ 'x', 'y', 'z' ]
// console.log(A[3][1]) //y


// concate 
const all=A.concat(X)
console.log(all) //[ 'a', 'b', 'c', 'x', 'y', 'z' ]
// const all_new=[...A,...X]
// console.log(all_new);


// const another_arrays=[1,2,3,[4,5,6],7,[6,7,[4,5]]]