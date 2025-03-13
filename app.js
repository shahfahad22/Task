// 1. Create an array with five fruit names and print the second element.
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log(fruits[1]); // Banana

// 2. Replace the third element of an array with "Mango" and print the updated array.
fruits[2] = "Mango";
console.log(fruits);

// 3. Create an empty array and add three colors to it using push(). Print the array.
let colors = [];
colors.push("Red", "Green", "Blue");
console.log(colors);

// 4. Remove the last element of an array using pop() and print the removed element.
let lastColor = colors.pop();
console.log(lastColor);

// 5. Add two numbers at the beginning of an array using unshift() and print the array.
let numbers = [3, 4, 5];
numbers.unshift(1, 2);
console.log(numbers);

// 6. Remove the first element of an array using shift() and print the updated array.
let firstNumber = numbers.shift();
console.log(numbers);

// 7. Print the length of an array containing four elements.
console.log(numbers.length);

// 8. Extract the last two elements from an array using slice() and print them.
let lastTwo = numbers.slice(-2);
console.log(lastTwo);

// 9. Extract the middle element(s) of an array with an even number of elements using slice().
let evenArray = [10, 20, 30, 40];
let middleElements = evenArray.slice(1, 3);
console.log(middleElements);

// 10. Replace two middle elements in an array using splice() and print the updated array.
evenArray.splice(1, 2, 25, 35);
console.log(evenArray);

// 11. Create an array of three cities and add a new city at the end using push().
let cities = ["New York", "London", "Paris"];
cities.push("Tokyo");
console.log(cities);

// 12. Remove the last city from an array using pop() and print the updated array.
cities.pop();
console.log(cities);

// 13. Add two new colors to the beginning of an array using unshift() and print the array.
colors.unshift("Yellow", "Purple");
console.log(colors);

// 14. Remove the first color from an array using shift() and print the removed color.
let firstColorRemoved = colors.shift();
console.log(firstColorRemoved);

// 15. Use push() twice to add two new names to an array and print the array.
let names = ["John", "Alice"];
names.push("Bob");
names.push("Charlie");
console.log(names);

// 16. Use pop() on an array of five elements and check its length is now four.
let nums = [1, 2, 3, 4, 5];
nums.pop();
console.log(nums.length);

// 17. Use shift() on an array with three elements and print the updated array.
let smallArray = [10, 20, 30];
smallArray.shift();
console.log(smallArray);

// 18. Use unshift() to add a new number at the beginning of an array and print it.
smallArray.unshift(5);
console.log(smallArray);

// 19. Create an array of three numbers, remove the last one using pop(), and print the remaining array.
let numArray = [100, 200, 300];
numArray.pop();
console.log(numArray);

// 20. Create an array with three elements, remove the first using shift(), and print the updated array.
numArray.shift();
console.log(numArray);

// 21. Extract the first three elements from an array using slice() and print them.
let array1 = [5, 10, 15, 20, 25];
console.log(array1.slice(0, 3));

// 22. Extract elements from index 2 to 4 using slice() and print them.
console.log(array1.slice(2, 5));

// 23. Remove two elements from an array starting from index 1 using splice().
array1.splice(1, 2);
console.log(array1);

// 24. Insert "Lemon" and "Orange" at index 2 in an array using splice() and print the updated array.
let fruitArray = ["Apple", "Banana", "Cherry"];
fruitArray.splice(2, 0, "Lemon", "Orange");
console.log(fruitArray);

// 25. Remove the last two elements using splice() and print the modified array.
fruitArray.splice(-2, 2);
console.log(fruitArray);

// 26. Use splice() to add three new numbers at the beginning of an array and print the array.
let numbersList = [7, 8, 9];
numbersList.splice(0, 0, 1, 2, 3);
console.log(numbersList);

// 27. Create an array with six elements, extract the last four using slice(), and print them.
let sixElements = [10, 20, 30, 40, 50, 60];
console.log(sixElements.slice(-4));

// 28. Use slice() on an array and check if the original array remains unchanged.
let originalArray = [100, 200, 300, 400, 500];
let slicedPart = originalArray.slice(1, 4);
console.log(originalArray); // Original remains unchanged
console.log(slicedPart);

// 29. Use splice() to remove one element from the middle of an array and print the updated array.
let midArray = [1, 2, 3, 4, 5];
midArray.splice(2, 1);
console.log(midArray);

// 30. Use splice() to replace two elements in an array and print the modified array.
midArray.splice(1, 2, 9, 8);
console.log(midArray);

// 31. Assign an array to another variable and modify the original array. Print both variables.
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr1, arr2);

// 32. Create a function that adds an element to an array and check if the original array changes.
function addElement(arr, element) {
    arr.push(element);
}
addElement(arr1, 5);
console.log(arr1);

// 33. Pass an array to a function, modify its first element, and print the modified array.
function modifyFirst(arr) {
    arr[0] = 99;
}
modifyFirst(arr1);
console.log(arr1);

// 34. Create an array, pass it to another variable, modify the second variable, and print both.
let arrA = [10, 20, 30];
let arrB = arrA;
arrB[1] = 200;
console.log(arrA, arrB);

// 35. Check if two variables referencing the same array are equal after modifying one.
console.log(arrA === arrB);

// 36. Create an array, pass it to a function that removes an element, and print the result.
function removeElement(arr) {
    arr.pop();
}
removeElement(arrA);
console.log(arrA);

// 37. Store an array in two different variables, modify one using push(), and print both.
let arrayX = [5, 10, 15];
let arrayY = arrayX;
arrayY.push(20);
console.log(arrayX, arrayY);

// 38. Use pop() on an array inside a function and see if the original array changes.
removeElement(arrayX);
console.log(arrayX);

// 39. Pass an array to a function that changes its length and check the effect.
function shortenArray(arr) {
    arr.length = 2;
}
shortenArray(arrayX);
console.log(arrayX);

// 40. Create two separate arrays with identical elements and check if they are strictly equal.
let array1X = [1, 2, 3];
let array2X = [1, 2, 3];
console.log(array1X === array2X); // false (different references)