console.log("---------- head ----------");

const head = ([first]) => first;

const sampleArray = [1, 2, 3, 4];

console.log(sampleArray); // [1, 2, 3, 4]
console.log(head(sampleArray)); // 1

// -----------------------------------------
console.log("---------- tail ----------");

const tail = ([, ...rest]) => rest;

console.log(sampleArray); // [1, 2, 3, 4]
console.log(tail(sampleArray)); // [2, 3, 4]

// -----------------------------------------
console.log("---------- init ----------");
// findLast()
const init = (arr) => arr.slice(0, arr.length - 1);

console.log(sampleArray); // [1, 2, 3, 4]
console.log(init(sampleArray)); //  [1, 2, 3]

// -----------------------------------------
console.log("---------- last ----------");

const last = (arr) => arr.at(arr.length - 1);

console.log(sampleArray); // [1, 2, 3, 4]
console.log(last(sampleArray)); // 4

// -----------------------------------------
console.log("---------- concat ----------");

const concat = (a, b) => [...a, ...b]; // Implementation here.

const secondArray = [5, 6, 7, 8];

console.log("1st --> ", sampleArray); // [1, 2, 3, 4]
console.log("2nd --> ", secondArray); // [5, 6, 7, 8]
console.log(concat(sampleArray, secondArray)); // [1, 2, 3, 4, 5, 6, 7, 8]

// -----------------------------------------
console.log("---------- concat multiple ----------");

const concatMultiple = (...args) => args.reduce(concat);

const thirdArray = [9, 10, 11, 12];

console.log("1st --> ", sampleArray); // [1, 2, 3, 4]
console.log("2nd --> ", secondArray); // [5, 6, 7, 8]
console.log("2nd --> ", thirdArray); // [9, 10, 11, 12]
console.log(concatMultiple(sampleArray, secondArray, thirdArray));
// -----------------------------------------
console.log("---------- clone ----------");

function clone(obj) {
  return { ...obj };
}

const testObj = {
  nombre: "Hugo",
  curso: "Master Frontend",
};

console.log(`testObj: ${JSON.stringify(testObj)}`); // { nombre: 'Hugo', curso: 'Master Frontend'}
console.log(`clone: ${JSON.stringify(clone(testObj))}`);

// -----------------------------------------
console.log("---------- merge ----------");

function merge(source, target) {
  return { ...target, ...source };
}
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
