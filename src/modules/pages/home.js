import loadBookingForm from './booking.js';

export default function loadHome() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.classList.add('homeHeading');
    heading.textContent = 'Salt';

    const info = document.createElement('p');
    info.classList.add('homeInfo');
    info.textContent = 'Is the head of everything';

    const button = document.createElement('button');
    button.classList.add('homeButton');
    button.textContent = 'Reserve';

    button.addEventListener('click', () => {
        loadBookingForm();
    });

    content.appendChild(heading);
    content.appendChild(info);
    content.appendChild(button);
}
