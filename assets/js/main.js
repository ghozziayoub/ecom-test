// Global HTML variables
const ulCategoriesList = document.getElementById('categories-list');
const divProductsList = document.getElementById('products-list');
const spanCartNumber = document.getElementById('cart-number');

// DATA
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

let displayedProducts = products
let productsInCart = [];


// Functions
const filterProductsByCategoryId = id => {

    displayedProducts = []

    id == 0 ? displayedProducts = products : displayedProducts = products.filter(product => product.categoryId == id)

    displayProducts()

    /*
       for (let i = 0; i < products.length; i++) {
            if (products[i].categoryId == id) {
                displayedProducts.push(products[i])
            }
        } 
    */


}

const displayCategories = () => {
    for (i = 0; i < categories.length; i++) {
        ulCategoriesList.innerHTML += `<li onclick="filterProductsByCategoryId(${categories[i].id})">${categories[i].name}</li>`;
    }
}

const displayProducts = () => {
    divProductsList.innerHTML = ""

    for (i = 0; i < displayedProducts.length; i++) {
        divProductsList.innerHTML += `<div class="product-item">
       <div class="product-image">
         <img
           src="${displayedProducts[i].imageUrl}"
           alt=""
         />
       </div>
       <div class="product-details">
         <h3>${displayedProducts[i].title}</h3>
         <h5>${displayedProducts[i].price}</h5>
       </div>
       <div class="product-action">
         <button class="btn" onclick="addToCart(${displayedProducts[i].id})" >Add To Cart</button>
       </div>
     </div>`;
    }
}

const addToCart = (productId) => {

    spanCartNumber.textContent = Number(spanCartNumber.textContent) + 1;
    localStorage.setItem('cart-number', spanCartNumber.textContent);

    if (productsInCart.length == 0) {
        productsInCart.push({ id: productId, qte: 1 })
    } else {
        // search for index
        let index = -1;
        for (i = 0; i < productsInCart.length; i++) {
            if (productsInCart[i].id == productId) {
                index = i;
                break;
            }
        }

        // after search
        if (index >= 0) {
            productsInCart[index].qte++;
        } else {
            productsInCart.push({ id: productId, qte: 1 })
        }

    }

    localStorage.setItem('cart-products',JSON.stringify(productsInCart));
}

const displayCartNumber = () => {

    const strCartNumber = localStorage.getItem('cart-number')
    if (strCartNumber) {
        spanCartNumber.textContent = strCartNumber;
    } else {
        spanCartNumber.textContent = 0;
    }
}

const initProductsInCart = () => {
    const strCartProducts = localStorage.getItem('cart-products');
    if (strCartProducts) {
        productsInCart = JSON.parse(strCartProducts);
    } else {
        productsInCart = [];
    }
}

const init = () => {
    displayCategories();
    displayProducts();
    displayCartNumber();
    initProductsInCart();
}

// Function's calls
init()

