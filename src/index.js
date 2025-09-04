import './styles/styles.css';
import loadHome from './modules/pages/home.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

document.querySelector('homeBtn').addEventListener('click', loadHome);
