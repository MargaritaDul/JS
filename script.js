
////////////1///////////////

let result = prompt ('Ваше имя?', '');
alert (`Ваше имя ${result}`);

const sayHello = function(name) {
    if (name === "Mark") {
        return `Hi, ${name}`;
    }
        return `Hello, ${name}`;
    
}


console.log(sayHello("Oleg"));
console.log(sayHello("Victor"));
console.log(sayHello("Mark"));



const sayHello = (name) => {
    if (name === "Mark") {
        return `Hi, ${name}`;
    }
        return `Hello, ${name}`;
    
}


//////////////2///////////////////

console.log(sayHello("Oleg"));
console.log(sayHello("Victor"));
console.log(sayHello("Mark"));


const hypotenuse = function (n ,m) {
    if (typeof n === "number" && typeof m === "number") {
        return ((n**2 + m**2)**(1/2));
    }
}

console.log(hypotenuse(3, 4));

const hypotenuse = (n ,m) => {
    if (typeof n === "number" && typeof m === "number") {
        return ((n**2 + m**2)**(1/2));
    }
}

console.log(hypotenuse(3, 4));



//////////////3///////////////////



const minValue = function (value1 ,value2) {
    if (typeof value1 === "number" && typeof value2 === "number" && value1<value2) {
        return value1;
    }

    if (typeof value1 === "number" && typeof value2 === "number" && value1>value2) {
        return value2;
    }
}

console.log(minValue(2, 5));
console.log(minValue(3, -1));
console.log(minValue(1, 1));

const minValue = (value1 ,value2) {
    if (typeof value1 === "number" && typeof value2 === "number" && value1<value2) {
        return value1;
    }

    if (typeof value1 === "number" && typeof value2 === "number" && value1>value2) {
        return value2;
    }
}

console.log(minValue(2, 5));
console.log(minValue(3, -1));
console.log(minValue(1, 1));


//////////////4///////////////////


const isEven = function (value) {
    if (typeof value === "number" && value % 2 == 0) {
        return true;
    }
    return false;

}

console.log(isEven(5));


const isEven = (value) => {
    if (typeof value === "number" && value % 2 == 0) {
        return true;
    }
    return false;

}

console.log(isEven(5));



//////////////5///////////////////


const deleteChars = function (str) {
   
    const result = str.slice(1, -1);
    return result;

}

console.log(deleteChars("Hello"));
console.log(deleteChars("A"));




const deleteChars = (str) => {
   
    const result = str.slice(1, -1);
    return result;
    
}

console.log(deleteChars("Hello"));
console.log(deleteChars("A"));


//////////////6///////////////////


const capitalize = function (someWord) {
   
    const result = someWord.toLowerCase();
    return result[0].toUpperCase() + result.slice(1);

}

console.log(capitalize("пиТер"));
console.log(capitalize("javaScript"));


const capitalize = (someWord) => {
   
    const result = someWord.toLowerCase();
    return result[0].toUpperCase() + result.slice(1);

}

console.log(capitalize("пиТер"));
console.log(capitalize("javaScript"));




//////////////7///////////////////


const fn1 = function (mixedArray) {
    if (Array.isArray(mixedArray)) {
        const result = [];
        for (let i = 0; i < mixedArray.length; i++) {
            if (typeof mixedArray[i] === "number") {
                const stringedArray = String(mixedArray[i]);
                result.push(stringedArray);
            }
            if (typeof mixedArray[i] === "string") {
                const numberedArray = +(mixedArray[i]);
                result.push(numberedArray);
            }
        }
        return result;
    }
}

console.log(fn1([1, 2, 3, '4', '5', 6]));


const fn1 = (mixedArray) => {
    if (Array.isArray(mixedArray)) {
        const result = [];
        for (let i = 0; i < mixedArray.length; i++) {
            if (typeof mixedArray[i] === "number") {
                const stringedArray = String(mixedArray[i]);
                result.push(stringedArray);
            }
            if (typeof mixedArray[i] === "string") {
                const numberedArray = +(mixedArray[i]);
                result.push(numberedArray);
            }
        }
        return result;
    }
}

console.log(fn1([1, 2, 3, '4', '5', 6]));


//////////////8///////////////////


const fn1 = function (firstArray, secondArray) {
    if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
        const jointArray = [...firstArray, ...secondArray];
        return jointArray;
    }
}

console.log(fn1([1, 2, 3], [4, 5, 6]));


const fn1 = (firstArray, secondArray) => {
    if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
        const jointArray = [...firstArray, ...secondArray];
        return jointArray;
    }
}

console.log(fn1([1, 2, 3], [4, 5, 6]));




//////////////9///////////////////

const fn1 = function (string, numberOfCharacters) {
    if (string.length > numberOfCharacters) {
        const clippedString = string.substring (0, numberOfCharacters);
        return clippedString + "...";
        }
    }

console.log(fn1("Привет мир!", 6));


const fn1 = (string, numberOfCharacters) => {
    if (string.length > numberOfCharacters) {
        const clippedString = string.substring (0, numberOfCharacters);
        return clippedString + "...";
        }
    }

console.log(fn1("Привет мир!", 6)); 

