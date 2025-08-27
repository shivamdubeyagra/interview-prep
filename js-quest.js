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
  */
  const crypto = require("crypto");

  console.log("Start");
  
  const start = Date.now();
  
  for (let i = 1; i <= 8; i++) {
    crypto.pbkdf2("password", "salt", 1000000, 64, "sha512", () => {
      console.log(`${i}: Done in`, Date.now() - start, "ms");
    });
  }
  