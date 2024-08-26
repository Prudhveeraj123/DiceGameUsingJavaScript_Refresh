 
var val1=Math.floor(Math.random()*6)+1;
console.log(val1);
var src1="dice"+val1+".png";
src1="images/"+src1;
document.querySelectorAll("img")[0].setAttribute("src",src1);


var val2=Math.floor(Math.random()*6)+1;
console.log(val2);
var src2="dice"+val2+".png";
src2="images/"+src2;
document.querySelectorAll("img")[1].setAttribute("src",src2);



if(val1>val2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(val2>val1){
    document.querySelector("h1").innerHTML="Player 2 Wins";

}
else {
    document.querySelector("h1").innerHTML="Draw";

}