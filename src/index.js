import homepage from './home';
import menu from './menu';
import './style.css';
import PancakeBackGround from './pancake.jpg';

const content = document.createElement('div');
content.id = 'content';
document.getElementsByTagName('body')[0].appendChild(content);

let currentPage = '';

(function initializeHeader() {
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
        link.appendChild(anchor);
        links.appendChild(link);
    });

    header.appendChild(title);
    header.appendChild(links);

    content.appendChild(header);
})();

(function initializeFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const anchor = document.createElement('a');

    anchor.href = 'https://github.com/kosbys';
    anchor.innerText = 'Github';

    footer.appendChild(anchor);

    content.appendChild(footer);
})();

function resetLinks() {
    const links = document.getElementsByClassName('link');
    for (let i = 0; i < links.length; i += 1) {
        links[i].firstChild.removeAttribute('id');
    }
}

function changetoHome() {
    if (currentPage === 'home') {
        return;
    }
    if (document.getElementsByClassName('container')[0]) {
        document.getElementsByClassName('container')[0].remove();
    }

    resetLinks();
    const link = document.getElementById('home').firstChild;
    link.id = 'current-page';

    const home = homepage();

    content.style = `background: url(${PancakeBackGround}); background-size: cover;`;

    content.insertBefore(home, content.lastChild);
    currentPage = 'home';
}

function changetoMenu() {
    if (currentPage === 'menu') {
        return;
    }
    if (document.getElementsByClassName('container')[0]) {
        document.getElementsByClassName('container')[0].remove();
    }

    content.style.background = null;

    const menuPage = menu();

    resetLinks();

    const link = document.getElementById('menu').firstChild;
    link.id = 'current-page';

    content.insertBefore(menuPage, content.lastChild);
    currentPage = 'menu';
}

function changetoContact() {}

(function NavigationListeners() {
    const links = document.getElementsByClassName('links')[0];
    Array.from(links.childNodes).forEach((link) => {
        link.addEventListener('click', (e) => {
            if (e.target.innerText === 'home') {
                changetoHome();
            } else if (e.target.innerText === 'menu') {
                changetoMenu();
            } else if (e.target.innerText === 'contact') {
                changetoContact();
            }
        });
    });
})();

changetoHome();
