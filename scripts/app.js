// When button is clicked:
//      -2 race cars appear on left side of screen
//      -instructions <p> appear on how to drive cars
//      -Countdown timer appears and counts down
//
//Tap A to drive car 1 (move to the right)
//Tap L to drive car 2 (move to the right)


const $button = $('button');
const $racer1 = $(`<img class="one" src="https://i.pinimg.com/originals/eb/39/35/eb3935ae7c66765699a16865187bcd6c.png" />`);
const $racer2 = $(`<img class="two" src="https://i.pinimg.com/originals/05/c0/68/05c068556d91081d9892b3647ea3367f.png" />`);
const $instruction1 = $(`<p class="instruct1">Tortoise - Run by smashing "A"</p>`);
const $instruction2 = $(`<p class="instruct2">Hare - Run by smashing "L"</p>`);
const $timer = $(`<span id="timer">10</span>`);



// let timer = 3;
// function startTimer() {
//     const counter = setInterval(function() {
//         timer--;
//         console.log(timer)
//         if (timer = 0) {
            
//             clearInterval(counter);
//         }
    
//       }, 1000);


$('button').on('click', () => {
    //ADD ELEMENTS 
    $('#timerContainer').append($timer);
    
    $('.instructions').append($instruction1);
    $('.instructions').append($instruction2);
    
    $('.race-cars').append($racer1);
    $('.race-cars').append($racer2);
    
    //COUNTDOWN TIMER
    let seconds = document.getElementById("timerContainer").textContent;
    let countdown = setInterval(function() {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
    }, 1000);
});

// RACING LOGIC
// keycode 65	"A"	
// keycode 76	"L"
let winnerOne = 0;
let winnerTwo = 0;
$(window).on("keydown", event => {
    if (event.keyCode === 65) {
        
        $(".one").animate({ 
            marginLeft: "+=20px",
        }, 100 );
        winnerOne += 1;
        if (winnerOne === 38) {
            window.alert('Tortoise has won the Race!');
        }
        
    } else if (event.keyCode === 76) {
        
        $(".two").animate({ 
            marginLeft: "+=20px",
        }, 100 );
        winnerTwo += 1;
        if (winnerTwo === 38) {
            window.alert('Hare has won the Race!');
        }
        
    }
})
///////////////////////////////////////////////////
///////////////////////////////////////////////////
