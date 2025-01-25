const textElement = document.getElementById('typing-effect');
const textToType = "Welcome to Your Tools Hub";
let index = 0;

(function typeText() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
})();
