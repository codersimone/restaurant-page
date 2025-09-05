import './styles/reset/reset.css';
import './styles/styles.css';
import loadHome from './modules/pages/home.js';
import loadMenu from './modules/pages/menu.js';
import loadContact from './modules/pages/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

document.querySelector('#homeBtn').addEventListener('click', loadHome);
document.querySelector('#menuBtn').addEventListener('click', loadMenu);
document.querySelector('#contactBtn').addEventListener('click', loadContact);
