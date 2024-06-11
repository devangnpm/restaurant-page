import Icon from './images/about.jpg';

export function AboutPageLoad() {
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const p_cont = document.createElement('div');
    const hero = document.createElement('div');

    hero.setAttribute('id', 'hero');
    p_cont.setAttribute('id', 'pcontainer');
    container.setAttribute('id', 'homepagecontainer');
    h1.textContent = 'About';

    const myIcon = new Image();
    myIcon.src = Icon;

    p.innerHTML = `Nisi irure duis esse esse sunt. Amet est sint voluptate id eu do aute minim. Nostrud laborum consequat fugiat dolor excepteur id. Magna reprehenderit irure dolor sit officia aliqua esse do qui consectetur laboris reprehenderit pariatur.<br><br>
    
    Non sit magna exercitation commodo. Fugiat officia nostrud cupidatat ea esse non amet magna laboris laboris veniam nostrud anim. Tempor laboris et velit esse officia in irure eu sunt et culpa. Esse duis qui ullamco ut cillum esse minim laboris. Voluptate id est aliquip sit consequat aliqua occaecat consequat quis velit non esse duis. Culpa mollit commodo sint duis non et ad ipsum mollit excepteur.<br><br>

    Nulla dolore nulla sunt irure reprehenderit excepteur culpa laboris nulla amet pariatur sunt ut dolore. Excepteur mollit ad ut labore id. Voluptate anim minim pariatur eu pariatur fugiat. Duis velit anim sit veniam. Eu veniam ea sint id aute. Aute officia culpa irure quis ex labore esse aliqua sunt culpa exercitation est. Non veniam irure anim reprehenderit cupidatat ex commodo.`;

    p_cont.appendChild(p);

    hero.appendChild(myIcon);
    hero.appendChild(p_cont);

    container.appendChild(h1);
    container.appendChild(hero);
    content.appendChild(container);
}