// const
const name = "JiYong";

const obj = {
    name: "John",
    gen: "male",
    // trailing code를 추가하는 것이 관리하는 것이 편리하다.
    // 궁금한 점은 구글에서 검색
}

// console.log(obj.name);
console.log(obj.gen);

// name = "thor";
obj.name = "thor";

// 선언 오류
// ob = {
//     age: "T2"
// }

// 선언된 값을 다시 선언하면 오류가 난다.

// let
let ob2 = {
    name : "John",
    gen: "male",
};

ob2.name = "thor";

ob2 = {
    age: 12,
}
console.log(ob2.age)

const newName = name + 'startK';
console.log(newName);

// 값이 변하지 않는 상황이면 const를 사용하는 것을 추천한다.


