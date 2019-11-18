const numbers = [1, 2, 3];
const doubleN = [];

for (var i = 0; i < numbers.length; i++) {
    doubleN.push(numbers[i] * 2);
};

// ES6

const doubleN2 = numbers.map(e => e * 2);
console.log(doubleN2);

const images = [

];

// N
// const heights = images.map(e => e.h); // map

// height = 추가 값을 작성하여 검증한다.
// console.log(heights);

// function
// fold
function plunk(err, key) {
    // 내부 동작은 for문으로 동작한다.
    // babel이라고 이해한다.
    const result = [];
    // result.push(arr[key])
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]) // object
        // console.log(arr[i][key])
        // array는 인덱스를 붙여서 내부 값으로 전달한다.
        result.push(arr[i][key])
    };
    // return null
    return result
};

const result = plunk(images, "w");

// scope에 대한 개념, 차이점에 대해 더 찾아보아야 한다. 더 열심히 한다.

// 무엇이라도 일단 적어야 한다. 못해도 적어보고, 몰라도 계속 써보고, 계속 연습해보아야 한다.

// 사용 용도
// data = [1, 2, 3, 4]
// data.map(e => {
//     return <h1>e</h1>
// });
// console.log(data); // 작성
