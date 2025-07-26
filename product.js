const products = [{
        id: 1,
        name: "Boat Rockerz 551|Wireless Headphones",
        description: "Premium noise-canceling wireless headphones with 30-hour battery life.",
        price: 199.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.UkUriuwLqdYxyW9lJhs_sAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 2,
        name: "Fitbit Band",
        description: "Feature-packed smartwatch with health monitoring and notifications.",
        price: 249.99,
        image: "https://www.digitaltrends.com/wp-content/uploads/2022/09/Fitbit-Inspire-3-7.jpg?p=1"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        description: "Portable waterproof speaker with 20 hours of playtime.",
        price: 89.99,
        image: "https://uk.jbl.com/on/demandware.static/-/Library-Sites-SharedLibrary-JB/default/dwb95d3777/glp/waterproof-ccpi/images/flip5-visual.jpg"
    },
    {
        id: 4,
        name: "E-Reader",
        description: "High-resolution e-reader with adjustable warm light.",
        price: 129.99,
        image: "https://www.techtoreview.com/upload/images/KOBO%20Forma.jpg"
    }
];

const productsGrid = document.getElementById('products-grid');
const sortBtn = document.querySelector('.sort-btn');
const sortDropdown = document.querySelector('.sort-dropdown');
const sortOptions = document.querySelectorAll('.sort-option');

function displayProducts(productsArray) {
    productsGrid.innerHTML = '';
    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">$${product.price}</div>
                    </div>
                `;
        productsGrid.appendChild(productCard);
    });
}

function sortProducts(sortType) {
    let sortedProducts = [...products];

    switch (sortType) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            sortBtn.textContent = 'Sort by: Price: Low to High';
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            sortBtn.textContent = 'Sort by: Price: High to Low';
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            sortBtn.textContent = 'Sort by: Name: A to Z';
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            sortBtn.textContent = 'Sort by: Name: Z to A';
            break;
        default:
            sortBtn.textContent = 'Sort by: Default';
    }
    displayProducts(sortedProducts);
}
sortBtn.addEventListener('click', () => {
    sortDropdown.classList.toggle('active');
});

sortOptions.forEach(option => {
    option.addEventListener('click', () => {
        const sortType = option.dataset.sort;
        sortProducts(sortType);
        sortDropdown.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.sort-container')) {
        sortDropdown.classList.remove('active');
    }
});

displayProducts(products);