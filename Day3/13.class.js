// class Monster {
//     constructor(option, name, health, momtongbakchigi) {
//         this.name = option.name;
//         this.health = 100; // default는 생성자에서 설정 가능하다.
//         this.Monster.pikachu
//         return (this.name, this.health);
//     };
// };

function Monster(name, year, score1, score2) {
    this.name = name;
    this.year = year;
    this.score1 = score1;
    this.score2 = score2;
    this.average = function() {
        return (this.score1 + this.score2) /2;
    }
}

var pikachu = new Monster("pikachu", 3, 80, 90);
var dinosar = new Monster("dinosar", 4, 92 ,88);

console.log(pikachu.name + '의 평균 : ' + pikachu.average() + '<br>');
console.log(dinosar.name + '의 평균 : ' + dinosar.average());

// Monster를 사용해서 pikachu 인스턴스를 사용한다.
// 1 몸통 박치기를 했을 때 health를 10을 깎는 메서드를 만들어준다.
// Monster를 상속 받아서 Dinosaur 클래스를 선언한다.

// Dinosaur 클래스
// 2 밖에서 생성한 인스턴스가 들어간다. 체력을 깎는 인스턴스가 들어간다.
// > momtongbakchigi(<인스턴스>) : <인스턴스>의 health 10을 깎는 메서드를 만들어주세요.
// naming sensor 다이노소어가 있는지 확인을 해준다.
// 3 Dinosaur의 인스턴스인 tirano를 만들고 pikachu의 체력을 10 깎아주세요.

function person(name, year, score1, score2) {
    this.name = name;
    this.year = year;
    this.score1 = score1;
    this.score2 = score2;
    this.average = function() {
        return (this.score1 + this.score2) /2;
    }
}

var guy = new person("조우진", 3, 80, 90);
var lady = new person("신은수", 4, 92 ,88);

console.log(guy.name + '의 평균 : ' + guy.average() + '<br>');
console.log(lady.name + '의 평균 : ' + lady.average());

// Date 객체

const cYear = new Date(); nYear = new Date(2019, 0, 1);

year = cYear.getFullYear(); month = cYear.getMonth();
date = cYear.getDate(); day = cYear.getDay();
hour = cYear.getHours(); minute = cYear.getMinutes();
switch (day) {
    case 0: days="일";  break;
    case 1: days="월";  break;
    case 2: days="화";  break;
    case 3: days="수";  break;
    case 4: days="목";  break;
    case 5: days="금";  break;
    case 6: days="토";
}
leftedTime = nYear.getTime() - cYear.getTime();
leftedDays = Math.floor(leftedTime/(24*60*60*1000));
console.log("오늘은 " + year + "년 " + month + "월 " + date + "일 ("+ days + "요일) 이고, <br>");
console.log("현재 시간은 " + hour + "시 " + minute + "분 입니다. <hr>");
console.log("새해 첫 날까지는 " + leftedDays +" 일이 남았습니다.<br>");

// page. 303
function f1 (n) {
    
}