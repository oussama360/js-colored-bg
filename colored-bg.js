var num1=188,num2=10,num3=54,rand
var b1=true,b2=true,b3=true
setInterval(function(){
rand=Math.round(Math.random()*3)
switch(rand){
	case 1:

	if(b1==true){num1++}
	if(b1==false){num1--}
if(num1==255){b1=false}
if(num1==0){b1=true}
	break;
	case 2:	
	if(b2==true){num2++}
	if(b2==false){num2--}
if(num2==255){b2=false}
if(num2==0){b2=true}
	break;
	case 3:
	if(b3==true){num3++}
	if(b3==false){num3--}
if(num3==255){b3=false}
if(num3==0){b3=true}
	break;

}
document.body.style.backgroundColor="rgb("+num1+","+num2+","+num3+")"
},speed)
