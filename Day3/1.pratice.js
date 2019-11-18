var a = "globalA", b = "globalB", c = "globalC", d = "globalD";
function f1 () {
    var b = "localB";
    var d = "localD";

    console.log("함수 f1() 내부에서 출력<br>");
    console.log("a =" + a + "<br>");
    console.log("b = " + b + "<br>");
    console.log("this.b = " + this.b + "<br>");
    console.log("c = " + c + "<br>");
    console.log("d = " + d + "<br><hr>");
}

f1 ();
console.log("함수 f1() 외부에서 출력<br>");
console.log("a = " + a + "<br>");
console.log("b = " + b + "<br>");
console.log("this.b = " + this.b + "<br>");
console.log("c = " + c + "<br>");
console.log("d = " + d + "<br><hr>");

// page. 305

<h3> 2차 방정식 <img src="exp.png" height=20 />의 근 계산</h3>
<button onclick="slove();" > 2차 방정식 근 구하기</button>

function slove() {
    
}