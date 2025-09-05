import './styles/reset/reset.css';
import './styles/styles.css';
import loadHome from './modules/pages/home.js';
import loadMenu from './modules/pages/menu.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

document.querySelector('#homeBtn').addEventListener('click', loadHome);
document.querySelector('#menuBtn').addEventListener('click', loadMenu);
