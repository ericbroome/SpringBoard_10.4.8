

const filterOutOdds = (...args) => args.filter(arg => arg % 2 ===0);

const findMin = (...args) => args.filter(arg => Math.min(...args));

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => ([...arr, ...args.map(element => element * 2)]);

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {

}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}