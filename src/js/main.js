let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes')

let deadline = new Date(2023, 8, 22, 17, 0, 0); // Установка даты и времени

const updateCountdown = (daysElement, hoursElement) => {
    let current = new Date();
    let result = deadline - current;
    let hoursRemaining = Math.floor(result / 1000 / 60 / 60) % 24;
    let daysRemaining = Math.floor(result / 1000 / 60 / 60 / 24);
    hoursElement.textContent = hoursRemaining < 10 ? `0${hoursRemaining}` : hoursRemaining;
    daysElement.textContent = daysRemaining;
};

updateCountdown(days, hours);

setInterval(() => {
    updateCountdown(days, hours);
}, 1000);
