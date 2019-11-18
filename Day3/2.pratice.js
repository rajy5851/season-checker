// page. 305

function slove() {
    var a1 = prompt("2차 방정식의 2차항 계수는?");
    var b1 = prompt("2차방정식의 1차항 계수는?");
    var c1 = prompt("2차 방정식의 상수항 계수는?");
    a = parseInt(a1); b = parseInt(b1); c = parseInt(c1);
    d = b*b - 4*a*c;
    if (a==0) { alert("2차 방정식이 아니다.");}
    else if (d < 0) { alert("근 없음.");}
    else if ( d == 0 ) {
        root1 = (-1 * b + Math.sqrt(d)) / (2*a);
        alert("중근: " + root1.toPresion(3));
    }
    else {
        root1 = (-1 * b + Math.sqrt(d)) / (2 * a);
        root2 = ( -1 * b - Math.sqrt(d)) / (2 * a);
        alert("서로 다른 두 실근 : " + root1.toPrecision(3) + ", " + root2.toPrecision(3));
    }
}

// page. 307

function f1 (x, y, z) {
    // document.write("첫 번째 인수 : " + x + + y + "<br>");
    
    console.log("첫 번째 인수 : " + x + "<br>");
    console.log("두 번째 인수 : " + y + "<br>");
    console.log("세 번째 인수 : " + z + "<br>");
    console.log("<hr>");
}

f1 (10, 20, 30);
f1 (40, 50);
f1 (60, 70, 80, 90);

function f1 (f2, n) {
    console.log('콜백 함수를 '+ n + '번 호출함!' + '<br />');
    for ( i = 0 i < n; i++ ) f2();
}

var f3 = function () {
    console.log('Welcome to HTML5! <br />');
}

f1 (f3, 5);

console.log('<hr>');
f1 ( function() {
    console.log('Welcome to JavaScript! <br />');
}, 5);
