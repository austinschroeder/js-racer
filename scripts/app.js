// When button is clicked:
//      -2 race cars appear on left side of screen
//      -instructions <p> appear on how to drive cars
//      -Countdown timer appears and counts down
//
//Tap A to drive car 1 (move to the right)
//Tap L to drive car 2 (move to the right)


// const $button = $('button');
const $racer1Score = $(`<p id="racer1-score">'0'</p>`)
const $racer2Score = $(`<p id="racer2-score">'0'</p>`)
const $racer1 = $(`<img class="one" id="tortoise" src="https://i.pinimg.com/originals/eb/39/35/eb3935ae7c66765699a16865187bcd6c.png" />`);
const $racer2 = $(`<img class="two" id="hare" src="https://i.pinimg.com/originals/05/c0/68/05c068556d91081d9892b3647ea3367f.png" />`);
const $instruction1 = $(`<p class="instruct1">Tortoise - Run by smashing "A"</p>`);
const $instruction2 = $(`<p class="instruct2">Hare - Run by smashing "L"</p>`);
const $timer = $(`<div id="timer">5</div>`);
const $winner1 = $(`<p id="winner1"> THE TORTOISE IS VICTORIOUS </p>`)
const $winner2 = $(`<p id="winner2"> THE HARE IS VICTORIOUS </p>`)
const $go = $(`<p id="go"> GO! GO! GO! </p>`);
const $reset = $(`<button id="reset-button">RESET</button>`)
const $red1 = $(`<img class="lights" id="red1" src="https://lh3.googleusercontent.com/proxy/QrBSAkF98L3UwzR8ScvdnfHf6X_15UGoQOLbvSffCN9fKhfBiHjrLWlDwvEwgW68-SBlbfQJRhHsgue2hVdXGNZdfH5JOZGtFUFsC5ih5Whic7fQOaVAYvqCs_ba-es" />`)
const $red2 = $(`<img class="lights" id="red2" src="https://lh3.googleusercontent.com/proxy/QrBSAkF98L3UwzR8ScvdnfHf6X_15UGoQOLbvSffCN9fKhfBiHjrLWlDwvEwgW68-SBlbfQJRhHsgue2hVdXGNZdfH5JOZGtFUFsC5ih5Whic7fQOaVAYvqCs_ba-es" />`)
const $red3 = $(`<img class="lights" id="red3" src="https://lh3.googleusercontent.com/proxy/QrBSAkF98L3UwzR8ScvdnfHf6X_15UGoQOLbvSffCN9fKhfBiHjrLWlDwvEwgW68-SBlbfQJRhHsgue2hVdXGNZdfH5JOZGtFUFsC5ih5Whic7fQOaVAYvqCs_ba-es" />`)
const $yellow1 = $(`<img class="lights" id="yellow1" src="https://lh3.googleusercontent.com/proxy/uvqUW44pblvmWD9we9AwpwW0E9koodadYCHFsrk-pxJQxU8XHNRVe6g-qSo5Xs-V9ZQXs8_TIwkxKcIpfsBypKTMKuTzm-cGSDbtEjHIUXdCLkNoT5F4Ww" />`)
const $yellow2 = $(`<img class="lights" id="yellow2" src="https://lh3.googleusercontent.com/proxy/uvqUW44pblvmWD9we9AwpwW0E9koodadYCHFsrk-pxJQxU8XHNRVe6g-qSo5Xs-V9ZQXs8_TIwkxKcIpfsBypKTMKuTzm-cGSDbtEjHIUXdCLkNoT5F4Ww" />`)
const $yellow3 = $(`<img class="lights" id="yellow3" src="https://lh3.googleusercontent.com/proxy/uvqUW44pblvmWD9we9AwpwW0E9koodadYCHFsrk-pxJQxU8XHNRVe6g-qSo5Xs-V9ZQXs8_TIwkxKcIpfsBypKTMKuTzm-cGSDbtEjHIUXdCLkNoT5F4Ww" />`)
const $green = $(`<img class="lights" id="green" src="https://lh3.googleusercontent.com/proxy/HgjaH4AcBMcNAkB7J_A2UMG-hsKTWB9q-SzuUPRSlNA_a9dzb7pjHuokQ0bgUV9swOrND1WmsV5WuXx2rFMaRFjjhralYXUTbcxvsS0tTOs5cRjnDxgl7sDIpKg" />`)


//START BUTTON
$('.start-button').on('click', () => {
    // NEW RESET FUNCTION
    // winnerOne = 0;
    // winnerTwo = 0;
    // $(".one").animate({ 
    //     left: "0px",
    // }, 100 );
    // $(".two").animate({ 
    //     left: "0px",
    // }, 100 );
    // $("#winner-container").html('');

    ////////////////
    // Play Audio
    //Crowd Cheers
    const crowd = document.createElement("audio");
    crowd.src = "./audio/crowd.mp3"; 
    crowd.play(); 
 
    //Countdown
    //ADD ELEMENTS 
    $('#timerContainer').append($timer);  
    $('.race-cars').append($racer1);
    $('.race-cars').append($racer2);
   
    //COUNTDOWN TIMER
    let seconds = document.getElementById("timerContainer").textContent;
    let countdown = setInterval(function() {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
        if (seconds <= 0) {
            $('.go-container').append($go);
            $("#timerContainer").remove();
            $('#yellow1').remove();
            $('#yellow2').remove();
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

// RACING LOGIC
// keycode 65	"A"	
// keycode 76	"L"
let winnerOne = 0;
let winnerOneTotal = 0;
let winnerTwo = 0;
let winnerTwoTotal = 0;

$(window).on("keydown", event => {
    if (event.keyCode === 65) {
        $(".one").animate({ 
            left: "+=2%",
        }, 100 );
        winnerOne += 1;
        console.log(winnerOne);
        
        if (winnerOne === 45 && winnerTwo < 45) {
            const winnerMusic = document.createElement("audio");
            winnerMusic.src = "./audio/victorymusic.mp3"; 
            winnerMusic.play(); 
            $('#winner-container').append($winner1);
            $('#reset-container').append($reset)
            $(".go-container").remove();
            winnerOneTotal += 1;
            // let totalScore1 = $('#racer1-score').val();
            // totalScore1 = parseInt(totalScore1) + 1;
            // let winnerOneTotal = Number($('#racer1-score').val()) + 1;
            
        };
        
    } else if (event.keyCode === 76) {
        
        $(".two").animate({ 
            left: "+=2%",
        }, 100 );
        winnerTwo += 1;
        console.log(winnerTwo);
        if (winnerTwo === 45 && winnerOne < 45) {
            const winnerMusic = document.createElement("audio");
            winnerMusic.src = "./audio/victorymusic.mp3"; 
            winnerMusic.play(); 
            $('#winner-container').append($winner2);
            $('#reset-container').append($reset)
            $(".go-container").remove();
            winnerTwoTotal += 1;
        }
        
    }
});

// RESET BUTTON
$('#reset-container').on('click', '#reset-button', () => {
    // location.reload();
    // return false;
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
    
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
