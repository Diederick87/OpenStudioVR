const open = document.querySelector(".mob-open");
const close = document.querySelector(".mob-close");

const wrapper = document.querySelector(".mob-wrapper").classList;

open.addEventListener("click", () => {
    wrapper.toggle("opened");
    wrapper.toggle("close");
});

close.addEventListener("click", () => {
    wrapper.toggle("opened");
    wrapper.toggle("close");
});

//button colors change start

window.addEventListener('load', function () {
    var buttons = document.querySelectorAll('.fade-in-button');
    buttons.forEach(function (button, index) {
        setTimeout(function () {
            button.classList.add('fade-in');
            startRainbowText(button); // Start rainbow effect for each button
        }, index * 900); // Adjust the duration between each button's fade-in (in milliseconds)
    });
});

function startRainbowText(button) {
    var hue = 0;
    setInterval(function () {
        hue = (hue + 1) % 360;
        button.style.color = 'hsl(' + hue + ', 100%, 50%)';
    }, 50); // Adjust the speed of color change (in milliseconds)
}

//button colors change end