const imgCarousel = document.getElementById('img-carousel');
const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].id = i * -100;
    buttons[i].addEventListener("click", () => {
        for (let button of buttons) {
            button.classList.remove('selected');
        }
        buttons[i].classList.add('selected');
        currentSlide = buttons[i].getAttribute('value');
        imgCarousel.style.transform = `translate(${buttons[i].id}vw)`
    });
}