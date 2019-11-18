var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function() {
        this.status.count--;
        return this.status.count;
    }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 객체의 속성을 같은 이름의 변수에 대입하는 코드

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    };
    const { getCandy, status: { count } } = candyMachine;
};

// 배열 구조화

var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

const array = ['nodejs', {}, 10, true];
const [node, obj, bool] = array;