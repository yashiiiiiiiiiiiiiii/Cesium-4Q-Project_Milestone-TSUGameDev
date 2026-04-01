function saveUsername() {
    var user = document.getElementById("username").value;
    localStorage.setItem("game_username", user);
    return true;
}

function checkExistingUser() {
    var existing = localStorage.getItem("game_username");
    var greet = document.getElementById("greetings");
    var input = document.getElementById("username");
    if (existing && greet) {
        greet.innerText = "Welcome back, " + existing + "!";
        if (input) { 
            input.value = existing; 
        }
    }
}