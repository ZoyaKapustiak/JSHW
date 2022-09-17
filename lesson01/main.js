const products = [{
        id: 1,
        title: 'NoteBook',
        price: 1000,
        photo: 'img/notebook.jpg'
    },
    {
        id: 2,
        title: 'Mouse',
        price: 100,
        photo: 'img/notebook.jpg'
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 800,
        photo: 'img/notebook.jpg'
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 500,
        photo: 'img/notebook.jpg'
    }
];

const renderProducts = (item) =>
    `<div class = "product">
        <img class = "productImg" src="${item.photo}">
        <h2 class="productTitle">${item.title}</h2>
        <p class = "productPrice">${item.price} y.e.</p>
        <button class = "productButton">Купить</button>
    </div>`

const renderPage = list => {
    const productList = list.map(item =>
        renderProducts(...[item]));

    document.querySelector('.products').innerHTML = productList.join('');

};

renderPage(products);