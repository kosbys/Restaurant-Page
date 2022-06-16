import menuData from './menu.json' assert { type: 'json' };

class MenuCard {
    constructor(data = {}) {
        Object.assign(this, data);
    }
}

function menu() {
    const container = document.createElement('div');
    container.classList.add('container');

    return container;
}

export default menu;

const x = new MenuCard({ name: 'Pancakes', price: '$ 5.99', description: 'The best pancakes ever!' });

console.log(x);
