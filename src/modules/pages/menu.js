export default function loadMenu() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.classList.add('menuHeading');
    heading.textContent = 'Our menu';

    const list = document.createElement('ul');
    list.classList.add('menuList');
    const items = ['Appetizer', 'Salad', 'Main dish', 'Side dish', 'Dessert'];

    items.forEach((item) => {
        const itemsList = document.createElement('li');
        itemsList.textContent = item;
        list.appendChild(itemsList);
    });

    content.appendChild(heading);
    content.appendChild(list);
}
