import './styles/reset/reset.css';
import './styles/styles.css';
import loadHome from './modules/pages/home.js';
import loadMenu from './modules/pages/menu.js';
import loadContact from './modules/pages/contact.js';
import { initMenuControls } from './modules/controls/menuControls.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    document.querySelector('#homeBtn').addEventListener('click', loadHome);
    document.querySelector('#menuBtn').addEventListener('click', () => {
        const menuList = loadMenu();
        initMenuControls(menuList);
    });
    document
        .querySelector('#contactBtn')
        .addEventListener('click', loadContact);
});
