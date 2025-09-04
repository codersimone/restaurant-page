export default function loadHome() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.classList.add('homeHeading');
    heading.textContent = 'Salt';

    const info = document.createElement('p');
    info.classList.add('homeInfo');
    info.textContent = 'Is the head of everything';

    const callBtn = document.createElement('button');
    callBtn.classList.add('homeCallButton');
    callBtn.textContent = 'Call to book a table';

    callBtn.addEventListener('click', () => {
        window.location.href = '+74959999999';
    });

    content.appendChild(heading);
    content.appendChild(info);
    content.appendChild(callBtn);
}
