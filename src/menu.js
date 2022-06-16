import Pancake from './pancake.svg';
import Pancakes from './pancakes.jpg';
import Donuts from './donuts.jpg';
import Crepe from './crepe.jpg';
import Cheesecake from './cheesecake.jpg';
import Macarons from './macarons.jpg';
import IceCream from './ice-cream.jpg';

const menuData = require('./menu.json');

class MenuCard {
    constructor(data = {}) {
        Object.assign(this, data);
    }
}

const backgrounds = [Pancakes, Donuts, Crepe, Cheesecake, Macarons, IceCream];

const populateCardText = function populateCardText(text, name, price, description, sale = '') {
    if (sale) {
        text.appendChild(name);
        text.appendChild(price);
        text.appendChild(sale);
        text.appendChild(description);
    } else {
        text.appendChild(name);
        text.appendChild(price);
        text.appendChild(description);
    }
};

function menu() {
    const container = document.createElement('div');
    container.classList.add('container');

    const header = document.createElement('div');
    header.classList.add('menu-header');
    const icon = document.createElement('img');

    icon.src = Pancake;

    const title = document.createElement('span');
    title.innerText = 'Menu';

    header.appendChild(icon);
    header.appendChild(title);
    header.appendChild(icon.cloneNode(true));

    const cards = document.createElement('div');
    cards.classList.add('menu-cards');

    menuData.menu.forEach((card, i) => {
        const menuItem = new MenuCard(card);
        const item = document.createElement('div');
        item.classList.add('card');
        const image = document.createElement('div');

        image.classList.add('card-image');

        image.style.backgroundImage = `url(${backgrounds[i]})`;
        // url(${PancakeBackGround});

        item.appendChild(image);

        const text = document.createElement('div');
        text.classList.add('card-text');
        const name = document.createElement('h2');
        name.innerText = menuItem.name;
        const price = document.createElement('span');
        price.innerText = `$ ${menuItem.price}`;

        const description = document.createElement('p');
        description.innerText = menuItem.description;

        if (menuItem.sale) {
            const sale = document.createElement('span');
            sale.innerText = `$ ${menuItem.sale}`;
            sale.classList.add('sale');
            price.classList.add('sale-tag');
            populateCardText(text, name, price, description, sale);
        } else {
            populateCardText(text, name, price, description);
        }

        item.appendChild(text);
        cards.appendChild(item);
    });

    container.appendChild(header);
    container.appendChild(cards);

    return container;
}

export default menu;
