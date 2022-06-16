const menuData = require('./menu.json');

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
