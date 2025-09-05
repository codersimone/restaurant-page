export default function loadContact() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.classList.add('contactHeading');
    heading.textContent = '';

    const phone = document.createElement('p');
    phone.classList.add('contactPhone');
    phone.textContent = 'Phone: +7(999)999-99-99';

    const address = document.createElement('p');
    address.classList.add('contactAddress');
    address.textContent = 'Address: Tomsk, Lenin st., h. 9';

    content.appendChild(heading);
    content.appendChild(phone);
    content.appendChild(address);
}
