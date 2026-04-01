var trust = 0;
var day = 1;

function updateDisplay() {
    var trustEl = document.getElementById("trustDisplay");
    var dayEl = document.getElementById("dayDisplay");
    if (trustEl) trustEl.innerText = trust;
    if (dayEl) dayEl.innerText = day;
}

function createBtn(txt, target) {
    var container = document.getElementById("choiceContainer");
    if (container) {
        var b = document.createElement("button");
        b.innerText = txt;
        b.onclick = function() { nextScene(target); };
        container.appendChild(b);
    }
}

function nextScene(s) {
    var name = document.getElementById("speakerNameDisplay");
    var text = document.getElementById("storyTextDisplay");
    var box = document.getElementById("choiceContainer");
    if (box) box.innerHTML = "";
    updateDisplay();

    switch(s) {
        case 0:
            var user = localStorage.getItem("game_username");
            if (name) name.innerText = "System";
            if (text) text.innerText = "Hello " + (user ? user : "Player") + ". Summer starts now.";
            createBtn("Begin Day 1", 1);
            break;
        case 1:
            day = 1; 
            if (name) name.innerText = "Yonna";
            if (text) text.innerText = "The library is quiet. Should we study or just talk?";
            createBtn("Study (+1 Trust)", 2); 
            createBtn("Talk", 3);
            break;
        case 2:
            trust += 1; 
            if (text) text.innerText = "You solve math problems. She looks impressed.";
            createBtn("Go home", 4);
            break;
        case 3:
            if (text) text.innerText = "You share stories about childhood. The sun sets quickly.";
            createBtn("Go home", 4);
            break;
        case 4:
            day = 5; 
            if (text) text.innerText = "Day 5. You meet at the park. It's boiling hot.";
            createBtn("Buy ice cream", 5);
            break;
        case 5:
            if (text) text.innerText = "Do you give her the strawberry flavor?";
            createBtn("Give Strawberry (+2 Trust)", 6); 
            createBtn("Keep it", 7);
            break;
        case 6:
            trust += 2; 
            if (text) text.innerText = "'My favorite!' she beams.";
            createBtn("Next", 8);
            break;
        case 7:
            if (text) text.innerText = "She eats her vanilla quietly.";
            createBtn("Next", 8);
            break;
        case 8:
            day = 10; 
            if (text) text.innerText = "A sudden rainstorm hits the city.";
            createBtn("Share an umbrella", 9);
            break;
        case 9:
            trust += 3; 
            if (text) text.innerText = "You walk closely together under the small umbrella.";
            createBtn("Continue", 10);
            break;
        case 10:
            day = 15; 
            if (text) text.innerText = "Mid-summer. You find a lost dog in the alley.";
            createBtn("Help search for owner", 11);
            break;
        case 11:
            trust += 4; 
            if (text) text.innerText = "Success! The owner is happy. Yonna looks at you kindly.";
            createBtn("Next Day", 12);
            break;
        case 12:
            day = 20; 
            if (name) name.innerText = "Marlon";
            if (text) text.innerText = "Marlon invites you to the beach party.";
            createBtn("Invite Yonna (+5 Trust)", 13); 
            createBtn("Go alone", 14);
            break;
        case 13:
            trust += 5; 
            if (name) name.innerText = "Yonna";
            if (text) text.innerText = "'The ocean is beautiful,' she whispers.";
            createBtn("Final Week", 15);
            break;
        case 14:
            if (text) text.innerText = "The party is fun, but you feel like someone is missing.";
            createBtn("Final Week", 15);
            break;
        case 15:
            day = 30; 
            if (name) name.innerText = "Narrator";
            if (text) text.innerText = "Summer ends. Your Final Trust: " + trust;
            createBtn("The End (Restart)", 0);
            break;
    }
}
