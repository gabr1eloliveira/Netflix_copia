let index = 0;
const slides = document.querySelector('.lista-series-slide__content');
const totalSlides = document.querySelectorAll('.lista-series-slide__item').length;

document.querySelector('#next').onclick = () => {
    if (index < totalSlides - 1) {
        index++;
        slides.style.transform = `translateX(-${index * 257}px)`;
    }
};

document.querySelector('#prev').onclick = () => {
    if (index > 0) {
        index--;
        slides.style.transform = `translateX(-${index * 257}px)`;
    }
};