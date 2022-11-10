const spanCartNumber = document.getElementById('cart-number');
const tbodyTableContent = document.getElementById('table-content');
const spanTotalPrice = document.getElementById('total-price');
const divCartProducts = document.getElementById('cart-products')

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

let productsInCart = [];


const displayCartNumber = () => {

    const strCartNumber = localStorage.getItem('cart-number')
    if (strCartNumber) {
        spanCartNumber.textContent = strCartNumber;
    } else {
        spanCartNumber.textContent = 0;
    }
}

const displayProductsInCart = () => {

    const strCartProducts = localStorage.getItem('cart-products');
    let sum = 0;

    if (strCartProducts) {
        productsInCart = JSON.parse(strCartProducts);
        tbodyTableContent.innerHTML = ""
        for (i = 0; i < productsInCart.length; i++) {
            for (j = 0; j < products.length; j++) {
                if (productsInCart[i].id == products[j].id) {
                    tbodyTableContent.innerHTML += `
                    <tr>
                        <td>
                            <img class ="cart-product-img" src="${products[j].imageUrl}">
                        </td>
                        <td>${products[j].title}</td>
                        <td>${products[j].price}</td>
                        <td>
                        <button class="btn-minus" id="minus-btn" onclick="minusQuantity(${i})"> - </button>
                        ${productsInCart[i].qte}
                        <button class="btn-plus" id="plus-btn" onclick="plusQuantity(${i})"> + </button>
                        </td>
                        <td>${productsInCart[i].qte * products[j].price}</td>
                        <td>
                            <button class="btn-delete" onclick="removeProductInCart(${productsInCart[i].id})" >Delete</button>
                        </td> 
                    </tr>`
                    sum += productsInCart[i].qte * products[j].price;
                    spanTotalPrice.textContent = sum;
                    break;
                }
            }

        }
    } else {
        productsInCart = [];
        divCartProducts.innerHTML = `
        <h1 style="text-align:center"> Your Shopping Cart is Empty </h1> ` ;
    }

    if ( productsInCart.length == 0) {
        divCartProducts.innerHTML = `
        <h1 style="text-align:center"> Your Shopping Cart is Empty </h1> ` ;
    }
}

const removeProductInCart = (productId) => {
    // search for index
    let index = -1;
    for (i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == productId) {
            index = i;
            break;
        }
    }

    spanCartNumber.textContent = Number(spanCartNumber.textContent) - productsInCart[index].qte;
    localStorage.setItem('cart-number', spanCartNumber.textContent);

    productsInCart.splice(index, 1);
    localStorage.setItem('cart-products', JSON.stringify(productsInCart));

    init();
}

const plusQuantity = (index) => {

    spanCartNumber.textContent = Number(spanCartNumber.textContent) + 1;
    localStorage.setItem('cart-number', spanCartNumber.textContent);

    productsInCart[index].qte++;
    localStorage.setItem('cart-products', JSON.stringify(productsInCart));

    init();

}

const minusQuantity = (index) => {
    if (productsInCart[index].qte > 1) {
        spanCartNumber.textContent = Number(spanCartNumber.textContent) - 1;
        localStorage.setItem('cart-number', spanCartNumber.textContent);

        productsInCart[index].qte--;
        localStorage.setItem('cart-products', JSON.stringify(productsInCart));

        init();
    }

}

const init = () => {
    displayCartNumber();
    displayProductsInCart();
}

// Function's calls
init();