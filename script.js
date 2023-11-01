"use strict"
let random=Math.floor(Math.random()*20)
let score =20;
function display(random,guess){
    
    if(score>0){
        (random>guess) ? document.querySelector(".message").textContent="low":document.querySelector(".message").textContent="high"
    score--;
    document.querySelector(".score").textContent=score;
}
if(score===0){
    document.querySelector(".message").textContent="You lost the game.Play again"
}
}
document.querySelector(".check").addEventListener(
    "click",function(){
        const guess=Number(document.querySelector(".guess").value)
            if(random>guess){
                // if(score>0)  document.querySelector(".message").textContent="low"; else document.querySelector(".message").textContent="lost the game";
                // score--;
                // document.querySelector(".score").textContent=score;
                display(random,guess);
            }
            if(random<guess){
                // if(score>0)  document.querySelector(".message").textContent="high"; else document.querySelector(".message").textContent="lost the game";
                // score--;
                // document.querySelector(".score").textContent=score;
                display(random,guess);
            }
            if(random===guess){
                document.querySelector(".message").textContent="success"
                document.querySelector(".highscore").textContent=score;
                let reveal= document.querySelector(".number");
                reveal.textContent=random;
                // reveal.style.transform = 'scaleX(1.1) ';
                // reveal.style.transitionDuration = '1s';
            }
            if(guess==''){
                document.querySelector(".message").textContent="Enter the number"
            }
        }
)
document.querySelector(".again").addEventListener("click",function(){
    window.location.reload();
    console.log("again button clicked")
})
