// alert("ghjgj");
// document.getElementById("hed").innerHTML="hello world";
// var num1=window.prompt("enter num 1 ");
// var num2=window.prompt("enter num2");
// var num3=num1*num2;
// document.getElementById("hed").innerHTML="num3 = "+(num3);
// window.console.log((num3));
// var x=-10;
// var y=10;
// var z=x>>>1;
// var e=false;
// window.console.log(e+1);
const BattryLevel=document.querySelector(".battery");
navigator.getBattery().then(function(battery){
    const level=battery.level;
    const status =level*100+"%";
    BattryLevel.innerHTML=status;

});