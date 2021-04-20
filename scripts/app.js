// When button is clicked:
//      -2 race cars appear on left side of screen
//      -instructions <p> appear on how to drive cars
//
//Tap A to drive car 1 (move to the right)
//Tap L to drive car 2 (move to the right)


const $button = $('button');
const $racer1 = $(`<div class="one" />`);
const $racer2 = $(`<div class="two" />`);
const $instruction1 = $(`<p class="instruct1">Racer 1-Drive by smashing "A"</p>`);
const $instruction2 = $(`<p class="instruct2">Racer 2-Drive by smashing "L"</p>`);


$('button').on('click', () => {
    $('.instructions').append($instruction1);
    $('.instructions').append($instruction2);

    $('.race-cars').append($racer1);
    $('.race-cars').append($racer2);

});

// RACING LOGIC
// keycode 65	"A"	
// keycode 76	"L"

let winnerOne = 0;
let winnerTwo = 0;
$(window).on("keydown", event => {
    if (event.keyCode === 65) {
       winnerOne += 1;
       console.log(winner);

        
        $(".one").animate({ 
            marginLeft: "+=10px",
        }, 10 );

    } else if (event.keyCode === 76) {
        winnerTwo += 1;
       console.log(winner);
        $(".two").animate({ 
            marginLeft: "+=10px",
        }, 10 );
        
    }
})
