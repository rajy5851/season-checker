// ESS
function add(a, b) {
    return a + b;
};

// ES6
const add2 = (a, b) => {
    return a + b;
};

const add3 = (a, b) => a + b;

const square = a => a * a;
// 변수가 하나일 때는 괄호를 생략할 수 있다.


// console.log(add(1,2));
// console.log(add2(1,2));
// console.log(add3(1,2));
console.log(square(2));

const obj = {
    name: "JiYong",
    sayHi: function() {
        console.log('hi'); 
    },

    sayHi2() {
        console.log("hi2");
    },
};

console.log(obj.name);
obj.sayHi();
obj.sayHi2();