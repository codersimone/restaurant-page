export default function loadHome() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.classList.add('homeHeading');
    heading.textContent = 'Salt';

    const info = document.createElement('p');
    info.classList.add('homeInfo');
    info.textContent = 'People cook for people with love';

    const subInfo = document.createElement('p');
    subInfo.classList.add('homeSubInfo');
    subInfo.textContent = 'Mon-Fri 12 am - 10 pm';

    content.appendChild(heading);
    content.appendChild(info);
    content.appendChild(subInfo);
}
