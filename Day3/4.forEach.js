// ES5

const colors = ['red', 'blue', 'green'];

// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// };

// ES6
colors.forEach(color => console.log(color));



// 1. 실습
function forEach2(el, callback) {
    // 오류 메시지 출력
    if (!Array.isArray(el)) throw new Error("배열이 아닙니다. 다시 입력해주세요.");
    // 여기를 구현하세요.
    // ES5 형식으로 구현한다. for문
    for (let i = 0; i < el.length; i++) {
        callback(el[i]);
    };

    // 아무 말 대잔치 연습
    // el => forEach;
    // callback => fromEach;
    
    // var forEach = [el, callback];
    // forEach2.forEach(function(el, callback) {
    //     console.log(cureentValue);
    //     console.log(index);
    //     console.log(array);
    // });

    // var forEach = (el, callback) {
    //     forEach2.forEach(function)
    // }
};

forEach2(colors, e => console.log(e));

// 배열 값이 아닌 다른 값을 입력하면 배열 오류가 난다.
// forEach2(123, e => console.log(e));

const images = [
    {
        b: 5,
        w: 5,
    },

    {
        h: 15,
        w: 15,
    },

    {
        h: 25,
        w: 25,
    },
];

// images.push((h, 25, w, 15));
// console.log(images);

const area = [];

images.forEach(el => {
    area.push(el.h * el.w);
    });
// forEach문을 사용해서 w * h 변수 area에 저장해주세요.
// push()

console.log(area);