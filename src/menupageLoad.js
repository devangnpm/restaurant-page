export function MenuPageLoad() {
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const section_one = document.createElement('div');
    const section_two = document.createElement('div');
    const section_three = document.createElement('div');
    const content = document.querySelector('#content');
    const mainDishes = document.createElement('p');
    const sideDishes = document.createElement('p');
    const beverages = document.createElement('p');
    const temp_one = document.createElement('div');
    const temp_two = document.createElement('div');
    const temp_three = document.createElement('div');

    container.id = 'menu-container';
    h1.id = 'menu-h1';
    section_one.id = 'menu-section_one';
    section_two.id = 'menu-section_two';
    section_three.id = 'menu-section_three';
    mainDishes.id = 'menu-mainDishes';
    mainDishes.textContent = 'Main Dishes';
    sideDishes.id = 'menu-sideDishes';
    sideDishes.textContent = 'Side Dishes';
    beverages.id = 'menu-beverages';
    beverages.textContent = 'Beverages';

    let count = 0;
    h1.textContent = 'MENU';

    section_one.appendChild(mainDishes);
    section_two.appendChild(sideDishes);
    section_three.appendChild(beverages);

    // Main Dishes
    const mainDishNames = [
        "Moussaka Madness",
        "Souvlaki Supreme",
        "Gyro Galore",
        "Pastitsio Pleasure",
        "Spanakopita Spectacular",
        "Kleftiko Classic"
    ];

    for (let i = 0; i < 6; i++) {
        let card = document.createElement('div');
        let productName = document.createElement('p');
        let productImg = document.createElement('div');

        card.setAttribute('id', `main-${i}`);
        card.classList.add('card');

        productName.setAttribute('id', `product-${count}`);
        productName.textContent = mainDishNames[i];
        
        productImg.style.backgroundImage = `url('images/main_dish_${i+1}.jpg')`;

        card.appendChild(productImg);
        card.appendChild(productName);

        temp_one.id = 'temp_one';
        temp_one.appendChild(card);
        count += 1;
    }

    section_one.appendChild(temp_one);

    // Side Dishes
    const sideDishNames = [
        "Tzatziki Twist",
        "Feta Fries",
        "Dolmades Delight"
    ];

    for (let i = 0; i < 3; i++) {
        let card = document.createElement('div');
        let productName = document.createElement('p');
        let productImg = document.createElement('div');

        card.classList.add('card');
        card.setAttribute('id', `side-${i}`);

        productName.setAttribute('id', `product-${count}`);
        productName.textContent = sideDishNames[i];
        
        productImg.style.backgroundImage = `url('images/side_dish_${i+1}.jpg')`;

        card.appendChild(productImg);
        card.appendChild(productName);

        temp_two.id = 'temp_two';
        temp_two.appendChild(card);
        count += 1;
    }

    section_two.appendChild(temp_two);

    // Beverages
    const beverageNames = [
        "Ouzo Delight",
        "Greek Frappe",
        "Mythos Lager"
    ];

    for (let i = 0; i < 3; i++) {
        let card = document.createElement('div');
        let productName = document.createElement('p');
        let productImg = document.createElement('div');

        card.setAttribute('id', `beverage-${i}`);
        card.classList.add('card');

        productName.setAttribute('id', `product-${count}`);
        productName.textContent = beverageNames[i];
        
        productImg.style.backgroundImage = `url('images/beverage_${i+1}.jpg')`;

        card.appendChild(productImg);
        card.appendChild(productName);

        temp_three.id = 'temp_three';
        temp_three.appendChild(card);
        count += 1;
    }

    section_three.appendChild(temp_three);

    container.appendChild(h1);
    container.appendChild(section_one);
    container.appendChild(section_two);
    container.appendChild(section_three);
    content.appendChild(container);
    const firstCard = document.querySelector('#section_one .card');

    // Set the background image of the first card's product image to main_dish_1
    firstCard.style.backgroundImage = `url('${main_dish_1.src}')`;
}