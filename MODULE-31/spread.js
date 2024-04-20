const max = Math.max(55,21,31,65,69);
// console.log(max);


//spread ...
const numbers = [44, 56, 15, 34, 87, 57, 66];
const arrayMax = Math.max(...numbers)
// console.log(...numbers);
// console.log(arrayMax);

//use speread operator to copy
const friends = [44, 56, 15, 34, 87, 57, 66];
const bondhu = friends;
const dosto = [...friends]
console.log(dosto);
friends.push(222);
console.log(dosto);


