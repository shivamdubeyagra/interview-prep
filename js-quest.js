'use strict';

/*
let name1 = {
    firstName:'shivam',
    lastName:'dubey',

}

function printFullName(...args){
    console.log(this.firstName + ' ' + this.lastName + ' from ' + args[0] + ', ' + args[1] + ', ' + args[2]);
}

printFullName.call(name1,'delhi','delhi','india');

let name2 = {
    firstName:'rohit',
    lastName:'dubey'
}
printFullName.apply(name2,['mumbai','maharashtra','india']);
const printFullNameForRohit = printFullName.bind(name2,'mumbai','maharashtra','india');
console.log(printFullNameForRohit);

printFullNameForRohit();
*

const user = {name:'shivam',age:22};
Object.freeze(user);
user.name = 'rohit';
console.log(user.name);
*
document.cookie= "username=shivam; expires=Fri, 31 Dec 9999 23:59:59 GMT path=/";
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

console.log(getCookie("username")); // "shivam"
*

const obj = {
    value: 42,
    normal: function () {
      return this.value;
    },
    arrow: () => {
      return this.value;
    }
  };
  
  console.log(obj.normal()); // 42 ✅
  console.log(obj.arrow());  // undefined ❌ (because arrow took `this` from outside obj)
  *

  const fs = require("fs");

  console.log("Start");
  
  // File system operation (goes to libuv thread pool)
  const x =fs.readFileSync("bigfile.txt", "utf-8");
  
  console.log("End");
  console.log(x);
  *
  const crypto = require("crypto");

  console.log("Start");
  
  const start = Date.now();
  
  for (let i = 1; i <= 8; i++) {
    crypto.pbkdf2("password", "salt", 1000000, 64, "sha512", () => {
      console.log(`${i}: Done in`, Date.now() - start, "ms");
    });
  }
  *
 function flattenArray(arr){
    return arr.reduce((acc, val) => {
        if(Array.isArray(val)){
            return acc.concat(flattenArray(val));
        }
        return acc.concat(val);
    }, []);
    // let result = [];
    // for(let item of arr){
    //   if(Array.isArray(item)){
    //     result = result.concat(flattenArray(item));
    //   }else{
    //     result.push(item);
    //   }
    // }
    // return result;
 }
 console.log(flattenArray([1,2,3,[4,5,6,[7,8,9]]]));
 *
 function flattenArray(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length) {
    let item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item); // spread nested array into stack
    } else {
      result.push(item);
    }
  }

  return result.reverse(); // reverse because stack reverses order
}

console.log(flattenArray([1, [2, [3, [4]], 5]]));
// Output: [1, 2, 3, 4, 5]
*/

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], newKey, result); // recursive call
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const obj = {
  name: "Shivam",
  address: {
    city: "Agra",
    state: {
      code: "UP",
      pincode: 282005
    },
    agra:[1,2,3,{name2:"shivam"}]
  }
};

console.log(flattenObject(obj));
