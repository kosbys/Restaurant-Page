class MenuCard {
    constructor(name, price, salePrice, description, image) {
        this.name = name;
        this.price = price;
        this.salePrice = salePrice;
        this.description = description;
        this.image = image;
    }
}

function menu() {
    const container = document.createElement('div');
    container.classList.add('container');

    return container;
}

export default menu;
