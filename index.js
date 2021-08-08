$(document).ready(function () {
    
    // Assign keycodes to named variables
    // Bongo
    var leftArrow = 37;
    var rightArrow = 39;
    // Synth
    var keyQ = 81;
    var keyW = 87;
    var keyE = 69
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

    // Make heart confetti rain down from random x-axis locations at random delays
    $("#cat-confetti-container").children().each(function () {
        $(this).css("left", `${Math.floor(Math.random() * 90)}vw`)
        $(this).css("animation-delay", `${Math.random() * 10}s`)
        confettiCounter++;
    });

    // Confetti popped counter
    var confettiPopped = 0;

    // Hearts pop and disappear when clicked
    $(".cat-confetti").click(function () {
        $(this).css("display", "none");

        meowSoundEffect1 = new Audio("assets/sounds/meow-1.mp3");
        meowSoundEffect2 = new Audio("assets/sounds/meow-2.mp3");
        meowChoice = [meowSoundEffect1, meowSoundEffect2];
        (meowChoice[1]).play();

        // Display Easter Egg instructions and replace emojis if all confetti is popped
        confettiPopped++
        if (confettiPopped >= confettiCounter) {
            new Audio("assets/sounds/kids-cheering.mp3").play();
            $("#easter-egg-instructions").toggle();
        }
    })

    // Play button squeaks and welcome message screen turns into bongo cat screen 
    $("#play-button").click(function () {
        $("#welcome-message-screen-container").toggle();
        $("#bongo-cat-screen-container").toggle();
        const playButtonSound = new Audio("assets/sounds/squeak.mp3");
        playButtonSound.play();

        // Ensures that only the bongo play buttons are visible (doesn't work in CSS for some reason)
        $("#bongo-play-buttons-container").css("display", "flex");
        $(".synth-play-buttons-container").css("display", "none");
        $(".sing-play-buttons-container").css("display", "none");
    });

    // Ensures that keydown functions trigger once per keypress
    var keyPressed = false;
    
    // Bongo button functions
    $("#bongo-left-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-left-hand").toggle();
        const bongoHitLeft = new Audio("assets/sounds/bongo-hit-high.wav");
        bongoHitLeft.play();
    });

    $("#bongo-left-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-left-hand").toggle();
    });

    $("#bongo-right-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
        const bongoHitRight = new Audio("assets/sounds/bongo-hit-low.wav");
        bongoHitRight.play();
    });

    $("#bongo-right-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
    });

    // Synth button functions
    $("#synth-a-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-left-hand").toggle();
        const synthA = new Audio("assets/sounds/synth-a.mp3");
        synthA.play();
    });

    $("#synth-a-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-left-hand").toggle();
    });

    $("#synth-b-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-left-hand").toggle();
        const synthB = new Audio("assets/sounds/synth-b.mp3");
        synthB.play();
    });

    $("#synth-b-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-left-hand").toggle();
    });

    $("#synth-c-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-left-hand").toggle();
        const synthC = new Audio("assets/sounds/synth-c.mp3");
        synthC.play();
    });

    $("#synth-c-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-left-hand").toggle();
    });

    $("#synth-d-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
        const synthD = new Audio("assets/sounds/synth-d.mp3");
        synthD.play();
    });

    $("#synth-d-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
    });

    $("#synth-e-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
        const synthE = new Audio("assets/sounds/synth-e.mp3");
        synthE.play();
    });

    $("#synth-e-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
    });

    $("#synth-f-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
        const synthF = new Audio("assets/sounds/synth-f.mp3");
        synthF.play();
    });

    $("#synth-f-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
    });
    
    $("#synth-g-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
        const synthG = new Audio("assets/sounds/synth-g.mp3");
        synthG.play();
    });

    $("#synth-g-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-right-hand").toggle();
    });

    // Sing button functions
    $("#sing-do-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
        const singDo = new Audio("assets/sounds/sing-do.mp3");
        singDo.play();
    });

    $("#sing-do-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
    });

    $("#sing-re-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
        const singRe = new Audio("assets/sounds/sing-re.mp3");
        singRe.play();
    });

    $("#sing-re-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
    });  

    $("#sing-mi-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
        const singMi = new Audio("assets/sounds/sing-mi.mp3");
        singMi.play();
    });

    $("#sing-mi-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
    });  

    $("#sing-fa-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
        const singFa = new Audio("assets/sounds/sing-fa.mp3");
        singFa.play();
    });

    $("#sing-fa-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
    }); 

    $("#sing-so-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
        const singSo = new Audio("assets/sounds/sing-so.mp3");
        singSo.play();
    });

    $("#sing-so-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
    }); 

    $("#sing-la-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
        const singLa = new Audio("assets/sounds/sing-la.mp3");
        singLa.play();
    });

    $("#sing-la-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
    }); 

    $("#sing-ti-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
        const singTi = new Audio("assets/sounds/sing-ti.mp3");
        singTi.play();
    });

    $("#sing-ti-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
    }); 

    $("#sing-do-high-play-button").mousedown(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
        const singDoHigh = new Audio("assets/sounds/sing-do-high.mp3");
        singDoHigh.play();
    });

    $("#sing-do-high-play-button").mouseup(function() {
        $("#cat-no-hands").toggle();
        $("#cat-singing").toggle();
    }); 

    // Put paw down functions
    $(document).keydown(function (event) {
        var keyCode = event.which;
        if (keyCode === leftArrow && keyPressed == false) { // Put left paw down if left arrow is pressed
            keyPressed = true;
            $("#bongo-left-play-button").mousedown();
        } else if (keyCode === rightArrow && keyPressed == false) { // Put right paw down if right arrow is pressed
            keyPressed = true;
            $("#bongo-right-play-button").mousedown();
        } else if (keyCode === 32 && keyPressed == false) { // Start singing if spacebar is pressed
            keyPressed = true;
            $("#cat-no-hands").toggle();
            $("#cat-singing").toggle();
            const singSong = new Audio("assets/sounds/sing-do.mp3")
            singSong.play();
        }
    });

    // Put paw up functions 
    $(document).keyup(function (event) {
        var keyCode = event.which;
        if (keyCode === 37 && keyPressed == true) { // Put left paw up if left arrow is released
            keyPressed = false;
            $("#bongo-left-play-button").mouseup();
        } else if (keyCode === 39 && keyPressed == true) { // Put right paw up if right arrow is released
            keyPressed = false;
            $("#bongo-right-play-button").mouseup();
        } else if (keyCode === 32 && keyPressed == true) { // Stop singing if spacebar is released
            keyPressed = false;
            $("#cat-no-hands").toggle();
            $("#cat-singing").toggle();
        }
    });

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
    });

    $("#change-to-synth").click(function () { // Change to synth button
        $("#bongo").css("display", "none");
        $("#synth").css("display", "block");
        $("#microphone").css("display", "none");

        $("#bongo-play-buttons-container").css("display", "none");
        $(".synth-play-buttons-container").css("display", "flex");
        $(".sing-play-buttons-container").css("display", "none");
    });

    $("#change-to-microphone").click(function () { // Change to microphone button
        $("#synth").css("display", "none");
        $("#bongo").css("display", "none");
        $("#microphone").css("display", "block");

        $("#bongo-play-buttons-container").css("display", "none");
        $(".synth-play-buttons-container").css("display", "none");
        $(".sing-play-buttons-container").css("display", "flex");
    });
});