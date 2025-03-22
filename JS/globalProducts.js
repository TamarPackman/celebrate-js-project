//קבלת פרמטר המבטא את הצגת המוצרים המתבקשת
let searchAjaxParams = new URLSearchParams(location.search);
searchAjaxParams = searchAjaxParams.get('catagory');



//קבלת הדיב אליו יוכנסו המוצרים המתבקשים
let EventVenue = document.querySelector("#globalProducts");

//אוביקט המבטא פרמטר לחיפוש
const displayConfig = {
    searchBy: '',
};

//מערך המשמר את המוצרים הנוכחים
const DB = {
    products: [],
};

//קבלת כמות המוצרים בעגלה
let countBag = localStorage.getItem('countBag');

//במידה ואין מוצרים בעגלה 
if (!countBag)
    localStorage.getItem('countBag', JSON.stringify(0));

//קבלת מוצרי העגלה
let localArr = localStorage.getItem('currentBag');
localArr = JSON.parse(localArr);


//חילוץ הפרמטר מהקישור שנשלח והשמתו בערך החיפוש
const srearchParams = new URLSearchParams(location.search);
if (srearchParams.get('HallName') === null) {
    displayConfig.searchBy = srearchParams.get('freeType');
}
else {
   

    displayConfig.searchBy = srearchParams.get('HallName');
    if(searchAjaxParams==='eventVenue')
   
    document.querySelector('#headerPictures').style.backgroundImage = `url("/DataPictures/Halls/${displayConfig.searchBy}.jpg")`;
  
        else
    document.querySelector('#headerPictures').style.backgroundImage = `url("/DataPictures/${searchAjaxParams}/${displayConfig.searchBy}.jpg")`;
}




let flag1 = 0;

//קריאה לנתונים המסויימים לקטגוריה הנבחרה
$.ajax({
    url: `/Data/${searchAjaxParams}.json`,
    success: (data) => {
        const { products } = data;
        DB.products = products;
        if (srearchParams.get('HallName') === null) {
            DB.products.forEach((element) => {
                if ((element.subCatagory).includes(displayConfig.searchBy)) {
                   
                    if (displayConfig.searchBy === '') {
                        let catagoryName;
                        if (searchAjaxParams === 'eventVenue')
                            catagoryName = 'מקום אירוע';
                        if (searchAjaxParams === 'CareAndBeauty')
                            catagoryName = 'טיפוח ויופי';
                        if (searchAjaxParams === 'music')
                            catagoryName = 'מוזיקה';
                        if (searchAjaxParams === 'photo')
                            catagoryName = 'צילום';
                        if (searchAjaxParams === 'CatringAndBar')
                            catagoryName = 'קייטרינג ובר';
                        document.querySelector("#headerPictures").innerHTML = catagoryName;
                        document.querySelector('#headerPictures').style.backgroundImage = `url("/generalPictures/נותני שרות.jpg")`;
                  
                    }
                    else {
                       
                        document.querySelector("#headerPictures").innerHTML = element.subCatagory;
                        if(searchAjaxParams==='eventVenue')
                        {
                          
                            document.querySelector('#headerPictures').style.backgroundImage = `url("/DataPictures/Halls/${displayConfig.searchBy}.jpg")`;
                        }
                            else
                        document.querySelector('#headerPictures').style.backgroundImage = `url("/DataPictures/${searchAjaxParams}/${element.subCatagory}.jpg")`;
                    }
                    setProducts();
                    flag1 = 1;
                    return;
                }
                else {
                    if ((element.catagory).includes(displayConfig.searchBy))
                    {displayConfig.searchBy = '';
                        return;}
                        
                }

            })
            if (!flag1) {
                DB.products.forEach((element) => {
                   
                    if ((element.name).includes(displayConfig.searchBy)) {
                        document.querySelector("#headerPictures").innerHTML = element.subCatagory;

                        if(searchAjaxParams==='eventVenue')
                            document.querySelector('#headerPictures').style.backgroundImage = `url("/DataPictures/Halls/${element.subCatagory}.jpg")`;
else
                        document.querySelector('#headerPictures').style.backgroundImage = `url("/DataPictures/${searchAjaxParams}/${element.subCatagory}.jpg")`;

                        DB.products = filterProducts(DB.products, element.subCatagory);
                        setProducts();
                        flag1 = 1;
                        return;
                    }
                })
                if (flag1 == 0) {
                    //להוסיף
                }
            }

        }
        else {
          
            document.querySelector("#headerPictures").innerHTML = displayConfig.searchBy;
            
           
            setProducts();
        }
    }
});


//פונקציה שאחראית להכניס למערך את כל המוצרים שענו על תנאי החיפוש
const filterProducts = (products, searchBy) => {
    return products.filter((product) => {
        return product.name.includes(searchBy) || product.catagory.includes(searchBy) || product.subCatagory.includes(searchBy);
    });
};


let flag2;
//פונקציה המציגה את כל המוצרים על המסך
const setProducts = () => {

   
    let res = 0;
    let productsFilter = filterProducts(DB.products, displayConfig.searchBy);

// if(productsFilter.length===0){
//     document.querySelector('footer').style.display="none";
// }

{
    if(productsFilter.length>=1&&productsFilter.length<=3)
        {
            document.querySelector('footer').style.marginTop='1200px'
        }
        else{
            let merginTop=productsFilter.length/3*900;
            document.querySelector('footer').style.marginTop=`${merginTop}px`;
        }
    }
    document.querySelector("#globalProducts").innerHTML = '';
    productsFilter.forEach((element, index) => {


        let divProduct = document.createElement('div');
        divProduct.className = 'divProduct';

        const heartButton = document.createElement('button');
        heartButton.className = 'heart-button';
        heartButton.innerHTML = element.heart;
        if (localArr != null && sessionStorage.getItem('ifChange') != null) {
            let res = localArr.find((heart) => element.code === heart.code);
            if (res) {

                heartButton.style.color = "red";
            }

        }
        //פונקציה המעדכנת את מצב המוצר על הלקוח אהוב או לא :)
        heartButton.onclick = (e) => {
            if (!sessionStorage.getItem('ifChange')) {
                document.querySelector('#login').classList.add('blink-link2');
                return;
            }

            let getIfRedFromLocal = localStorage.getItem('currentBag');
            getIfRedFromLocal = JSON.parse(getIfRedFromLocal);
            let inCart = 0;

            if (getIfRedFromLocal) {
                getIfRedFromLocal.forEach(e => {
                    if (element.code === e.code)
                        inCart = 1;
                });
            }

            if (inCart) {
                openPopup();
                e.target.style.color = "gray";
                let bag = curenntBag();
                bag = bag.filter(item => item.code !== element.code);
                localStorage.setItem('currentBag', JSON.stringify(bag));
                let countBag = localStorage.getItem('countBag');
                countBag = JSON.parse(countBag);
                countBag--;
                document.querySelector("#textCountBag").innerHTML = `.You Have ${countBag} items you love`;
                localStorage.setItem('countBag', JSON.stringify(countBag));

            }
            else {

                // flag2=1;
                e.target.style.color = "red";
                document.querySelectorAll(".modal")[2].style.display = "block";
                let bag = curenntBag();
                const currentItem = {
                    code: element.code,
                    catagory: element.catagory,
                    subCatagory: element.subCatagory,
                    name: element.name,
                    image: [...element.image],
                    phone: element.phone,
                    address: element.address,
                    profil: element.profil,
                    text: element.text,
                    heart: element.heart,
                    backgroundPicture: element.backgroundImage
                };
                bag.push(currentItem);
                localArr = bag;
                localStorage.setItem('currentBag', JSON.stringify(bag));
                let countBag = localStorage.getItem('countBag');
                countBag = JSON.parse(countBag);
                countBag++;
                document.querySelector("#textCountBag").innerHTML = `.You Have ${countBag} items you love`;
                localStorage.setItem('countBag', JSON.stringify(countBag));
                setBag(bag);
               
            }
        }

        //קבלת טופס הסל
        let modal5 = document.querySelectorAll(".modal")[2];
        let span5 = document.getElementsByClassName("close")[2];

        span5.onclick = function () {
            modal5.style.display = "none";
            if (flag2) {
                location.reload(true);
                flag2 = 0;
            }
        }

        window.onclick = function (event) {

            if (event.target == modal5) {
                modal5.style.display = "none";
                if (flag2) {
                    location.reload(true);
                    flag2 = 0;
                }
            }

        }

        //יצירת המוצר והכנסתו לעמוד
        const h1 = document.createElement('h1');
        h1.innerHTML = element.name;
        const moreInfoButton = document.createElement('a');
        moreInfoButton.href = `/HTML/ProductDisplay.html?Code=${element.code}&catagory=${element.catagory}`;
        moreInfoButton.className = 'more-info-button';
        moreInfoButton.innerHTML = 'עוד על העסק';
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        const image = document.createElement('img');
        image.src = element.image[0];
        image.dataset.index = 0; // Store the current image index
        const prevButton = document.createElement('button');
        prevButton.className = 'prev-button';
        prevButton.innerHTML = '&gt;';
        prevButton.onclick = () => showImage(index, -1, productsFilter);
        const nextButton = document.createElement('button');
        nextButton.className = 'next-button';
        nextButton.innerHTML = '&lt;';
        nextButton.onclick = () => showImage(index, 1, productsFilter);
        imageContainer.appendChild(prevButton);
        imageContainer.appendChild(image);
        imageContainer.appendChild(nextButton);
        divProduct.append(imageContainer);
        divProduct.append(heartButton);
        divProduct.append(moreInfoButton);
        divProduct.append(h1);
        document.querySelector("#globalProducts").append(divProduct);

    });

   
        
};


//פונקציה להצגת עגלת המוצרים
const setBag = (bag) => {
    const bagElement = document.querySelector("#allBag");
    // const pageBagElement = document.querySelector(".cart");
    bagElement.innerHTML = '';
    bag.forEach((element, i) => {

        const divProduct = document.createElement('div');
        divProduct.className = 'divProduct';
        const heartButton = document.createElement('button');

        heartButton.className = 'heart-button';
        heartButton.innerHTML = element.heart;
        heartButton.style.color = "red";

        const h1 = document.createElement('h1');
        h1.innerHTML = element.name;

        const moreInfoButton = document.createElement('a');
        moreInfoButton.href = `/HTML/ProductDisplay.html?Code=${element.code}&catagory=${element.catagory}`;
        moreInfoButton.className = 'more-info-button';
        moreInfoButton.innerHTML = 'לקביעת תור';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const image = document.createElement('img');
        image.src = element.image[0];
        image.dataset.index = 0; // Store the current image index

        const prevButton = document.createElement('button');
        prevButton.className = 'prev-button';
        prevButton.innerHTML = '&gt;';
        prevButton.onclick = () => showImage(i, -1, bag);

        const nextButton = document.createElement('button');
        nextButton.className = 'next-button';
        nextButton.innerHTML = '&lt;';
        nextButton.onclick = () => showImage(i, 1, bag);

        const icon = document.createElement('i');
        icon.className = 'fa fa-trash trash-icon';
        let btn = document.createElement('button');
        btn.append(icon);
        btn.className = 'buttonTrash';

        imageContainer.appendChild(prevButton);
        imageContainer.appendChild(image);
        imageContainer.appendChild(nextButton);

        divProduct.append(imageContainer);
        divProduct.append(moreInfoButton);
        divProduct.append(heartButton);
        divProduct.append(h1);
        divProduct.append(btn);
        bagElement.append(divProduct);

        //פונקציה המסירה את המוצר ומעדכנת את מצב העגלה
        btn.onclick = (e) => {
            flag2 = 1
            let countBag = localStorage.getItem('countBag');
            countBag = JSON.parse(countBag);
            countBag--;
            document.querySelector("#textCountBag").innerHTML = `.You Have ${countBag} items you love`;
            localStorage.setItem('countBag', JSON.stringify(countBag));

            e.target.style.color = "gray";
            openPopup();

            bag = bag.filter(item => item.code !== element.code);
            localStorage.setItem('currentBag', JSON.stringify(bag));
        
            setBag(bag);
        //    setProducts();
          
        }
    });
    
};


//פונקציה המחזירה את מערך המוצרים
const curenntBag = () => {
    let bag = localStorage.getItem('currentBag');
    if (!bag) {
        return [];
    }

    else {
        return JSON.parse(bag);
    }

}

//פונקציית להצגת התמונו של מוצר מסויים
const showImage = (productIndex, direction, newProduct) => {
    const product = newProduct[productIndex];
    const image = document.querySelectorAll('.image-container img')[productIndex];
    let currentIndex = parseInt(image.dataset.index);
    const imageArray = product.image;

    currentIndex = (currentIndex + direction + imageArray.length) % imageArray.length;
    image.src = imageArray[currentIndex];
    image.dataset.index = currentIndex;
};

function openPopup() {
    document.getElementById('popup-success').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup-success').style.display = 'none';
}


