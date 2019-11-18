// ES5
const users = [
    {name: "tony", age: 12},
    {name: "hulk", age: 45},
    {name: "thor", age: 500},
    {name: "gandi", age: 75},
];

let user = null;

for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'gandi') {
        user = users[i];
        break;
    };
};

console.log(user);

// ES6

user2 = users.find((user) => {
    console.log(user.name === 'hulk');
    // console.log를 여기에 찍는다.
    return user.anme === 'hulk';
});

console.log(user2);

const dataSet = [
    {id: 1, name: 'tony1'},
    {id: 2, name: 'tony2'},
    {id: 3, name: 'tony3'},
    {id: 4, name: 'tony4'},
];

const www = dataSet.find(e => e.id === 3);
console.log(www)

// 실습

const products = [
    {name: '사과', type: '과일'},
    {name: '딸기', type: '과일'},
    {name: '바나나', type: '과일'},
    {name: '양파', type: '과일'},
    {name: '김씨', type: '사람'},
    {name: '김씨', type: '사람'},
    {name: '김씨', type: '사람'},
];

const result = products.find(e => e.name === '김씨');
console.log(result);

// const fruits = [];
// for (var i = 0; i < products.length; i++ ) {
//     if (products[i].type === "과일") {
//         fruits.push(products[i]);
//     };
// };
// console.log(fruits);

// ES6

// const human = products.filter(e => {
//     return e.type === "시럽";
// });

// console.log(human);

// 실습 filter를 사용해서 3보다 크고 7보다 작은 숫자를 출력하세요.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const targetN = numbers.filter();

