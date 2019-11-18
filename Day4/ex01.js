// if (ture) {
//     var x = 3;
// }
// console.log(x); // 3

// if (true) {
//     const y = 3;
// }
// console.log(y); // Uncaught ReferenceError: y is not defined.


// Node.js 교과서 / page. 57

// const a = 0;
// a = 1;  // Uncaught TypeError: Assignment to constant variable.
// let b = 0;
// b = 1;  // 1

// const c; // Uncaught SyntaxError: Missing initializer in const declaration

// page 58

var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string1);   // 1 더하기 2는 '3'

// string ES2015

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2);   // 1 더하기 2는 '3'

// 객체 리터럴

var sayNode = function() {
    console.log('Node');
};

var es = 'ES';
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};

oldObject[es + 6] = 'Fantastic';

oldObject.sayNode();    // Node
oldObject.sayJS();  // JS
console.log(oldObject.ES6); // Fantastic

// 다시 작성해본다.

const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};

newObject.sayNode();    // Node
newObject.sayJS();  // JS
// console.log(newObejct.ES6); // Fantastic


// page. 59

// { name: name, age: age } // ES5
// { name, age } //    ES2015

// arrow function 화살표 함수

function add1(x, y) {
    return x + y;
};

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}

const not2 = x => !x;

// page. 60

// var relationship1 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],

// }

// page. 61

// var candyMachine = {
//     status: {
//         name: 'node',
//         count: 5,
//     },
//     getCandy: function() {
//         this.status.count--;
//         return this.status.count;
//     }
// };
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
const { getCandy, status: { count } } = candyMachine;

console.log(candyMachine);

// page. 62

// var array = ['nodejs', {}, 10, true];
// var node = array[0];
// var obj = array[1];
// var bool = array[3];

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;

// 프라미스
// 비동기 방식 

const condition = true; // true이면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error); // 실패(reject)한 경우 실행
    });

    // page. 63

    