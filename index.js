$(document).ready(function () {
    // Assign keycodes to named variables
    // Bongo
    var LEFT_ARROW = 37;
    var RIGHT_ARROW = 39;
    // Synth
    var KEY_Q = 81;
    var KEY_W = 87;
    var KEY_E = 69;
    var KEY_R = 82;

    var KEY_U = 85;
    var KEY_I = 73;
    var KEY_O = 79;
    var KEY_P = 80;
    // Sing
    var KEY_A = 65;
    var KEY_S = 83;
    var KEY_D = 68;
    var KEY_F = 70;

    var KEY_J = 74;
    var KEY_K = 75;
    var KEY_L = 76;
    var SEMICOLON = 186;

    var totalConfetti = 0;
    var confettiPopped = 0;
    
    // Make cat confetti rain down from random x-axis locations at random delays
    $("#cat-confetti-container").children().each(function () {
        $(this).css("left", `${Math.floor(Math.random() * 90)}vw`)
        $(this).css("animation-delay", `${Math.random() * 10}s`)
        totalConfetti++;
    });

    // Confetti pops and disappear when clicked
    $(".cat-confetti").click(function () {
        $(this).css("display", "none");
        new Audio("assets/sounds/meow.mp3").play();
        confettiPopped++
        if (confettiPopped >= totalConfetti) {
            $("#easter-egg-instructions").toggle();
        }
    });

    // Play button squeaks and welcome message screen turns into bongo cat screen 
    $("#play-button").click(function () {
        $("#welcome-message-screen-container").toggle();
        $("#bongo-cat-screen-container").toggle();
        new Audio("assets/sounds/squeak.mp3").play();
        $("#change-to-bongo").click();
    });

    // Functions for animating cat
    function leftPawPlay() {
        if ($("#cat-no-hands").css("display") == "inline") {
            $("#cat-no-hands").css("display", "none");
            $("#cat-left-hand").css("display", "inline");
        } else if ($("#cat-right-hand").css("display") == "inline") {
            $("#cat-right-hand").css("display", "none");
            $("#cat-both-hands").css("display", "inline");
        }
    };

    function leftPawUnplay() {
        if ($("#cat-left-hand").css("display") == "inline") {
            $("#cat-left-hand").css("display", "none");
            $("#cat-no-hands").css("display", "inline");
        } else if ($("#cat-both-hands").css("display") == "inline") {
            $("#cat-both-hands").css("display", "none");
            $("#cat-right-hand").css("display", "inline");
        }
    };

    function rightPawPlay() {
        if ($("#cat-no-hands").css("display") == "inline") {
            $("#cat-no-hands").css("display", "none");
            $("#cat-right-hand").css("display", "inline");
        } else if ($("#cat-left-hand").css("display") == "inline") {
            $("#cat-left-hand").css("display", "none");
            $("#cat-both-hands").css("display", "inline");
        }
    };

    function rightPawUnplay() {
        if ($("#cat-right-hand").css("display") == "inline") {
            $("#cat-right-hand").css("display", "none");
            $("#cat-no-hands").css("display", "inline");
        } else if ($("#cat-both-hands").css("display") == "inline") {
            $("#cat-both-hands").css("display", "none");
            $("#cat-left-hand").css("display", "inline");
        }
    };

    // Functions for playing with left paw
    var leftPawInstruments = ["bongo-left", "synth-a", "synth-b", "synth-c", "synth-d"];
    for (let i = 0; i < leftPawInstruments.length; i++) {
        $(`#${leftPawInstruments[i]}-play-button`).mousedown(function () {
            new Audio(`assets/sounds/${leftPawInstruments[i]}.mp3`).play();
            leftPawPlay();
        });

        $(`#${leftPawInstruments[i]}-play-button`).mouseup(function () {
            leftPawUnplay();
        });
    };

    // Functions for playing with right paw
    var rightPawInstruments = ["bongo-right", "synth-e-flat", "synth-e", "synth-f", "synth-g"];
    for (let i = 0; i < rightPawInstruments.length; i++) {
        $(`#${rightPawInstruments[i]}-play-button`).mousedown(function () {
            new Audio(`assets/sounds/${rightPawInstruments[i]}.mp3`).play();
            rightPawPlay();
        });

        $(`#${rightPawInstruments[i]}-play-button`).mouseup(function () {
            rightPawUnplay();
        });
    };

    // Functions for singing
    var singingNotes = ["do", "re", "mi", "fa", "so", "la", "ti", "do-high"];
    for (let i = 0; i < singingNotes.length; i++) {
        $(`#sing-${singingNotes[i]}-play-button`).mousedown(function () {
            $("#cat-no-hands").toggle();
            $("#cat-singing").toggle();
            new Audio(`assets/sounds/sing-${singingNotes[i]}.mp3`).play();
        });

        $(`#sing-${singingNotes[i]}-play-button`).mouseup(function () {
            $("#cat-no-hands").toggle();
            $("#cat-singing").toggle();
        });
    };

    // Functions for playing instrument with keys
    var instrumentKeys = [LEFT_ARROW, RIGHT_ARROW, KEY_Q, KEY_W, KEY_E, KEY_R, KEY_U, KEY_I, KEY_O, KEY_P, KEY_A, KEY_S, KEY_D, KEY_F, KEY_J, KEY_K, KEY_L, SEMICOLON];
    var instrumentNotes = ["bongo-left", "bongo-right", "synth-a", "synth-b", "synth-c", "synth-d", "synth-e-flat", "synth-e", "synth-f", "synth-g", "sing-do", "sing-re", "sing-mi", "sing-fa", "sing-so", "sing-la", "sing-ti", "sing-do-high"];
    var isDown = {LEFT_ARROW: false, RIGHT_ARROW: false, KEY_Q: false, KEY_W: false, KEY_E: false, KEY_R: false, KEY_U: false, KEY_I: false, KEY_O: false, KEY_P: false, KEY_A: false, KEY_S: false, KEY_D: false, KEY_F: false, KEY_J: false, KEY_K: false, KEY_L: false, SEMICOLON: false }

    for (let i = 0; i < instrumentKeys.length; i++) {
        $(document).keydown(function (event) {
            var keyCode = event.which;
            if (keyCode === instrumentKeys[i] && !(isDown[keyCode])) {
                isDown[keyCode] = true;
                $(`#${instrumentNotes[i]}-play-button`).mousedown();
            }
        });

        $(document).keyup(function (event) {
            var keyCode = event.which;
            if (keyCode === instrumentKeys[i]) {
                isDown[keyCode] = false;
                $(`#${instrumentNotes[i]}-play-button`).mouseup();
            }
        });
    };

    // Change instrument functions
    $("#change-to-bongo").click(function () {  // Change to bongo button
        // Change the instrument
        $("#bongo").css("display", "block");
        $("#synth").css("display", "none");
        $("#microphone").css("display", "none");
        // Change the instrument play buttons
        $("#bongo-play-buttons-container").css("display", "flex");
        $(".synth-play-buttons-container").css("display", "none");
        $(".sing-play-buttons-container").css("display", "none");
        // Change instrument change button border to reflect active instrument
        $("#change-to-bongo").css("border-color", "green");
        $("#change-to-synth").css("border-color", "#f1ba24");
        $("#change-to-microphone").css("border-color", "#f1ba24");
    });

    $("#change-to-synth").click(function () { // Change to synth button
        $("#bongo").css("display", "none");
        $("#synth").css("display", "block");
        $("#microphone").css("display", "none");

        $("#bongo-play-buttons-container").css("display", "none");
        $(".synth-play-buttons-container").css("display", "flex");
        $(".sing-play-buttons-container").css("display", "none");

        $("#change-to-bongo").css("border-color", "#f1ba24");
        $("#change-to-synth").css("border-color", "green");
        $("#change-to-microphone").css("border-color", "#f1ba24");
    });

    $("#change-to-microphone").click(function () { // Change to microphone button
        $("#synth").css("display", "none");
        $("#bongo").css("display", "none");
        $("#microphone").css("display", "block");

        $("#bongo-play-buttons-container").css("display", "none");
        $(".synth-play-buttons-container").css("display", "none");
        $(".sing-play-buttons-container").css("display", "flex");

        $("#change-to-bongo").css("border-color", "#f1ba24");
        $("#change-to-synth").css("border-color", "#f1ba24");
        $("#change-to-microphone").css("border-color", "green");
    });

    // Automatically switch to the correct instrument if a key corresponding to an instrument is pressed
    $(document).keydown(function (event) {
        var bongoKeys = [LEFT_ARROW, RIGHT_ARROW];
        var keyCode = event.which;
        if (bongoKeys.includes(keyCode)) {
            $("#change-to-bongo").click();
        }
    });

    $(document).keydown(function (event) {
        var synthKeys = [KEY_Q, KEY_W, KEY_E, KEY_R, KEY_U, KEY_I, KEY_O, KEY_P];
        var keyCode = event.which;
        if (synthKeys.includes(keyCode)) {
            $("#change-to-synth").click();
        }
    });

    $(document).keydown(function (event) {
        var singKeys = [KEY_A, KEY_S, KEY_D, KEY_F, KEY_J, KEY_K, KEY_L, SEMICOLON];
        var keyCode = event.which;
        if (singKeys.includes(keyCode)) {
            $("#change-to-microphone").click();
        }
    });

    var easterEggCodePosition = 0;
    $("button").click(function (event) {
        var easterEggCodeSequence = ["f", "f", "e-flat", "f", "g", "c", "e-flat"];
        var easterEggComponent = `synth-${easterEggCodeSequence[easterEggCodePosition]}-play-button`;

        if ($(this).attr("id") == easterEggComponent) {
            easterEggCodePosition++;
            if (easterEggCodePosition == easterEggCodeSequence.length) {
                new Audio("assets/sounds/blinding-lights.mp3").play();
                setTimeout(function(){
                    $("#cat-no-hands").attr("src", "assets/pictures/weeknd-cat-no-hands.png");
                    $("#cat-left-hand").attr("src", "assets/pictures/weeknd-cat-left-hand.png");
                    $("#cat-right-hand").attr("src", "assets/pictures/weeknd-cat-right-hand.png");
                    $("#cat-both-hands").attr("src", "assets/pictures/weeknd-cat-both-hands.png");
                    $("#cat-singing").attr("src", "assets/pictures/weeknd-cat-singing.png");
                }, 1000);
                
            }
        }
    });

});