const spanCartNumber = document.getElementById('cart-number');

const displayCartNumber = () => {

    const strCartNumber = localStorage.getItem('cart-number')
    if (strCartNumber) {
        spanCartNumber.textContent = strCartNumber;
    } else {
        spanCartNumber.textContent = 0;
    }
}

const init = () => {
    displayCartNumber();
}

// Function's calls
init();