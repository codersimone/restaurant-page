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
        itemsList.classList.add('menuDisabledItem');
        itemsList.textContent = item;

        const message = document.createElement('span');
        message.classList.add('menuPlug');
        message.textContent = ` - this section will be ready soon`;

        itemsList.appendChild(message);

        itemsList.addEventListener('click', (e) => {
            e.preventDefault();

            message.classList.add('show');
            setTimeout(() => {
                message.classList.remove('show');
            }, 2000);
        });

        list.appendChild(itemsList);
    });

    content.appendChild(heading);
    content.appendChild(list);
}
