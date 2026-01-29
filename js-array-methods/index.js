// practice JavaScript Array methods 

let arr = [10,20,30,40,50,23];

// print the output 
console.log(arr)

// check the length of the array 
console.log(arr.length)

// add item end of the array 
arr.push(100);
console.log(arr)

// remove item end of the array 
arr.pop();
console.log(arr)

// add item starting of the array 
arr.unshift(200);
console.log(arr);

// remove item starting of the array 
arr.shift();
console.log(arr)

// concat() the array 
console.log(arr.concat([60,70,80,90,100]));

// map() method 

let result = arr.map(each_number => each_number * 2);
console.log(result);

// filter() method 
let condition = arr.filter(each_number => each_number >= 30);
console.log(condition);

// reduce() method 
let sum_of = arr.reduce((sum,number) => sum + number );
console.log(sum_of)

// find() -> return the first element that matches a condition 

let first_return = arr.find(each_number => each_number % 2 === 0);
console.log(first_return);


// includes() -> check element is exiter or not 
let exit_check = arr.includes(50);
console.log(exit_check);

// slice() -> return the part of the array 
console.log(arr.slice(0,4));

// splice() -> add , remove and replace the elements in array 
console.log(arr.splice(0,3,2));


// toString() -> convert array into string 
console.log(arr.toString());

// reverse() -> print the reverse order 
console.log(arr.reverse());

// every() -> check all elements condition satisfied 
let check_here = arr.every(each_number => each_number % 2 === 0);
console.log(check_here);

// some() -> check atleast one condition is satisfied 
let one_condition = arr.some(each_number => each_number % 2 === 1);
console.log(one_condition);



