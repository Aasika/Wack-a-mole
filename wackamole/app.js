//All the grids w classname squares are gathered in first array
//The grid where mole is there is taken in second var

const squares=document.querySelectorAll('.square');
const mole=document.querySelector('.mole');
const timeleft=document.querySelector('#time');
const score=document.querySelector('#score');

let result=0;
let hitpos;
let currenttime=25;
let timer = null;

const hitsound=new Audio('./sounds/hit.mp3');
const gameover=new Audio('./sounds/gameover.mp3');

//To select a randm square to put our mole
function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })

    //generates numbers from 0 to 8(indices are from 0 to 8 for the 9 elements)
    let randomsq=squares[Math.floor(Math.random()*9)];
    randomsq.classList.add('mole');
    //id of randsq
    hitpos=randomsq.id;
}

randomSquare();



squares.forEach(square=>{
    square.addEventListener('mousedown', ()=> {
        if(square.id==hitpos){
            hitsound.play();
            result++;
            score.textContent=result;
            hitpos=null;
        }
    });
})


//Function to keep moving the mole
function movemole(){
    
    //mole moves every 500ms
    timer=setInterval(randomSquare,600);
}

movemole()

function countdown(){
    currenttime--;
    timeleft.textContent=currenttime;
    if(currenttime==0){
        gameover.play();
        clearInterval(countdowntimer);
        clearInterval(timer);
        console.log(result);
        document.getElementById('comment').innerHTML='Time out! Final score is '+result;
        document.getElementById('comment').style.color='#f9004d';
        //result=0;
    }
}
let countdowntimer=setInterval(countdown,1000);

