const text = "Hello, World! This is a typewriter effect.";
const typewriterElement = document.getElementById('typewriter');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the typing speed here (in milliseconds)
    } else {
        // Optional: Reset the effect after typing is complete
        setTimeout(() => {
            typewriterElement.textContent = '';
            index = 0;
            typeWriter();
        }, 2000); // Wait 2 seconds before restarting
    }
}

// Start the typewriter effect
typeWriter();