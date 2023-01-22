flag = 1;
function f1() {
  alert("Yes. you are right ");
}
function f() {
  if (flag == 1) {
    bn.style.top = 90;
    bn.style.left = 500;
    flag = 2;
  } else if (flag == 2) {
    bn.style.top = 90;
    bn.style.left = 50;
    flag = 3;
  } else if (flag == 3) {
    bn.style.top = 235;
    bn.style.left = 360;
    flag = 1;
  }
}
