// When button is clicked:
//      -2 race cars appear on left side of screen
//      -instructions <p> appear on how to drive cars
//      -Countdown timer appears and counts down
//
//Tap A to drive car 1 (move to the right)
//Tap L to drive car 2 (move to the right)

const $racer1Score = $(`<p id="racer1-score">'0'</p>`)
const $racer2Score = $(`<p id="racer2-score">'0'</p>`)
const $racer1 = $(`<img class="one" id="tortoise" src="./images/tortoise.png" />`);
const $racer2 = $(`<img class="two" id="hare" src="./images/hare.png" />`);
const $instruction1 = $(`<p class="instruct1">Tortoise - Run by smashing "A"</p>`);
const $instruction2 = $(`<p class="instruct2">Hare - Run by smashing "L"</p>`);
const $timer = $(`<div id="timer"></div>`);
const $winner1 = $(`<p id="winner1"> THE TORTOISE IS VICTORIOUS </p>`)
const $winner2 = $(`<p id="winner2"> THE HARE IS VICTORIOUS </p>`)
const $go = $(`<p id="go"> GO! GO! GO! </p>`);
const $reset = $(`<button id="reset-button">RESET</button>`)
const $startOver = $(`<button id="start-over-button">START OVER</button>`)
const $green = $(`<img class="lights" id="green" src="./images/green.png" />`)
const $trophy = $(`<img id="trophy" src="./images/trophy.gif" />`)

let seconds;
//START BUTTON
$('.start-button').on('click', () => {
    const $red1 = $(`<img class="lights" id="red1" src="./images/red.png" />`)
    const $red2 = $(`<img class="lights" id="red2" src="./images/red.png" />`)
    const $red3 = $(`<img class="lights" id="red3" src="./images/red.png" />`)
    const $yellow1 = $(`<img class="lights" id="yellow1" src="./images/yellow.png" />`)
    const $yellow2 = $(`<img class="lights" id="yellow2" src="./images/yellow.png" />`)
    const $yellow3 = $(`<img class="lights" id="yellow3" src="./images/yellow.png" />`)
    // Play Audio
    //Crowd Cheers
    const crowd = document.createElement("audio");
    crowd.src = "./audio/crowd.mp3"; 
    crowd.play(); 
    
    seconds = 6;
    //Countdown
    //ADD ELEMENTS 
    $('.race-cars').append($racer1);
    $('.race-cars').append($racer2);
    
    //COUNTDOWN TIMER
    let countdown = setInterval(function() {
        $('#timerContainer').append($timer);  
        seconds--;
        document.getElementById("timer").textContent = seconds;
        // console.log(seconds);
        if (seconds <= 0) clearInterval(countdown);
        //ADD/REMOVE ELEMENTS
        if (seconds <= 0) {
            $('.go-container').append($go);
            $("#timer").remove();
            $('#yellow1').remove();
            $('#yellow2').remove();
            $('.start-button').hide("slow, swing")
        }
        if (seconds === 3) {
            const countAudio = document.createElement("audio");
            countAudio.src = "./audio/countdown2.mp3"; 
            countAudio.play(); 
            $(".placeholder").append($red1);
            $(".placeholder").append($red2);
            $(".placeholder").append($red3);
        }
        if (seconds === 2) {
            $('#red1').remove();
            $('#red2').remove();
            $('#red3').remove();
            $('.placeholder').append($yellow1);
            $('.placeholder').append($yellow2);
            $('.placeholder').append($yellow3);
            
        }
        if (seconds === 1) {
            $('#yellow3').remove();
        }
    }, 1000);
});

// RACING LOGIC // keycode 65"A" // keycode 76"L"
let winnerOne = 0;
let winnerOneTotal = 0;
let winnerTwo = 0;
let winnerTwoTotal = 0;

$(window).on("keydown", event => {
    if (seconds <= 0 && event.keyCode === 65) {
        $(".one").animate({ 
            left: "+=2%",
        }, 100 );
        winnerOne += 1;
        
        if (winnerOne === 45 && winnerTwo < 45) {
            const winnerMusic = document.createElement("audio");
            winnerMusic.src = "./audio/victorymusic.mp3"; 
            winnerMusic.play(); 
            $('#winner-container').append($winner1);
            $('#reset-container').append($reset)
            $("#go").remove();
            winnerOneTotal += 1;
            // Declare P1 overall winner
            $('#racer1-score').text(`${winnerOneTotal}`)
            if (winnerOneTotal === 3) {
                $('#reset-button').remove();
                $('#reset-container').append($startOver)
                $('.placeholder').append($trophy);
            };
        };
        
        
    } else if (seconds <= 0 && event.keyCode === 76) {
        
        $(".two").animate({ 
            left: "+=2%",
        }, 100 );
        winnerTwo += 1;
        if (winnerTwo === 45 && winnerOne < 45) {
            const winnerMusic = document.createElement("audio");
            winnerMusic.src = "./audio/victorymusic.mp3"; 
            winnerMusic.play(); 
            $('#winner-container').append($winner2);
            $('#reset-container').append($reset)
            $("#go").remove();
            winnerTwoTotal += 1;
            $('#racer2-score').text(`${winnerTwoTotal}`);
            // Declare P2 overall winner
            if (winnerTwoTotal === 3) {
                $('#reset-button').remove();
                $('#reset-container').append($startOver)
                $('.placeholder').append($trophy);
            }
        }   
    }
    //Start Over Button
    $('#start-over-button').on('click', () => {
    console.log('button is working');
    location.reload();
    return false;
    });
});

// RESET BUTTON
$('#reset-container').on('click', '#reset-button', () => {
    seconds = 6;
    winnerOne = 0;
    winnerTwo = 0;
    $(".one").animate({ 
        left: "0px",
    }, 500 );
    $(".two").animate({ 
        left: "0px",
    }, 500 );
    $("#winner1").remove();
    $("#winner2").remove();
    $("#reset-button").remove();
    $('.start-button').show("slow")
});

//Start Over Button
$('#start-over-button').on('click', () => {
    console.log('button is working');
    location.reload();
    return false;

});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
