let days = document.querySelector('#days');
let hours = document.querySelector('#hours');



let deadline = new Date('2023-09-22');


const day = (days, hours) =>{
    let current = new Date();
    let result = new Date(deadline) - current;
    hours.textContent = (Math.floor(result / 1000 / 60 /60) % 24) - 12;
    days.textContent = Math.floor(result / 1000 / 60 /60 / 24);
    setInterval(() => {
        day(days, hours)
    }, 1000);
};

day(days, hours);