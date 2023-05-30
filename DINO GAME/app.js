var dino=document.getElementById("dino");
var block=document.getElementById("block");
var result=document.getElementById("result");
var score=document.getElementById("score");
var game=document.getElementById("game");
var sound=document.getElementById("sound");
var count=0;

function jump(){
    dino.style.top="90px";
    setTimeout(function(){
        dino.style.top="160px";
    },400)
    count++;
    sound.play();
}
window.addEventListener("keyup",jump);

setInterval(function gameover(){
    var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var dinotop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if((blockleft<70) && (dinotop>90)){
          result.style.display="block";
          game.style.display="none";
          score.innerHTML=`score: ${count}`
    }
},10)