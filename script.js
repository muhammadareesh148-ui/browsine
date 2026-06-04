const texts = [
    "Hey 지말…",
    "You're stronger than you think 💜",
    "Just keep going ✨",
    "Almost done 😭💜"
];

let count=0,index=0;

(function type(){
    let current=texts[count];
    let letter=current.slice(0,++index);

    document.getElementById("typing").textContent=letter;

    if(letter.length===current.length){
        count++;
        index=0;
        if(count===texts.length)count=0;
        setTimeout(type,1500);
    }else{
        setTimeout(type,80);
    }
})();

const gameArea=document.getElementById("gameArea");
const scoreText=document.getElementById("score");
let score=0;

const messages=[
"Proud of you 💜",
"Keep going ✨",
"You're strong 😭💜"
];

function collectStar(star){
    score++;
    scoreText.innerText=score;
    alert(messages[Math.floor(Math.random()*messages.length)]);
    star.remove();
}

function createStar(){
    const star=document.createElement("div");
    star.classList.add("star-game");
    star.innerHTML="⭐";

    star.style.left=Math.random()*90+"%";
    star.style.top=Math.random()*80+"%";

    gameArea.appendChild(star);

    star.addEventListener("click",()=>collectStar(star));
    star.addEventListener("touchstart",()=>collectStar(star));

    setTimeout(()=>star.remove(),2000);
}

setInterval(createStar,900);