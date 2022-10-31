const categories = [
    {
        id: 0,
        name: "All",
    },
    {
        id: 1,
        name: "Électroménager",
    },
    {
        id: 2,
        name: "Maison & Deco",
    },
    {
        id: 3,
        name: "Beauté",
    },
    {
        id: 4,
        name: "Fleurs",
    },
    {
        id: 5,
        name: "Traiteurs et Pâtisserie",
    },
];
const ulCategoriesList = document.getElementById('categories-list');


function displayCategories() {
    for (i = 0; i < categories.length; i++) {
        ulCategoriesList.innerHTML += `<li>${categories[i].name}</li>`;
    }
}
displayCategories();


// display-products 

const products = [
    {
        id: 0,
        imageUrl: "https://lys.tn:3002/public/providers/ybcjcvdd9nl_1647518211287.jpg",
        title: "Hend Hachicha Make up Artist",
        price: "500",
        categoryId: 3,
    },
    {
        id: 1,
        imageUrl: "https://lys.tn:3002/public/providers/de35vnwo01h_1647517002104.jpg",
        title: "Guirat l'art de la maison",
        price: "65",
        categoryId: 1,
    },
    {
        id: 2,
        imageUrl: "https://lys.tn:3002/public/providers/7mg8xf9u93f_1647521853609.jpg",
        title: "Patisserie Hachicha By Omar",
        price: "100",
        categoryId: 5,
    },
    {
        id: 3,
        imageUrl: "https://lys.tn:3002/public/providers/0vdr2n97xn3p_1647516164671.jpg",
        title: "Meubles Jarraya",
        price: "4000",
        categoryId: 2,
    },
    {
        id: 4,
        imageUrl: "https://lys.tn:3002/public/providers/y3b9xuj00h_1647522354550.jpg",
        title: "F L E U R E N T I N O",
        price: "100",
        categoryId: 4,
    },
];

const divProductsList = document.getElementById('products-list');

function displayProducts() {
    for (i = 0; i < products.length; i++) {
        divProductsList.innerHTML += `<div class="product-item">
       <div class="product-image">
         <img
           src="${products[i].imageUrl}"
           alt=""
         />
       </div>
       <div class="product-details">
         <h3>${products[i].title}</h3>
         <h5>${products[i].price}</h5>
       </div>
       <div class="product-action">
         <button class="btn">Add To Cart</button>
       </div>
     </div>`;
    }
}
displayProducts();

