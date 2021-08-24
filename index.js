$(document).ready(function () {
    // Assign keycodes to named variables
    // Bongo
    var leftArrow = 37;
    var rightArrow = 39;
    // Synth
    var keyQ = 81;
    var keyW = 87;
    var keyE = 69;
    var keyR = 82;

    var keyU = 85;
    var keyI = 73;
    var keyO = 79;
    var keyP = 80;
    // Sing
    var keyA = 65;
    var keyS = 83;
    var keyD = 68;
    var keyF = 70;

    var keyJ = 74;
    var keyK = 75;
    var keyL = 76;
    var semicolon = 186;

    // Confetti counter
    var confettiCounter = 0;

    // Make cat confetti rain down from random x-axis locations at random delays
    $("#cat-confetti-container").children().each(function () {
        $(this).css("left", `${Math.floor(Math.random() * 90)}vw`)
        $(this).css("animation-delay", `${Math.random() * 10}s`)
        confettiCounter++;
    });

    // Confetti popped counter
    var confettiPopped = 0;

    // Confetti pops and disappear when clicked
    $(".cat-confetti").click(function () {
        $(this).css("display", "none");
        new Audio("assets/sounds/meow.mp3").play();

        // Display Easter Egg instructions if all confetti is popped
        confettiPopped++
        if (confettiPopped >= confettiCounter) {
            $("#easter-egg-instructions").toggle();
        }
    });

    // Play button squeaks and welcome message screen turns into bongo cat screen 
    $("#play-button").click(function () {
        $("#welcome-message-screen-container").toggle();
        $("#bongo-cat-screen-container").toggle();
        const playButtonSound = new Audio("assets/sounds/squeak.mp3");
        playButtonSound.play();

        // Ensures that only the bongo play buttons are visible
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
    var instrumentKeys = [leftArrow, rightArrow, keyQ, keyW, keyE, keyR, keyU, keyI, keyO, keyP, keyA, keyS, keyD, keyF, keyJ, keyK, keyL, semicolon];
    var instrumentNotes = ["bongo-left", "bongo-right", "synth-a", "synth-b", "synth-c", "synth-d", "synth-e-flat", "synth-e", "synth-f", "synth-g", "sing-do", "sing-re", "sing-mi", "sing-fa", "sing-so", "sing-la", "sing-ti", "sing-do-high"];
    var isDown = {leftArrow: false, rightArrow: false, keyQ: false, keyW: false, keyE: false, keyR: false, keyU: false, keyI: false, keyO: false, keyP: false, keyA: false, keyS: false, keyD: false, keyF: false, keyJ: false, keyK: false, keyL: false, semicolon: false}

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
        var bongoKeys = [leftArrow, rightArrow];
        var keyCode = event.which;
        if (bongoKeys.includes(keyCode)) {
            $("#change-to-bongo").click();
        } 
    });

    $(document).keydown(function (event) {
        var synthKeys = [keyQ, keyW, keyE, keyR, keyU, keyI, keyO, keyP];
        var keyCode = event.which;
        if (synthKeys.includes(keyCode)) {
            $("#change-to-synth").click();
        } 
    });

    $(document).keydown(function (event) {
        var singKeys = [keyA, keyS, keyD, keyF, keyJ, keyK, keyL, semicolon];
        var keyCode = event.which;
        if (singKeys.includes(keyCode)) {
            $("#change-to-microphone").click();
        } 
    });
});