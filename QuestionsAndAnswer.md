(1)let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Ans:ReferenceError: greetign is not defined.

Explanation: console will show ReferenceError of greetign is not defined ,because here we declared greeting but we type mistake, assign and console greetign.


(2)function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Ans:"12"

Explanation:We declared a function where we will take 2 values and will addition these 2 values . later we pass 2 values where there one is number value and another is string value .that's why the ans show like this .In javascript it is called Type coercion.



(3)const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Ans:B:['🍝', '🍫', '🥑', '🍔']

Explanation:we declared a array and the array contains 4 values . An object 'info' is created that initialize the first element of the food .Then the info.favoriteFood reasign the value to a different value which is  🍝.That's why the ans is ['🍝', '🍫', '🥑', '🍔'].


(4)function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Ans:Here sayHi function expect one parameter 'name',which is used to create the sentence.But when we called the function without passing the parameter,javascript assign the value in undefined and print the return .And the text and undefined showing together because it's concatenating with the undefined .



(5)let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4


Ans:3

Explanation:In this code we use a array that containing 4 elements.Using forEach method to iterate over eachh element of the array and for each element 'num' checking if it's truthy or not .If it's truthy increment the count variable by 1 .