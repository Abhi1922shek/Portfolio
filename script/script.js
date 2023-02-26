const toggleSwitch = document.querySelector('#toggle');
const themeToggle = document.querySelector('#theme-toggle');

// Add event listener for the toggle switch
toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
});

// Check the toggle switch if the user has a dark theme preference
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkTheme.matches) {
    toggleSwitch.checked = true;
    document.body.classList.add('dark');
} else {
    toggleSwitch.checked = false;
    document.body.classList.add('light');
}

const texts = ['Abhishek Bhat'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-effect').textContent = letter;
    if (letter.length === currentText.length + 1) {
        index = 0;
        count++;
    }
    setTimeout(type, letter[index] === ' ' ? 500 : 100);
}());

// const typingEffect = () => {
//     const h2Element = document.querySelector('.typing-effect');
//     const text = h2Element.innerText;
//     h2Element.innerText = '';
//     let i = 0;
//     const intervalId = setInterval(() => {
//         h2Element.innerText += text[i];
//         i++;
//         if (i === text.length) {
//             clearInterval(intervalId);
//         }
//     }, 100);
// }
//
// typingEffect();