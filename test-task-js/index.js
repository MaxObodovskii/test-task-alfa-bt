const data = require('./data.json');

const task11Result = (animals) => {
    const result = {
        dogs: 0,
        cats: 0,
        average: 0,
    };

    // your code here

    let totalAge = 0;

    animals.forEach(animal => {
        if (animal.type === 'dog') {
            result.dogs++;
        }

        if (animal.type === 'cat') {
            result.cats++;
        }

        totalAge += animal.age;
    });

    result.average = Math.floor(totalAge / animals.length);

    return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
    let result = 0;

    // your code here

    animals.forEach(animal => {
        if (
            animal.type === 'dog' &&
            animal.breed === true &&
            animal.features.includes('black')
           ) {
            result++;
        }
    });

    return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
    const result = animals.filter(animal => {
        if (animal.type === 'cat' && animal.features.includes('black')) {
            return true;
        } else if (animal.type === 'dog' && animal.features.includes('white')) {
            return true;
        }
        return false;
    });

    return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
    const cats = animals.filter(animal => animal.type === 'cat').sort((a, b) => b.age - a.age);
    const dogs = animals.filter(animal => animal.type === 'dog').sort((a, b) => a.age - b.age);

    return [...cats, ...dogs];
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    if (n === 0) {
        return 1;
    } else {
        return number * myPowFunc(number, n - 1);
    }
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (...inputArray) => {
    const result = [];

    for (let i = 0; i < inputArray.length; i++) {
        const currentEl = inputArray[i];

        if (Array.isArray(currentEl)) {
            result.push(...myFlatFunc(...currentEl));
        } else {
            result.push(currentEl);
        }
    }

    return result;
};

console.log(myFlatFunc([1, 3, 5, [1, [4,5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
