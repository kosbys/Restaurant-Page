import homepage from './homepage';
import menu from './menu';
import './style.css';
import PancakeBackGround from './pancake.jpg';

// TODO: ADD CARD INFO YAML/TOML AND FINISH MENU SCRIPT

(function initializeHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = 'The Pancake Shoppe';
    const links = document.createElement('div');
    links.classList.add('links');

    const home = document.createElement('div');
    home.id = 'home';
    const menuAnchor = document.createElement('div');
    menuAnchor.id = 'menu';
    const contact = document.createElement('div');
    contact.id = 'contact';

    const linksArray = [home, menuAnchor, contact];

    linksArray.forEach((element) => {
        const link = element;
        const anchor = document.createElement('a');

        anchor.innerText = link.id;
        anchor.id = link.id;

        link.classList.add('link');
        link.removeAttribute('id');
        link.appendChild(anchor);
        links.appendChild(link);
    });

    header.appendChild(title);
    header.appendChild(links);

    content.appendChild(header);
})();

(function initializeHome() {
    const content = document.getElementById('content');

    const home = homepage();

    content.style = `background: url(${PancakeBackGround}); background-size: cover;`;

    content.appendChild(home);
})();

(function initializeFooter() {
    const content = document.getElementById('content');
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const anchor = document.createElement('a');

    anchor.href = 'https://github.com/kosbys';
    anchor.innerText = 'Github';

    footer.appendChild(anchor);

    content.appendChild(footer);
})();

function changetoMenu() {
    const content = document.getElementById('content');
    if (content.childNodes[1].class === 'container') {
        content.removeChild(document.getElementsByClassName('container')[0]);
    }

    const menuPage = menu();

    content.appendChild(menuPage);
}
