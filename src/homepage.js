function homepage() {
    const title = document.createElement('span');
    title.id = 'hero-title';
    title.innerText = 'Fresh and Decadent';
    const text = document.createElement('span');
    text.id = 'hero-text';
    text.innerText = 'These pancakes are the best treat for you and your family!';

    const container = document.createElement('div');
    container.classList.add('container');

    const welcome = document.createElement('div');

    welcome.classList.add('welcome');
    welcome.appendChild(title);
    welcome.appendChild(document.createElement('br'));
    welcome.appendChild(text);

    container.appendChild(welcome);

    return container;
}

export default homepage;
