export default function loadMenu() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.classList.add('menuHeading');
    heading.textContent = 'Our menu';

    const list = document.createElement('ul');
    list.classList.add('menuList');

    const sections = {
        Appetizer: [
            { name: 'Home-salted trout', price: '9$' },
            { name: 'Smoked bacon', price: '7$' },
            { name: 'Onion and egg patty', price: '3$' },
        ],
        Salad: [
            { name: 'Seasonal vegetables', price: '6$' },
            { name: 'Vinaigrette', price: '8$' },
            { name: 'Mimosa', price: '10$' },
        ],
        Main: [
            { name: 'Siberian dumplings', price: '16$' },
            { name: `Boar's ribs`, price: '20$' },
            { name: 'Hot smoked sterlet', price: '22$' },
        ],
        Dessert: [
            { name: 'Honey cake', price: '10$' },
            { name: 'Cranberry sorbet', price: '7$' },
            { name: 'Cedar homemade ice-cream', price: '17$' },
        ],
    };

    Object.entries(sections).forEach(([section, dishes], index) => {
        const sectionItem = document.createElement('li');
        sectionItem.classList.add('sectionItem');

        const headerBtn = document.createElement('button');
        headerBtn.type = 'button';
        headerBtn.classList.add('headerBtn');
        headerBtn.setAttribute('aria-expanded', 'false');
        headerBtn.setAttribute('aria-controls', `section-${index}`);

        const menuArrow = document.createElement('span');
        menuArrow.classList.add('menuArrow');

        const menuTitle = document.createElement('span');
        menuTitle.classList.add('menuTitle');
        menuTitle.textContent = section;

        headerBtn.appendChild(menuArrow);
        headerBtn.appendChild(menuTitle);

        const dishesList = document.createElement('ul');
        dishesList.classList.add('dishesList');
        dishesList.id = `section-${index}`;
        dishesList.setAttribute('aria-hidden', 'true');

        dishes.forEach((dish) => {
            const dishItem = document.createElement('li');
            dishItem.classList.add('dishItem');

            const dishName = document.createElement('span');
            dishName.classList.add('dishName');
            dishName.textContent = dish.name;

            const dishPrice = document.createElement('span');
            dishPrice.classList.add('dishPrice');
            dishPrice.textContent = dish.price;

            dishItem.appendChild(dishName);
            dishItem.appendChild(dishPrice);
            dishesList.appendChild(dishItem);
        });

        sectionItem.appendChild(headerBtn);
        sectionItem.appendChild(dishesList);
        list.appendChild(sectionItem);
    });

    content.appendChild(heading);
    content.appendChild(list);

    return list;
}
