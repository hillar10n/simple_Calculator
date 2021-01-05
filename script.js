const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const mxply = document.getElementById("mxply");
const subt = document.getElementById("subt");
const addtn = document.getElementById("addtn");
const eqlTo = document.getElementById("eqlTo");
const reset = document.getElementById("reset");
const dot = document.getElementById("dot");
const dvsn = document.getElementById("dvsn");
const check = document.getElementById('check')


one.addEventListener("click",function() {
	display.value+=1;
})

two.addEventListener("click",function() {
	display.value+=2;
});

three.addEventListener("click",function() {
	display.value+=3;
});

four.addEventListener("click",function() {
	display.value+=4;
});

five.addEventListener("click",function() {
	asdisplay.value+=5;
});

six.addEventListener("click",function() {
	display.value+=6;
});

seven.addEventListener("click",function() {
	display.value+=7;
});

eight.addEventListener("click",function() {
	display.value+=8;
});

nine.addEventListener("click",function() {
	display.value+=9;
});

zero.addEventListener("click",function() {
	display.value+=0;
});

reset.addEventListener("click",function() {
	display.value='';
	output.value= '';
});

addtn.addEventListener("click",function() {
	display.value+='+';
});

subt.addEventListener("click",function() {
	display.value+='-';
});

mxply.addEventListener("click",function() {
	display.value+='*';
});

dvsn.addEventListener("click",function() {
	display.value+='/';
});

dot.addEventListener("click",function() {
	display.value+='.';
});

eqlTo.addEventListener("click", function(){
	if (display.value==="") {
		check.textContent = "Please make a reasonable calculation!";
	}else{
		output.value=eval(display.value);
	}
})