// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle'); // optional: animate hamburger
});
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    formMessage.textContent = "Your table has been booked successfully!";
    
    bookingForm.reset();
});
const newsForm = document.getElementById('newsletterForm');
const newsMsg = document.getElementById('newsMsg');

newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsMsg.textContent = "Subscribed Successfully!";
    newsForm.reset();
});
