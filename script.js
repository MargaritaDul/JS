////////////1///////////////

const sayHello = function (name) {
  if (name.toLowerCase() === "mark") {
    return `Hi, ${name}`;
  }
  return `Hello, ${name}`;
};

console.log(sayHello("Oleg"));
console.log(sayHello("Victor"));
console.log(sayHello("Mark"));

const sayHello = (name) => {
  if (name === "Mark") {
    return `Hi, ${name}`;
  }
  return `Hello, ${name}`;
};

console.log(sayHello("Oleg"));
console.log(sayHello("Victor"));
console.log(sayHello("Mark"));

//////////////2///////////////////

const hypotenuse = function (n, m) {
  if (typeof n === "number" && typeof m === "number") {
    return (n ** 2 + m ** 2) ** (1 / 2);
  }
};

console.log(hypotenuse(3, 4));

const hypotenuse = (n, m) => {
  if (typeof n === "number" && typeof m === "number") {
    return (n ** 2 + m ** 2) ** (1 / 2);
  }
};

console.log(hypotenuse(3, 4));

//////////////3///////////////////

const minValue = function (value1, value2) {
  if (typeof value1 === "number" && typeof value2 === "number") {
    return Math.min(value1, value2);
  }
};

console.log(minValue(2, 5));
console.log(minValue(3, -1));
console.log(minValue(1, 1));

const minValue = (value1, value2) => {
  if (typeof value1 === "number" && typeof value2 === "number") {
    return Math.min(value1, value2);
  }
};

console.log(minValue(2, 5));
console.log(minValue(3, -1));
console.log(minValue(1, 1));

//////////////4///////////////////

const isEven = function (value) {
  if (typeof value === "number") {
    return value % 2 === 0;
  }
};

console.log(isEven(5));

const isEven = (value) => {
  if (typeof value === "number") {
    return value % 2 === 0;
  }
};

console.log(isEven(5));

//////////////5///////////////////

const deleteChars = function (str) {
  if (typeof str === "string") {
    const result = str.slice(1, -1);
    return result;
  }
};

console.log(deleteChars("Hello"));
console.log(deleteChars("A"));

const deleteChars = (str) => {
  if (typeof str === "string") {
    const result = str.slice(1, -1);
    return result;
  }
};

console.log(deleteChars("Hello"));
console.log(deleteChars("A"));

//////////////6///////////////////

const capitalize = function (someWord) {
  if (typeof someWord === "string") {
    const result = someWord.toLowerCase();
    return result[0].toUpperCase() + result.slice(1);
  }
};

console.log(capitalize("пиТер"));
console.log(capitalize("javaScript"));

const capitalize = (someWord) => {
  if (typeof someWord === "string") {
    const result = someWord.toLowerCase();
    return result[0].toUpperCase() + result.slice(1);
  }
};

console.log(capitalize("пиТер"));
console.log(capitalize("javaScript"));

//////////////7///////////////////

const fn1 = function (initialArray) {
  if (Array.isArray(initialArray)) {
    const result = [];
    for (let i = 0; i < initialArray.length; i++) {
      if (typeof initialArray[i] === "number") {
        const fromNumberToString = String(initialArray[i]);
        result.push(fromNumberToString);
      } else {
        const fromStringToNumber = +initialArray[i];
        result.push(fromStringToNumber);
      }
    }
    return result;
  }
};

console.log(fn1([1, 2, 3, "4", "5", 6]));

const fn1 = (initialArray) => {
  if (Array.isArray(initialArray)) {
    const result = [];
    for (let i = 0; i < initialArray.length; i++) {
      if (typeof initialArray[i] === "number") {
        const fromNumberToString = String(initialArray[i]);
        result.push(fromNumberToString);
      } else {
        const fromStringToNumber = +initialArray[i];
        result.push(fromStringToNumber);
      }
    }
    return result;
  }
};

console.log(fn1([1, 2, 3, "4", "5", 6]));

//////////////8///////////////////

const fn1 = function (firstArray, secondArray) {
  if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
    const jointArray = [...firstArray, ...secondArray];
    return jointArray;
  }
};

console.log(fn1([1, 2, 3], [4, 5, 6]));

const fn1 = (firstArray, secondArray) => {
  if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
    const jointArray = [...firstArray, ...secondArray];
    return jointArray;
  }
};

console.log(fn1([1, 2, 3], [4, 5, 6]));

//////////////9///////////////////

const fn1 = function (string, numberOfCharacters) {
  if (string.length > numberOfCharacters) {
    const clippedString = string.substring(0, numberOfCharacters);
    return clippedString + "...";
  } else {
    return string;
  }
};

console.log(fn1("Привет мир!", 6));

const fn1 = (string, numberOfCharacters) => {
  if (string.length > numberOfCharacters) {
    const clippedString = string.substring(0, numberOfCharacters);
    return clippedString + "...";
  } else {
    return string;
  }
};

console.log(fn1("Привет мир!", 6));
