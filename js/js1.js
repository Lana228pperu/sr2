const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
});




let cart = [];
let total = 0;

const addButtons = document.querySelectorAll('.add-btn');

addButtons.forEach(button => {
    button.addEventListener('click', function() {
        const menuItem = this.closest('.menu-item');
        const name = menuItem.querySelector('h3').textContent;
        const priceText = menuItem.querySelector('.price').textContent;
        const price = parseFloat(priceText.replace(/[^\d]/g, ''));

        // Додаємо в кошик
        cart.push({name, price});

        // Підрахунок суми
        total += price;

        // Оновлюємо відображення
        const cartList = document.getElementById('cart-items');
        cartList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₴${item.price}`;
            cartList.appendChild(li);
        });

        document.getElementById('total-price').textContent = `₴${total}`;
    });
});


const textSlides = document.querySelectorAll('.text-slide');
const textSlider = document.querySelector('.text-slider');
let textIndex = 0;

document.querySelector('.next-text').addEventListener('click', () => {
    textIndex = (textIndex + 1) % textSlides.length;
    textSlider.style.transform = `translateX(-${textIndex * 100}%)`;
});

document.querySelector('.prev-text').addEventListener('click', () => {
    textIndex = (textIndex - 1 + textSlides.length) % textSlides.length;
    textSlider.style.transform = `translateX(-${textIndex * 100}%)`;
});



function startCountdown() {
    const eventDate = new Date('February 14, 2026 00:00:00').getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) return;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }, 1000);
}

startCountdown();
