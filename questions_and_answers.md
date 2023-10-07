<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>In this JavaScript code, a variable named greeting is created and assigned to an empty object. Then, console.log(greeting); Used to log the value of the greeting variable.
Now the value of this object is empty, i.e. it does not contain any properties or methods. Because of this when you log in the console it only shows the {} empty object.</b></summary>
<p>

#### Answer: A: `{}`

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>avaScript is a dynamically typed variable language, meaning it does not determine the data type of a variable, meaning that a variable's data type may need to be overridden. The sum function is called with two arguments, a number 1 and a string "2". The number 1 can be appended to a number by the sample operator (+), but not to the string "2". The sum between the string and number data types is undefined, so JavaScript converts the string "2" to the number 2 and adds it to the number 1 to make "12".
So, there is no error on the server side by calling sum(1, "2"), but it returns "12" as the number 1 and the string "2" are added. so console.log(sum(1, "2")); Viewing the output with will show "12".</b></summary>
<p>

#### Answer: C: `"12"`

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>The food array will remain the same, because the value of the food array has not changed. By changing the value of info.favoriteFood, the food array is unchanged, so it remains the same. info.favoriteFood will have "🍝", and the food array hasn't changed, so it will stay the same.</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>No arguments were passed when calling the function, the function's argument name has no value status. This causes the value of name to be undefined by default. The function will return the string "Hi there, undefined", because here the value of name is undefined. Then, passing no arguments with this string will output Hi there, undefined because it is undefined</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>In this callback function, each number holds the value of num and if the value of num is not zero (that is, if the number is non-zero), then adds 1 to the count variable. So, this code can be said to count the number of non-zero prime numbers in the nums array. If 1, 2, and 3 are nonzero in the nums array, count will have a value of 3.</b></summary>
<p>

#### Answer: C: 3

<i>Write your explanation here</i>

</p>
</details>
