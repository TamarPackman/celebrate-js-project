
let cart = localStorage.getItem('currentBag');
cart = JSON.parse(cart);

const openPopup = () => {
    document.getElementById('popup-remove').style.display = 'flex';

}

function closePopup() {
    document.getElementById('popup-remove').style.display = 'none';
    location.reload(true);
}


if (!cart) {
    if (document.querySelector("#textCountBag")) {
        document.querySelector("#textCountBag").innerHTML = 'אין מוצרים בעגלה';
        localStorage.setItem('countBag', JSON.stringify(0));

    }

}

const setProducts = () => {
    if (document.querySelector(".cart-item")) {
        document.querySelector(".cart-item").innerHTML = '';
    }

    let totalItems = 0;

    cart.forEach((element, index) => {
        totalItems++;

        const divProduct = document.createElement('div');
        divProduct.className = 'cartItem';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const image = document.createElement('img');
        image.src = element.image[0];
        image.dataset.index = 0;

        const prevButton = document.createElement('button');
        prevButton.className = 'prev-button';
        prevButton.innerHTML = '&lt;';
        prevButton.onclick = () => showImage(index, -1, cart);

        const nextButton = document.createElement('button');
        nextButton.className = 'next-button';
        nextButton.innerHTML = '&gt;';
        nextButton.onclick = () => showImage(index, 1, cart);

        const moreInfoButton = document.createElement('a');
        moreInfoButton.href = `./ProductDisplay.html?Code=${element.code}&catagory=${element.catagory}`;
        moreInfoButton.className = 'elmemtpurple-button';
        moreInfoButton.classList.add('elmemtpurple-buttonNew');
        moreInfoButton.innerHTML = 'לקביעת תור';

        const itemDetails = document.createElement('div');
        itemDetails.className = 'item-details';

        const itemName = document.createElement('div');
        itemName.className = 'item-name';
        itemName.innerHTML = element.name;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.innerHTML = '<i class="fa fa-trash trash-icon"></i>'; // אייקון פח
        removeButton.onclick = (e) => {

            cart = cart.filter(item => item.code !== element.code);
            localStorage.setItem('currentBag', JSON.stringify(cart));
            let countBag = localStorage.getItem('countBag');
            countBag = JSON.parse(countBag);
            countBag--;
            localStorage.setItem('countBag', JSON.stringify(countBag));
            openPopup();
        };

        const heartIcon = document.createElement('span');
        heartIcon.className = 'heart-icon';
        heartIcon.innerHTML = '<i class="fa fa-heart"></i>'; // אייקון לב

        itemDetails.appendChild(itemName);

        imageContainer.appendChild(prevButton);
        imageContainer.appendChild(image);
        imageContainer.appendChild(nextButton);

        divProduct.appendChild(heartIcon);
        divProduct.appendChild(imageContainer);
        divProduct.appendChild(itemDetails);
        divProduct.appendChild(moreInfoButton);
        divProduct.appendChild(removeButton);

        if (document.querySelector(".cart-item")) {
            document.querySelector(".cart-item").appendChild(divProduct);

        }
    });
    if (document.querySelector("#textCountBag")) {
        document.querySelector("#textCountBag").innerHTML = `יש ${totalItems} מוצרים בעגלה`;

    }
}

const showImage = (productIndex, direction, products) => {
    const product = products[productIndex];
    const image = document.querySelectorAll('.image-container img')[productIndex];
    let currentIndex = parseInt(image.dataset.index);
    const imageArray = product.image;

    currentIndex = (currentIndex + direction + imageArray.length) % imageArray.length;
    image.src = imageArray[currentIndex];
    image.dataset.index = currentIndex;
};
if (!cart) {
    document.querySelector("#textCountBag").innerHTML = 'אין מוצרים בעגלה';
    localStorage.setItem('countBag', JSON.stringify(0));
}
else

    setProducts();

document.addEventListener('DOMContentLoaded', () => {
    const emptyCartButton = document.querySelector('#emptyCartButton');

    if (emptyCartButton) {
        emptyCartButton.addEventListener('click', () => {
            if (confirm('האם אתה בטוח שברצונך לרוקן את הסל?')) {
                localStorage.removeItem('currentBag');
                cart = [];
                document.querySelector("#cart").innerHTML = '<h2 class="animated-word">Wish List </h2>';
                document.querySelector("#textCountBag").innerHTML = 'אין מוצרים בעגלה';
                localStorage.setItem('countBag', JSON.stringify(0));
            }
        });
    }

    setProducts();
});






