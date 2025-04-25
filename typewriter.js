var i = 0;
var reverse = false;
var word = "Hello!";

function typewriter() {
    document.getElementById("typewriter").textContent = word.substring(0, i);
    if (!reverse) {
        i++;
        if (i == word.length) {
            reverse = true;
        }
    }
    else {
        i--;
        if (i == 0) {
            reverse = false;
        }
    }
    setTimeout(typewriter, 150)
}
typewriter();